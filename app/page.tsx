import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { Game } from "@/types/game";


export default async function HomePage() {
const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const res = await fetch(`${baseUrl}/data/games.json`, {
  cache: "no-store",
});
  const gamesData: Game[] = await res.json();

  return (
    <Layout>
      <HomeTemplate initialGames={gamesData} />
    </Layout>
  );
}