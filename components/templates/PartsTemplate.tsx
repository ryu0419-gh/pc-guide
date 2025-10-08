"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useGameParts } from "@/hooks/useParts";
import { useCurrentParts } from "@/hooks/useCurrentParts";
import { usePerformance } from "@/hooks/usePerformance";
import { PartWithPriceProps, SpecLevel } from "@/type/type";

import LoadingState from "../molecules/Loading";
import ErrorState from "../molecules/Error";
import EmptyState from "../molecules/Empty";
import PartsSummaryCard from "../organisms/PartsSummary";
import ActionButtons from "../molecules/ActionButton";
import GameBanner from "../organisms/GameBanner";
import RankSelector from "../molecules/RankSelector";
import PartsGrid from "../organisms/PartsGrid";
import PartDetailModal from "../organisms/PartsModalCard";

const MotionBox = motion(Box);

const PCPartsTemplates: React.FC<{ gameId: string }> = ({ gameId }) => {
  const [globalRank, setGlobalRank] = useState<SpecLevel>("recommended");
  const [selectedPart, setSelectedPart] = useState<PartWithPriceProps | null>(
    null
  );
  const [partRanks, setPartRanks] = useState<Record<string, SpecLevel>>({});

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { games, parts, gameParts, loading, error } = useGameParts();

  const { currentGame, currentParts } = useCurrentParts({
    gameId,
    games,
    parts,
    gameParts,
    globalRank,
    partRanks,
  });

  const { totalPrice, averageScore, getPerformanceColor, getPerformanceGrade } =
    usePerformance(currentParts);

  const handleShowDetail = (part: PartWithPriceProps) => {
    setSelectedPart(part);
    onOpen();
  };

  const handleRankChange = (type: string, newRank: SpecLevel) => {
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

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!currentGame) {
    return <EmptyState message="ゲームが見つかりませんでした" />;
  }

  const currentRankLabel =
    globalRankOptions.find((opt) => opt.value === globalRank)?.label || "";

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
              fontFamily="heading"
            >
              PCパーツ推奨システム
            </Heading>
          </MotionBox>

          <GameBanner title={currentGame.title} thumbnail={currentGame.thumbnail} />

          <RankSelector
            options={globalRankOptions}
            selected={globalRank}
            onChange={(value) => {
              setGlobalRank(value as SpecLevel);
              setPartRanks({});
            }}
          />

          <PartsSummaryCard
            totalPrice={totalPrice}
            currentRankLabel={currentRankLabel}
            partsCount={currentParts.length}
            averageScore={averageScore}
            getPerformanceColor={getPerformanceColor}
            getPerformanceGrade={getPerformanceGrade}
          />

          <PartsGrid
            parts={currentParts}
            partRanks={partRanks}
            globalRank={globalRank}
            onShowDetail={handleShowDetail}
            onRankChange={handleRankChange}
          />

          <PartDetailModal part={selectedPart} isOpen={isOpen} onClose={onClose} />

          <Divider borderColor="rgba(0, 255, 255, 0.3)" />

          <ActionButtons
            onSave={() => console.log("保存")}
            onPurchase={() => console.log("購入サイトリンク表示")}
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default PCPartsTemplates;