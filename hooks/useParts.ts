import { useState, useEffect, useCallback } from "react";
import { GameProps, PartProps, GamePartProps } from "@/type/type";

interface UseGamePartsReturn {
  games: GameProps[];
  parts: PartProps[];
  gameParts: GamePartProps[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useGameParts = (): UseGamePartsReturn => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [parts, setParts] = useState<PartProps[]>([]);
  const [gameParts, setGameParts] = useState<GamePartProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const safeFetch = useCallback(async <T>(path: string): Promise<T | null> => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`${path} fetch failed`);
      return await res.json();
    } catch (err) {
      console.warn(`${path} の取得に失敗しました`, err);
      return null;
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    const [gamesRes, partsRes, gamePartsRes] = await Promise.allSettled([
      safeFetch<GameProps[]>("/data/games.json"),
      safeFetch<PartProps[]>("/data/parts.json"),
      safeFetch<GamePartProps[]>("/data/game_parts.json"),
    ]);

    const getValue = <T>(res: PromiseSettledResult<T | null>) =>
      res.status === "fulfilled" ? (res.value ?? []) : [];

    const games = getValue(gamesRes);
    const parts = getValue(partsRes);
    const gameParts = getValue(gamePartsRes);

    setGames(games);
    setParts(parts);
    setGameParts(gameParts);

    if (!games.length || !parts.length || !gameParts.length) {
      setError("一部のデータ取得に失敗しました");
    }

    setLoading(false);
  }, [safeFetch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { games, parts, gameParts, loading, error, refetch: fetchData };
};
