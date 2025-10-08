import { GameProps } from "@/type/type";

export async function fetchGames(): Promise<GameProps[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/data/games.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("ゲームデータの取得に失敗しました");
  }

  return res.json();
}