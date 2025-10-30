import GameSpecTemplate from "@/components/templates/GameSpecsTemplate";
import { fetchGames } from "@/lib/fetchGames";
interface GameDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = await params;
  const games = await fetchGames();
  const game = games.find((g) => g.id === id);

  if (!game) return <p>ゲームが見つかりません</p>;
console.log("params in GameDetailPage:", params);

  return <GameSpecTemplate game={game} />;
}
