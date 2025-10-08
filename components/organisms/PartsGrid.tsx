import { Grid, VStack, Heading, Alert, AlertIcon, AlertTitle, AlertDescription, Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PartsCard from "@/components/organisms/PartsCard";
import { PartWithPriceProps, SpecLevel } from "@/type/type";

const MotionBox = motion(Box);

interface PartsGridProps {
  parts: PartWithPriceProps[];
  partRanks: Record<string, SpecLevel>;
  globalRank: SpecLevel;
  onShowDetail: (part: PartWithPriceProps) => void;
  onRankChange: (type: string, newRank: SpecLevel) => void;
}

const PartsGrid: React.FC<PartsGridProps> = ({
  parts,
  partRanks,
  globalRank,
  onShowDetail,
  onRankChange,
}) => {
  return (
    <VStack spacing={6} w="full">
      <Heading variant="neonSubtitle">推奨パーツ構成</Heading>

      {parts.length > 0 ? (
        <AnimatePresence>
          <Grid
            templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
            gap={6}
            w="full"
          >
            {parts.map((part, index) => (
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
                  onShowDetail={onShowDetail}
                  onRankChange={onRankChange}
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
  );
};

export default PartsGrid;