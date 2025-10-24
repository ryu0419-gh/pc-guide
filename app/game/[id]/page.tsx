"use client";

import React, { useEffect, useState } from "react";
import { Box, Container, Text, VStack, Spinner } from "@chakra-ui/react";
import { GameProps } from "@/type/type";
import { SpecsTable } from "@/components/organisms/SpecsTable";

import { useRouter } from "next/navigation";
import { fetchGames } from "@/lib/fetchGames";

interface GameDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = React.use(params);
  const router = useRouter();

  const [game, setGame] = useState<GameProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGame = async () => {
      setLoading(true);
      try {
        const games = await fetchGames();
        const foundGame = games.find((g) => g.id === id) || null;
        setGame(foundGame);
        if (!foundGame) setError("ゲームが見つかりませんでした");
      } catch (err) {
        console.error(err);
        setError("ゲームデータの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    loadGame();
  }, [id]);

  const handleViewParts = () => {
    router.push(`/game/${id}/parts`);
  };

  if (loading)
    return (
      <Container maxW="1200px" py={8} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>読み込み中...</Text>
      </Container>
    );

  if (error)
    return (
      <Container maxW="1200px" py={8} textAlign="center">
        <Text color="red.500">{error}</Text>
      </Container>
    );

  return (
    <Box py={8} px={4} w="full">
      <VStack spacing={8} w="full">
        {game && <SpecsTable game={game} onViewParts={handleViewParts} />}
      </VStack>
    </Box>
  );
}
