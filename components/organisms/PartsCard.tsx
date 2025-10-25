import {
  Card,
  CardBody,
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { PartWithPriceProps } from "@/type/type";
import RankBadge from "../atoms/RankBadge";
import Price from "../atoms/Price";
import PartSpecs from "../molecules/PartsSpecs";
import ButtonBase from "../atoms/ButtonBase";

const MotionCard = motion(Card);

interface PartsCardProps {
  part: PartWithPriceProps;
  currentRank: "budget" | "recommended" | "highend";
  availableRanks: ("budget" | "recommended" | "highend")[];
  onShowDetail: (part: PartWithPriceProps) => void;
  onRankChange: (
    type: string,
    newRank: "budget" | "recommended" | "highend",
  ) => void;
  isLoading?: boolean;
  index?: number;
}

const PartsCard: React.FC<PartsCardProps> = ({
  part,
  currentRank,
  availableRanks,
  onShowDetail,
  onRankChange,
  isLoading = false,
  index = 0,
}) => {
  const otherRanks = availableRanks.filter((rank) => rank !== currentRank);

  const getRankLabel = (rank: "budget" | "recommended" | "highend") => {
    switch (rank) {
      case "budget":
        return "コスパ重視";
      case "recommended":
        return "推奨";
      case "highend":
        return "ハイエンド";
      default:
        return rank;
    }
  };

  if (isLoading) {
    return (
      <Card variant="neon" h="400px">
        <CardBody>
          <VStack spacing={4} align="start">
            <Box w="full" h="20px" bg="gray.700" borderRadius="md" />
            <Box w="60%" h="16px" bg="gray.700" borderRadius="md" />
            <Box w="80%" h="24px" bg="gray.700" borderRadius="md" />
            <Box w="full" h="60px" bg="gray.700" borderRadius="md" />
          </VStack>
        </CardBody>
      </Card>
    );
  }

  return (
    <MotionCard
      variant="neon"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
      }}
      cursor="pointer"
      h="auto"
      minH={{ base: "auto", md: "480px" }}
      maxW={{ base: "280px", sm: "320px", md: "100%" }}
      w="full"
      mx="auto"
      position="relative"
    >
      <CardBody>
        <VStack spacing={5} align="start" h="full">
          <HStack justify="space-between" w="full" align="center">
            <Heading
              size="lg"
              color="neon.white"
              fontFamily="heading"
              textTransform="uppercase"
              letterSpacing="1px"
              fontSize={{ base: "md", md: "lg" }}
            >
              {part.type}
            </Heading>
            <RankBadge rank={currentRank} size="lg" />
          </HStack>

          <Heading
            size="md"
            color="brand.500"
            textShadow="0 0 10px rgba(0, 255, 255, 1)"
            fontFamily="heading"
            lineHeight="1.3"
            noOfLines={2}
            fontSize="lg"
          >
            {part.model}
          </Heading>

          <Price price={part.price} size="xl" />

          <Box w="full" flex={1}>
            <PartSpecs part={part} showDetailed={false} />
          </Box>

          {otherRanks.length > 0 && (
            <Box w="full">
              <Card
                variant="outline"
                bg="rgba(255, 255, 255, 0.05)"
                border="1px solid"
                borderColor="rgba(0, 255, 255, 0.2)"
                size="sm"
              >
                <CardBody p={4}>
                  <Text
                    fontSize="sm"
                    color="neon.gray"
                    mb={3}
                    fontFamily="heading"
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    他のランクを見る:
                  </Text>
                  <Stack direction={{ base: "column", md: "row" }} spacing={3}>
                    {otherRanks.map((rank) => (
                      <ButtonBase
                        fontSize="12px"
                        key={rank}
                        variant={rank}
                        onClick={() => onRankChange(part.type, rank)}
                        size="md"
                      >
                        {getRankLabel(rank)}に変更
                      </ButtonBase>
                    ))}
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          )}

          <Divider borderColor="rgba(0, 255, 255, 0.2)" />

          <HStack spacing={2} w="full">
            <ButtonBase
              variant="primary"
              onClick={() => onShowDetail(part)}
              fullWidth
              size="lg"
            >
              詳細を見る
            </ButtonBase>
          </HStack>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

export default PartsCard;
