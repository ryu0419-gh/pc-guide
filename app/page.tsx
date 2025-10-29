import { fetchGames } from "@/lib/fetchGames";
import { HomeTemplate } from "@/components/templates/HomeTemplate";

export default async function HomePage() {
  const initialGames = await fetchGames();
  return <HomeTemplate initialGames={initialGames} />;
}
