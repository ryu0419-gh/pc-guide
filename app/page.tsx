import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
import gamesData from "@/data/games.json";

export default function HomePage() {

  return (
    <Layout>
      <HomeTemplate initialGames={gamesData} />
    </Layout>
  );
}

