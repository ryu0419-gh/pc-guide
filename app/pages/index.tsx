import React, { useState } from "react";
import { useRouter } from "next/router";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
import gamesData from "@/data/games.json";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState(gamesData);
  const router = useRouter();

  // 検索処理
  const handleSearch = () => {
    setGames(
      gamesData.filter((g) =>
        g.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // ゲーム選択 → 詳細ページへ遷移
  const handleSelectGame = (id: string) => {
    router.push(`/game/${id}`);
  };

  return (
    <HomeTemplate
      query={query}
      onQueryChange={(e) => setQuery(e.target.value)}
      onSearch={handleSearch}
      games={games}
      onSelectGame={handleSelectGame}
    />
  );
};

export default HomePage;
