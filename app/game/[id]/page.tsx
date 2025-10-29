import GameSpecTemplate from "@/components/templates/GameSpecsTemplate";
import { fetchGames } from "@/lib/fetchGames";
interface GameDetailPageProps {
  params: {
    id: string;
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = params;
  const games = await fetchGames();
  const game = games.find((g) => g.id === id);

  if (!game) return <p>ゲームが見つかりません</p>;

  return <GameSpecTemplate game={game} />;
}
