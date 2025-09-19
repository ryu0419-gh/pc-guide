"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  CardBody,
  VStack,
  HStack,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  useDisclosure,
  SimpleGrid,
  Divider,
  Badge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import ToggleButton from "@/components/atoms/ToggleButton";
import PartsCard from "@/components/organisms/PartsCard";
import ButtonBase from "@/components/atoms/ButtonBase";
import PartDetailModal from "@/components/organisms/PartsModalCard";
import { parsePrice } from "@/components/atoms/Price";

import gameData from "@/data/games.json";
import partsData from "@/data/parts.json";
import gamePartsData from "@/data/game_parts.json";
import {
  PartWithPriceProps,
  GameProps,
  PartProps,
  GamePartProps,
} from "@/type/type";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const PCPartsTemplates: React.FC<{ gameId: string }> = ({ gameId }) => {
  const [globalRank, setGlobalRank] = useState<
    "budget" | "recommended" | "highend"
  >("recommended");
  const [selectedPart, setSelectedPart] = useState<PartWithPriceProps | null>(
    null,
  );
  const [partRanks, setPartRanks] = useState<{
    [key: string]: "budget" | "recommended" | "highend";
  }>({});

  const { isOpen, onOpen, onClose } = useDisclosure();

  const currentGame = gameData.find((g) => g.id === gameId) || gameData[0];

  const getCurrentParts = (): PartWithPriceProps[] => {
    const categoryOrder = [
      "CPU",
      "GPU",
      "Memory",
      "Storage",
      "Motherboard",
      "PowerSupply",
    ];
    const result: PartWithPriceProps[] = [];

    categoryOrder.forEach((category) => {
      const rankToUse = partRanks[category] || globalRank;

      const gamePartRelation = gamePartsData.find(
        (gp) =>
          gp.gameId === currentGame.id &&
          gp.recommendationType === rankToUse &&
          partsData.find((p) => p.id === gp.partId && p.type === category),
      );

      if (gamePartRelation) {
        const partDetail = partsData.find(
          (p) => p.id === gamePartRelation.partId,
        );
        if (partDetail) {
          result.push({
            ...partDetail,
            price: gamePartRelation.price,
          });
        }
      }
    });

    return result;
  };

  const currentParts = getCurrentParts();
  const totalPrice = currentParts.reduce(
    (sum, part) => sum + parsePrice(part.price),
    0,
  );
  const averageScore =
    currentParts.length > 0
      ? Math.round(
          currentParts.reduce((sum, part) => sum + part.benchmarkScore, 0) /
            currentParts.length,
        )
      : 0;

  const handleShowDetail = (part: PartWithPriceProps) => {
    setSelectedPart(part);
    onOpen();
  };

  const handleRankChange = (
    type: string,
    newRank: "budget" | "recommended" | "highend",
  ) => {
    setPartRanks((prev) => ({
      ...prev,
      [type]: newRank,
    }));
  };

  const globalRankOptions = [
    { value: "budget", label: "コスパ重視" },
    { value: "recommended", label: "推奨" },
    { value: "highend", label: "ハイエンド" },
  ];

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "purple.500";
    if (score >= 80) return "green.500";
    if (score >= 70) return "yellow.500";
    if (score >= 60) return "orange.500";
    return "red.500";
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return "S";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    return "D";
  };

  return (
    <Box minH="100vh" bg="neon.black">
      <Container maxW="1400px" py={8}>
        <VStack spacing={8}>
          <MotionBox
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              variant="neonTitle"
              textAlign="center"
              fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            >
              PCパーツ推奨システム
            </Heading>
          </MotionBox>

          <MotionCard
            variant="neonHighlight"
            w="full"
            position="relative"
            overflow="hidden"
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* 背景画像 */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              backgroundImage={`url(${currentGame.thumbnail})`}
              backgroundSize="cover"
              backgroundPosition="center top"
              opacity={0.6}
              filter="blur(2px)"
              zIndex={0}
            />

            {/* オーバーレイ */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,255,255,0.1))"
              zIndex={1}
            />

            <CardBody position="relative" zIndex={2}>
              <VStack spacing={4}>
                <Heading
                  variant="neonSubtitle"
                  fontSize=""
                  textShadow="0 0 10px rgba(0, 255, 255, 0.8)"
                  color="neon.white"
                >
                  対象ゲーム
                </Heading>
                <Text
                  fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                  fontWeight="bold"
                  color="brand.500"
                  fontFamily="STAATLICHES, sans-serif"
                  textShadow="0 0 10px rgba(0, 255, 255, 1)"
                  letterSpacing="2px"
                  textTransform="uppercase"
                  textAlign="center"
                  lineHeight="1.1"
                >
                  {currentGame.title}
                </Text>
              </VStack>
            </CardBody>
          </MotionCard>
          <MotionBox
            w="full"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <VStack spacing={4}>
              <Heading variant="neonSubtitle">構成を選択</Heading>
              <ToggleButton
                options={globalRankOptions}
                selected={globalRank}
                onChange={(value) => {
                  setGlobalRank(value as "budget" | "recommended" | "highend");
                  setPartRanks({});
                }}
              />
            </VStack>
          </MotionBox>

          <MotionCard
            variant="neon"
            w="full"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <CardBody>
              <VStack spacing={4}>
                <Heading variant="neonSubtitle">パーツ構成サマリー</Heading>

                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 4 }}
                  spacing={6}
                  w="full"
                >
                  <Stat textAlign="center">
                    <StatLabel
                      color="neon.gray"
                      fontSize="sm"
                      textTransform="uppercase"
                    >
                      総額
                    </StatLabel>
                    <StatNumber
                      color="brand.500"
                      fontSize="2xl"
                      fontFamily="heading"
                      textShadow="0 0 10px rgba(0, 255, 255, 0.8)"
                    >
                      ¥{totalPrice.toLocaleString()}
                    </StatNumber>
                  </Stat>

                  <Stat textAlign="center">
                    <StatLabel
                      color="neon.gray"
                      fontSize="sm"
                      textTransform="uppercase"
                    >
                      構成レベル
                    </StatLabel>
                    <StatNumber
                      color="neon.white"
                      fontSize="xl"
                      fontFamily="heading"
                    >
                      {
                        globalRankOptions.find(
                          (opt) => opt.value === globalRank,
                        )?.label
                      }
                    </StatNumber>
                  </Stat>

                  <Stat textAlign="center">
                    <StatLabel
                      color="neon.gray"
                      fontSize="sm"
                      textTransform="uppercase"
                    >
                      パーツ数
                    </StatLabel>
                    <StatNumber
                      color="neon.white"
                      fontSize="xl"
                      fontFamily="heading"
                    >
                      {currentParts.length}個
                    </StatNumber>
                  </Stat>

                  <Stat textAlign="center">
                    <StatLabel
                      color="neon.gray"
                      fontSize="sm"
                      textTransform="uppercase"
                    >
                      性能スコア
                    </StatLabel>
                    <HStack justify="center" spacing={2}>
                      <StatNumber
                        color={getPerformanceColor(averageScore)}
                        fontSize="xl"
                        fontFamily="heading"
                      >
                        {averageScore}
                      </StatNumber>
                      <Badge
                        colorScheme={
                          getPerformanceColor(averageScore).split(".")[0]
                        }
                        fontSize="md"
                        px={2}
                        py={1}
                      >
                        {getPerformanceGrade(averageScore)}
                      </Badge>
                    </HStack>
                  </Stat>
                </SimpleGrid>
              </VStack>
            </CardBody>
          </MotionCard>

          <VStack spacing={6} w="full">
            <Heading variant="neonSubtitle">推奨パーツ構成</Heading>

            {currentParts.length > 0 ? (
              <AnimatePresence>
                <Grid
                  templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
                  gap={6}
                  w="full"
                >
                  {currentParts.map((part, index) => (
                    <MotionBox
                      key={`${part.type}-${index}`}
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <PartsCard
                        part={part}
                        currentRank={partRanks[part.type] || globalRank}
                        availableRanks={["recommended", "budget", "highend"]}
                        onShowDetail={handleShowDetail}
                        onRankChange={handleRankChange}
                        index={index}
                      />
                    </MotionBox>
                  ))}
                </Grid>
              </AnimatePresence>
            ) : (
              <Alert status="info" variant="solid" borderRadius="12px">
                <AlertIcon />
                <VStack align="start" spacing={1}>
                  <AlertTitle>パーツが見つかりません</AlertTitle>
                  <AlertDescription>
                    選択された構成に対応するパーツがありません。別の構成をお試しください。
                  </AlertDescription>
                </VStack>
              </Alert>
            )}
          </VStack>

          <PartDetailModal
            part={selectedPart}
            isOpen={isOpen}
            onClose={onClose}
          />

          <Divider borderColor="rgba(0, 255, 255, 0.3)" />

          <HStack spacing={4} flexWrap="wrap" justify="center">
            <ButtonBase
              variant="success"
              onClick={() => {
                // 後でリンクに変更予定
                console.log("保存");
                // 将来的にはここにルーティング処理を追加
              }}
            >
              この構成を保存する
            </ButtonBase>
            <ButtonBase
              variant="success"
              onClick={() => {
                // 後でリンクに変更予定
                console.log("購入サイトリンク表示");
              }}
            >
              購入サイトはこちら
            </ButtonBase>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default PCPartsTemplates;
