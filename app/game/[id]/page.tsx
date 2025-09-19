// app/game/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { SpecsTable } from "@/components/organisms/SpecsTable";
import { GameProps } from "@/type/type";
import gamesData from "@/data/games.json";
import { Box, Container, Text, VStack } from "@chakra-ui/react";

interface GameDetailPageProps {
  params: { id: string };
}

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const [game, setGame] = useState<GameProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ゲームデータから該当するゲームを検索
    const foundGame = gamesData.find(g => g.id === params.id);
    setGame(foundGame || null);
    setLoading(false);
  }, [params.id]);

  const handleViewParts = () => {
    // パーツページへの遷移
    window.location.href = `/game/${params.id}/parts`;
  };

  if (loading) {
    return (
      <Container maxW="1200px" py={8}>
        <Text color="neon.gray" textAlign="center">
          読み込み中...
        </Text>
      </Container>
    );
  }

  if (!game) {
    return (
      <Container maxW="1200px" py={8}>
        <Text color="neon.gray" textAlign="center">
          ゲームが見つかりませんでした
        </Text>
      </Container>
    );
  }

  return (
    <Box py={8} px={4} w="full">
      <VStack spacing={8} w="full">
        <SpecsTable game={game} onViewParts={handleViewParts} />
      </VStack>
    </Box>
  );
}