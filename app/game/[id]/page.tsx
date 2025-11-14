/* eslint-disable @typescript-eslint/no-explicit-any */

import GameSpecTemplate from "@/components/templates/GameSpecsTemplate";
import { fetchGames } from "@/lib/fetchGames";

// 動的ルート /game/[id] を静的に吐き出すために必要
export async function generateStaticParams() {
  const games = await fetchGames();
  return games.map((game) => ({
    id: game.id,
  }));
}

// PageProps の型制約がうるさいので、ここは一旦 any で受ける
export default async function GameDetailPage({ params }: any) {
  const { id } = params;

  const games = await fetchGames();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return <p>ゲームが見つかりません</p>;
  }

  return <GameSpecTemplate game={game} />;
}
