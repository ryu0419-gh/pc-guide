/* eslint-disable @typescript-eslint/no-explicit-any */

import PCPartsTemplate from "@/components/templates/PartsTemplate";
import { fetchGames } from "@/lib/fetchGames";

export async function generateStaticParams() {
  const games = await fetchGames();
  return games.map((game) => ({
    id: game.id,
  }));
}


export default async function PartsPage({ params }: any) {
  const { id } = params;

  const rank: "budget" | "recommended" | "highend" = "recommended";

  return <PCPartsTemplate gameId={id} rank={rank} />;
}
