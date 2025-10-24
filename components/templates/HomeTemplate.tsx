"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { VStack, SimpleGrid, Box } from "@chakra-ui/react";

import { GameCard } from "@/components/organisms/GameCard";
import { SearchBar } from "@/components/molecules/SearchBar";
import { HeroSection } from "../organisms/HeroSection";
import { GameProps } from "@/type/type";

type Props = {
  initialGames: GameProps[];
};

export const HomeTemplate = ({ initialGames }: Props) => {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState(initialGames);
  const router = useRouter();

  // 検索処理
  const handleSearch = () => {
    setGames(
      initialGames.filter((g) =>
        g.title.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  // ゲーム選択 → 詳細ページへ遷移
  const handleSelectGame = (id: string) => {
    router.push(`/game/${id}`);
  };

  return (
    <VStack spacing={8} align="stretch" p={0}>
      <HeroSection />
      <Box>
        <SearchBar
          query={query}
          onQueryChange={(e) => setQuery(e.target.value)}
          onSearch={handleSearch}
        />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} onSelect={handleSelectGame} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
