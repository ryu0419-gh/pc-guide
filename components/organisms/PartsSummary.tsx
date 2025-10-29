import {
  Card,
  CardBody,
  VStack,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

interface PartsSummaryCardProps {
  totalPrice: number;
  currentRankLabel: string;
  partsCount: number;
  averageScore: number;
  getPerformanceColor: (score: number) => string;
  getPerformanceGrade: (score: number) => string;
}

const PartsSummaryCard: React.FC<PartsSummaryCardProps> = ({
  totalPrice,
  currentRankLabel,
  partsCount,
  averageScore,
  getPerformanceColor,
  getPerformanceGrade,
}) => {
  return (
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

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
            <Stat textAlign="center">
              <StatLabel
                color="neon.gray"
                fontSize="lg"
                textTransform="uppercase"
                fontFamily="heading"
                fontWeight="bold"
              >
                総額
              </StatLabel>
              <StatNumber
                color="brand.500"
                fontSize="4xl"
                fontFamily="heading"
                textShadow="0 0 5px rgba(0, 255, 255, 0.8)"
                mt={2}
              >
                ¥{totalPrice.toLocaleString()}
              </StatNumber>
            </Stat>

            <Stat textAlign="center">
              <StatLabel
                color="neon.gray"
                fontSize="lg"
                textTransform="uppercase"
                fontFamily="heading"
                fontWeight="bold"
              >
                構成レベル
              </StatLabel>
              <StatNumber
                color="neon.white"
                fontSize="3xl"
                fontFamily="heading"
                mt={2}
              >
                {currentRankLabel}
              </StatNumber>
            </Stat>

            <Stat textAlign="center">
              <StatLabel
                color="neon.gray"
                fontSize="lg"
                textTransform="uppercase"
                fontFamily="heading"
                fontWeight="bold"
              >
                パーツ数
              </StatLabel>
              <StatNumber
                color="neon.white"
                fontSize="3xl"
                fontFamily="heading"
                mt={2}
              >
                {partsCount}個
              </StatNumber>
            </Stat>

            <Stat textAlign="center">
              <StatLabel
                color="neon.gray"
                fontSize="lg"
                textTransform="uppercase"
                fontFamily="heading"
                fontWeight="bold"
              >
                性能スコア
              </StatLabel>
              <HStack justify="center" spacing={3} mt={2}>
                <StatNumber
                  color={getPerformanceColor(averageScore)}
                  fontSize="3xl"
                  fontFamily="heading"
                >
                  {averageScore}
                </StatNumber>
                <Badge
                  colorScheme={getPerformanceColor(averageScore).split(".")[0]}
                  fontSize="xl"
                  px={4}
                  py={2}
                  fontFamily="heading"
                >
                  {getPerformanceGrade(averageScore)}
                </Badge>
              </HStack>
            </Stat>
          </SimpleGrid>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

export default PartsSummaryCard;
