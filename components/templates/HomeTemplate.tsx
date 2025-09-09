"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Game } from "@/types/game";
import { GameCard } from "@/components/organisms/GameCard";
import { SearchBar } from "@/components/molecules/SearchBar";

type Props = {
  initialGames: Game[];
};

export const HomeTemplate = ({ initialGames }: Props) => {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState(initialGames);
  const router = useRouter();

  // 検索処理
  const handleSearch = () => {
    setGames(
      initialGames.filter((g) =>
        g.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // ゲーム選択 → 詳細ページへ遷移
  const handleSelectGame = (id: string) => {
    router.push(`/game/${id}`);
  };

  return (
    <div className="p-4">
      <SearchBar
        query={query}
        onQueryChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onSelect={handleSelectGame} />
        ))}
      </div>
    </div>
  );
};