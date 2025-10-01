import { HomeTemplate } from "@/components/templates/HomeTemplate";
import gamesData from "@/data/games.json";

export default function HomePage() {
  return <HomeTemplate initialGames={gamesData} />;
}
