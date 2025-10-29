import { useMemo } from "react";

import { GameProps } from "@/type/type";

export const useCurrentGame = (games: GameProps[], gameId: string) => {
  const currentGame = useMemo(() => {
    if (!games || games.length === 0) return null;
    return games.find((g) => g.id === gameId) || null;
  }, [games, gameId]);

  return { currentGame };
};
