"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  HStack,
  Circle,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ButtonBase from "@/components/atoms/ButtonBase";
import { GameProps } from "@/type/type";

const MotionCard = motion(Card);

interface SpecsTableProps {
  game: GameProps;
  onViewParts?: (rank: "budget" | "recommended" | "highend") => void;
}

const rows = (game: GameProps) => [
  { key: "OS", budget: game.budgetOs, rec: game.recommendedOs },
  { key: "CPU", budget: game.budgetProcessor, rec: game.recommendedProcessor },
  { key: "GPU", budget: game.budgetGraphics, rec: game.recommendedGraphics },
  { key: "RAM", budget: game.budgetMemory, rec: game.recommendedMemory },
  { key: "ストレージ", budget: game.budgetStorage, rec: game.recommendedStorage },
];

/** モバイル専用（md未満）: 比較は縦に並べるカードUI */
function MobileSpecsCards({ game }: { game: GameProps }) {
  return (
    <Box display={{ base: "block", md: "none" }} w="full">
      <VStack spacing={3} align="stretch">
        {rows(game).map((r) => (
          <Card
            key={r.key}
            variant="outline"
            bg="rgba(0,0,0,0.30)"
            borderColor="rgba(0,255,255,0.20)"
            borderWidth="1px"
          >
            <CardBody p={4}>
              <VStack align="stretch" spacing={2}>
                <Text fontSize="xs" color="neon.white" opacity={0.85}>
                  {r.key}
                </Text>

                <Box>
                  <Text fontSize="xs" color="neon.gray" mb={1}>
                    最低
                  </Text>
                  <Text
                    fontSize="sm"
                    color="neon.white"
                    whiteSpace="normal"
                    wordBreak="break-word"
                    lineHeight="1.45"
                  >
                    {r.budget || "-"}
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="xs" color="brand.500" mb={1}>
                    推奨
                  </Text>
                  <Text
                    fontSize="sm"
                    color="neon.white"
                    fontWeight="semibold"
                    whiteSpace="normal"
                    wordBreak="break-word"
                    lineHeight="1.45"
                  >
                    {r.rec || "-"}
                  </Text>
                </Box>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </Box>
  );
}

/** タブレット以上（md～）: 従来の横並びテーブル */
function DesktopSpecsTable({ game }: { game: GameProps }) {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      w="full"
      overflowX="auto"
      border="2px solid"
      borderColor="rgba(0, 255, 255, 0.3)"
      borderRadius="12px"
      bg="rgba(0, 0, 0, 0.2)"
    >
      <Table variant="simple" size={{ base: "sm", md: "md" }}>
        <Thead>
          <Tr borderBottomWidth="2px" borderColor="brand.500">
            <Th
              color="brand.500"
              fontFamily="heading"
              textTransform="uppercase"
              fontSize={{ base: "xs", md: "sm" }}
              letterSpacing="2px"
              textAlign="left"
              py={{ base: 3, md: 4 }}
              px={{ base: 3, md: 4 }}
              borderRight="1px solid rgba(0, 255, 255, 0.2)"
              bg="rgba(0, 255, 255, 0.05)"
            >
              項目
            </Th>
            <Th
              color="neon.white"
              fontFamily="heading"
              textTransform="uppercase"
              fontSize={{ base: "xs", md: "sm" }}
              letterSpacing="1px"
              textAlign="center"
              py={{ base: 3, md: 4 }}
              px={{ base: 3, md: 4 }}
              borderRight="1px solid rgba(0, 255, 255, 0.2)"
            >
              最低動作スペック
            </Th>
            <Th
              color="brand.500"
              fontFamily="heading"
              textTransform="uppercase"
              fontSize={{ base: "xs", md: "sm" }}
              letterSpacing="1px"
              textAlign="center"
              py={{ base: 3, md: 4 }}
              px={{ base: 3, md: 4 }}
              bg="rgba(0, 255, 255, 0.1)"
              textShadow="0 0 8px rgba(0, 255, 255, 0.8)"
            >
              推奨スペック
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows(game).map((r) => (
            <Tr
              key={r.key}
              borderBottomWidth="1px"
              borderColor="rgba(0, 255, 255, 0.2)"
              _hover={{ bg: "rgba(0, 255, 255, 0.03)" }}
              transition="all 0.2s ease"
            >
              <Td
                fontWeight="bold"
                color="neon.white"
                fontFamily="heading"
                textTransform="uppercase"
                fontSize={{ base: "xs", md: "sm" }}
                py={{ base: 3, md: 4 }}
                px={{ base: 3, md: 4 }}
                borderRight="1px solid rgba(0, 255, 255, 0.2)"
                bg="rgba(0, 255, 255, 0.05)"
                whiteSpace="nowrap"
              >
                {r.key}
              </Td>
              <Td
                color="neon.gray"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontFamily="body"
                textAlign="center"
                py={{ base: 3, md: 4 }}
                px={{ base: 3, md: 4 }}
                borderRight="1px solid rgba(0, 255, 255, 0.2)"
                whiteSpace="normal"
                wordBreak="break-word"
                lineHeight="1.5"
              >
                {r.budget || "-"}
              </Td>
              <Td
                color="neon.white"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontFamily="body"
                textAlign="center"
                py={{ base: 3, md: 4 }}
                px={{ base: 3, md: 4 }}
                fontWeight="bold"
                bg="rgba(0, 255, 255, 0.1)"
                whiteSpace="normal"
                wordBreak="break-word"
                lineHeight="1.5"
              >
                {r.rec || "-"}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export const SpecsTable = ({ game, onViewParts }: SpecsTableProps) => {
  const router = useRouter();

  if (!game) {
    return (
      <Box w="full">
        <Card variant="neon">
          <CardBody>
            <Text color="neon.gray" textAlign="center">
              ゲーム情報を読み込み中...
            </Text>
          </CardBody>
        </Card>
      </Box>
    );
  }

  const handleViewParts = (rank: "budget" | "recommended" | "highend") => {
    if (onViewParts) onViewParts(rank);
    else router.push(`/game/${game.id}/parts?rank=${rank}`);
  };

  return (
    <Box w="full">
      <VStack spacing={4} w="full">
        {/* ヒーロー帯：モバイルでの圧迫を軽減 */}
        <Box
          position="relative"
          w="full"
          h={{ base: "160px", md: "240px", lg: "280px" }} // baseを少し低めに
          borderRadius="xl"
          overflow="hidden"
          bg="rgba(0,0,0,0.6)"
          boxShadow={{ base: "0 0 12px rgba(0,255,255,0.18)", md: "0 0 30px rgba(0,255,255,0.25)" }}
        >
          <Box
            position="absolute"
            inset={0}
            backgroundImage={`url(${game.thumbnail})`}
            backgroundSize="cover"
            backgroundPosition="center"
            filter="blur(2.5px)"
            transform="scale(1.05)"
            opacity={0.7}
          />
          <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,255,255,0.25))"
          />
          <VStack
            position="relative"
            zIndex={1}
            h="100%"
            justify="center"
            align="center"
            spacing={2}
            p={{ base: 4, md: 10 }}
          >
            <Heading
              textAlign="center"
              size="lg"
              color="neon.white"
              textTransform="uppercase"
              letterSpacing="1px"
              textShadow="0 0 10px rgba(0, 255, 255, 0.6)"
            >
              対象ゲーム
              <Text
                fontSize={{ base: "3xl", md: "6xl", lg: "7xl" }} // baseで縮小
                fontWeight="bold"
                color="brand.500"
                textAlign="center"
                textTransform="uppercase"
                lineHeight={{ base: "1.15", md: "1.1" }}
                textShadow={{ base: "0 0 6px rgba(0, 255, 255, 0.7)", md: "0 0 12px rgba(0, 255, 255, 1)" }}
              >
                {game.title}
              </Text>
            </Heading>
          </VStack>
        </Box>

        <MotionCard
          variant="neon"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          w="full"
        >
          <CardBody>
            <VStack spacing={6}>
              {/* ヘッダー */}
              <VStack spacing={1} textAlign="center">
                <Heading
                  variant="neonSubtitle"
                  fontSize={{ base: "lg", md: "2xl" }}
                  color="brand.500"
                  textShadow="0 0 10px rgba(0, 255, 255, 0.8)"
                >
                  システム要件
                </Heading>
                <Text color="neon.gray" fontSize={{ base: "xs", md: "sm" }} fontFamily="body">
                  {game.title} の動作に必要なPC性能
                </Text>
              </VStack>

              {/* ▼ ここが肝： モバイルはカード、md以上はテーブル */}
              <MobileSpecsCards game={game} />
              <DesktopSpecsTable game={game} />

              {/* 説明カードたち（余白をモバイルで控えめに） */}
              <Box
                mt={4}
                marginLeft={{ base: 0, md: "80px" }}
                maxW={{ base: "100%", md: "500px" }}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 10 }}>
                  {/* コスパ重視 */}
                  <Box
                    p={4}
                    border="2px solid"
                    borderColor="neon.red"
                    borderRadius="12px"
                    bg="rgba(239, 68, 68, 0.05)"
                    boxShadow={{ base: "0 0 12px rgba(239,68,68,0.25)", md: "0 0 15px rgba(239, 68, 68, 0.3)" }}
                    _hover={{ boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)", transform: "scale(1.02)" }}
                    transition="all 0.2s ease"
                    cursor="pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleViewParts("budget")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleViewParts("budget");
                      }
                    }}
                    aria-label="コスパ重視のパーツ構成へ移動"
                  >
                    <VStack align="start" spacing={2}>
                      <HStack>
                        <Circle size="16px" bg="neon.red" boxShadow="0 0 10px rgba(239, 68, 68, 0.8)" />
                        <Text
                          fontWeight="bold"
                          color="neon.red"
                          fontFamily="heading"
                          textTransform="uppercase"
                          letterSpacing="1px"
                          fontSize="sm"
                          textShadow="0 0 8px rgba(239, 68, 68, 0.8)"
                        >
                          コスパ重視
                        </Text>
                      </HStack>
                      <Text
                        fontSize="xs"
                        color="neon.white"
                        fontFamily="body"
                        lineHeight="1.4"
                        borderLeft="2px solid rgba(239, 68, 68, 0.3)"
                        pl={2}
                      >
                        ゲームが動作する最低限のスペックです。快適性は期待できません。
                      </Text>
                    </VStack>
                  </Box>

                  {/* 推奨 */}
                  <Box
                    p={4}
                    border="2px solid"
                    borderColor="brand.500"
                    borderRadius="12px"
                    bg="rgba(0, 255, 255, 0.05)"
                    boxShadow={{ base: "0 0 12px rgba(0,255,255,0.25)", md: "0 0 15px rgba(0, 255, 255, 0.3)" }}
                    _hover={{ boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)", transform: "scale(1.02)" }}
                    transition="all 0.2s ease"
                    cursor="pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleViewParts("recommended")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleViewParts("recommended");
                      }
                    }}
                    aria-label="推奨スペックのパーツ構成へ移動"
                  >
                    <VStack align="start" spacing={2}>
                      <HStack>
                        <Circle size="16px" bg="brand.500" boxShadow="0 0 10px rgba(0, 255, 255, 0.8)" />
                        <Text
                          fontWeight="bold"
                          color="brand.500"
                          fontFamily="heading"
                          textTransform="uppercase"
                          letterSpacing="1px"
                          fontSize="sm"
                          textShadow="0 0 8px rgba(0, 255, 255, 0.8)"
                        >
                          推奨スペック
                        </Text>
                      </HStack>
                      <Text
                        fontSize="xs"
                        color="neon.white"
                        fontFamily="body"
                        lineHeight="1.4"
                        borderLeft="2px solid rgba(0, 255, 255, 0.3)"
                        pl={2}
                      >
                        快適にゲームをプレイできるスペックです。このスペック以上を推奨します。
                      </Text>
                    </VStack>
                  </Box>
                </SimpleGrid>
              </Box>

              {/* 注釈 */}
              <Text fontSize="xs" color="neon.white" textAlign="center" fontFamily="body" lineHeight="1.4">
                ※ 推奨スペックは快適にゲームをプレイできる性能です
                <br />
                最低動作スペックでは画質やフレームレートが制限される場合があります
              </Text>

              {/* CTA */}
              <Box pt={2}>
                <ButtonBase
                    variant="primary"
                    onClick={() => handleViewParts("budget")}
                    size="lg"
                    fullWidth
                  >
                    このスペックに基づいたパーツ構成へ
                </ButtonBase>
              </Box>
            </VStack>
          </CardBody>
        </MotionCard>
      </VStack>
    </Box>
  );
};
