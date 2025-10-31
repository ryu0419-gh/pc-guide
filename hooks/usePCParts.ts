import { useGameParts } from "@/hooks/useParts";
import { useCurrentParts } from "@/hooks/useCurrentParts";
import { usePerformance } from "@/hooks/usePerformance";
import { usePartsState } from "@/hooks/usePartsState";
import { GLOBAL_RANK_OPTIONS } from "@/constants/partsRank";

export const usePCParts = (gameId: string, initialRank?: "budget" | "recommended" | "highend") => {
  const { games, parts, gameParts, loading, error } = useGameParts();

  const {
    globalRank,
    partRanks,
    selectedPart,
    isModalOpen,
    handleGlobalRankChange,
    handlePartRankChange,
    handleShowDetail,
    closeModal,
  } = usePartsState(initialRank);

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

  const handleSave = () => {
    console.log("保存処理");
  };

  const handlePurchase = () => {
    console.log("購入サイトリンク表示");
  };

  // 現在のランクラベル取得
  const currentRankLabel =
    GLOBAL_RANK_OPTIONS.find((opt) => opt.value === globalRank)?.label || "";

  return {
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
    globalRankOptions: GLOBAL_RANK_OPTIONS,
  };
};
