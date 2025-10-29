import { useMemo } from "react";
import {
  GameProps,
  PartProps,
  GamePartProps,
  PartWithPriceProps,
  SpecLevel,
} from "@/type/type";

interface UseCurrentPartsParams {
  gameId: string;
  games: GameProps[];
  parts: PartProps[];
  gameParts: GamePartProps[];
  globalRank: SpecLevel;
  partRanks: Record<string, SpecLevel>;
}

// パーツカテゴリの定数化
const PART_CATEGORIES = [
  "CPU",
  "GPU",
  "Memory",
  "Storage",
  "Motherboard",
  "PowerSupply",
] as const;

export const useCurrentParts = ({
  gameId,
  games,
  parts,
  gameParts,
  globalRank,
  partRanks,
}: UseCurrentPartsParams) => {
  const currentGame = useMemo(
    () => games.find((g) => g.id === gameId) || null,
    [games, gameId],
  );

  const currentParts = useMemo(() => {
    if (!currentGame) return [];

    const partsMap = new Map(parts.map((p) => [p.id, p]));
    const result: PartWithPriceProps[] = [];

    for (const category of PART_CATEGORIES) {
      const rank = partRanks[category] || globalRank;

      const gamePartRelation = gameParts.find(
        (gp) =>
          gp.gameId === currentGame.id &&
          gp.recommendationType === rank &&
          partsMap.get(gp.partId)?.type === category,
      );

      if (gamePartRelation) {
        const partDetail = partsMap.get(gamePartRelation.partId);

        if (partDetail) {
          result.push({
            ...partDetail,
            price: gamePartRelation.price,
          });
        }
      }
    }

    return result;
  }, [currentGame, parts, gameParts, globalRank, partRanks]);

  return { currentGame, currentParts };
};
