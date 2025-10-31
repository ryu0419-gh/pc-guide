"use client";
import { Box, Container, VStack, Divider, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { usePCParts } from "@/hooks/usePCParts";

import LoadingState from "@/components/molecules/Loading";
import ErrorState from "@/components/molecules/Error";
import EmptyState from "@/components/molecules/Empty";
import GameBanner from "@/components/organisms/GameBanner";
import RankSelector from "@/components/molecules/RankSelector";
import PartsSummaryCard from "@/components/organisms/PartsSummary";
import PartsGrid from "@/components/organisms/PartsGrid";
import PartDetailModal from "@/components/organisms/PartsModalCard";
import ActionButtons from "@/components/molecules/ActionButton";
import { SpecLevel } from "@/type/type";

const MotionBox = motion(Box);

interface PCPartsTemplateProps {
  gameId: string;
  rank?: "budget" | "recommended" | "highend";
}

const PCPartsTemplate: React.FC<PCPartsTemplateProps> = ({ gameId,rank }) => {
  const {
    loading,
    error,
    currentGame,
    currentParts,
    globalRank,
    partRanks,
    selectedPart,
    isModalOpen,
    totalPrice,
    averageScore,
    currentRankLabel,
    handleGlobalRankChange,
    handlePartRankChange,
    handleShowDetail,
    handleSave,
    handlePurchase,
    closeModal,
    getPerformanceColor,
    getPerformanceGrade,
    globalRankOptions,
  } = usePCParts(gameId),rank;

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!currentGame)
    return <EmptyState message="ゲームが見つかりませんでした" />;

  return (
    <Box minH="100vh" bg="neon.black">
      <Container
        maxW="1200px"
        px={{ base: 0, sm: 4, md: 6 }}
        py={8}
        centerContent={false}
      >
        <VStack spacing={{ base: 6, md: 8 }}>
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
              PCパーツ
              <Box as="br" display={{ base: "block", md: "none" }} />
              推奨システム
            </Heading>
          </MotionBox>

          <GameBanner
            title={currentGame.title}
            thumbnail={currentGame.thumbnail}
          />

          <RankSelector
            options={globalRankOptions}
            selected={globalRank}
            onChange={(value) => handleGlobalRankChange(value as SpecLevel)}
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
            onRankChange={handlePartRankChange}
          />

          <PartDetailModal
            part={selectedPart}
            isOpen={isModalOpen}
            onClose={closeModal}
          />

          <Divider borderColor="rgba(0, 255, 255, 0.3)" />

          <ActionButtons onSave={handleSave} onPurchase={handlePurchase} />
        </VStack>
      </Container>
    </Box>
  );
};

export default PCPartsTemplate;
