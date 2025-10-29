"use client";

import { Box, VStack } from "@chakra-ui/react";
import { SpecsTable } from "@/components/organisms/SpecsTable";
import { GameProps } from "@/type/type";
import { useRouter } from "next/navigation";

interface GameSpecTemplateProps {
  game: GameProps;
}

export default function GameSpecTemplate({ game }: GameSpecTemplateProps) {
  const router = useRouter();
  return (
    <Box py={8} px={4} w="full">
      <VStack spacing={8} w="full">
        <SpecsTable game={game} onViewParts={(rank) => {
          router.push(`/game/${game.id}/parts?rank=${rank}`);
        }} />
      </VStack>
    </Box>
  );
}
