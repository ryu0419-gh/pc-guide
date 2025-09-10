import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import GameCard from "@/components/organisms/GameCard";
import PCPartsRecommendation from "./pages/parts/parts";

export default function Home() {
  return (
    <Layout>
        <GameCard />
        <PCPartsRecommendation />

        </Layout>
  );
}
