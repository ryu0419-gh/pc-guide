import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { fetchGames } from "@/lib/fetchGames";
import { SpecsTable } from "@/components/organisms/SpecsTable";
import { GameProps } from "@/type/type";

interface GameDetailPageProps {
  params: { id: string };
}
export default async function GameDetailPage({
  params,
}: GameDetailPageProps) {
  const { id } = params;

  let game: GameProps | null = null;
  let error: string | null = null;

  try {
    const games = await fetchGames();
    game = games.find((g) => g.id === id) ?? null;
    if (!game) {
      error = "ゲームが見つかりませんでした";
    }
  } catch {
    error = "ゲームデータの取得に失敗しました";
  }

  if (error) {
    return (
      <Container maxW="1200px" py={8} textAlign="center">
        <Text color="red.500">{error}</Text>
      </Container>
    );
  }

  return (
    <Box py={8} px={4} w="full">
      <VStack spacing={8} w="full">
        {game && <SpecsTable game={game} />}
      </VStack>
    </Box>
  );
}