"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Game } from "@/types/game";
import { GameCard } from "@/components/organisms/GameCard";
import { SearchBar } from "@/components/molecules/SearchBar";
import { VStack, SimpleGrid, Box } from "@chakra-ui/react";
import { HeroSection } from "../organisms/HeroSection";

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
    <VStack spacing={8} align="stretch" p={0}>
      {/* Heroセクション */}
      <HeroSection />
      {/* 検索バー */}
      <Box>
        <SearchBar
          query={query}
          onQueryChange={(e) => setQuery(e.target.value)}
          onSearch={handleSearch}
        />
      </Box>

      {/* ゲームカード一覧 */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} onSelect={handleSelectGame} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};