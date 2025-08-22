"use client";
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { GameCard } from "@/components/organisms/GameCard";
import games from "@/data/games.json";

export default function Home() {
  return (
    <Layout>
      <GameCard game={games[0]}
      onSelect={() => {}}
      />
    </Layout>
  );
}
