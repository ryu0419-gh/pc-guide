"use client";

import { Box, VStack } from "@chakra-ui/react";
import { SpecsTable } from "@/components/organisms/SpecsTable";
import { GameProps } from "@/type/type";

interface GameSpecTemplateProps {
  game: GameProps;
}

export default function GameSpecTemplate({ game }: GameSpecTemplateProps) {
  return (
    <Box py={8} px={4} w="full">
      <VStack spacing={8} w="full">
        <SpecsTable game={game} />
      </VStack>
    </Box>
  );
}
