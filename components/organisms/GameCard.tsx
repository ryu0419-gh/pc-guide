"use client";

import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { Game } from "@/types/game";
// import { SpecsTable } from "../molecules/SpecsTable";

type Props = {
  game: Game;
  onSelect: (id: string) => void;
};

export const GameCard = ({ game, onSelect }: Props) => {
  return (
    <Box
  borderWidth="1px"
  borderRadius="md"
  overflow="hidden"
  boxShadow="md"
  _hover={{ boxShadow: "lg", bg: "gray.700" }} // ← hover時に背景を少し変える
  p={3}
  cursor="pointer"
  onClick={() => onSelect(game.id)}
  bg="gray.900" // Chakraのテーマカラー
  color="white"
>
  <Box position="relative" w="100%" h="200px">
    <Image
      src={game.thumbnail}
      alt={game.title}
      fill
      style={{ objectFit: "cover", borderRadius: "0.375rem" }}
    />
  </Box>
  <Heading
    as="h3"
    size="md"
    mt={2}
    fontFamily="'Staatliches', sans-serif"
  >
    {game.title}
      </Heading>
      {/* <SpecsTable specs={game.specs} /> */}
    </Box>
  );
};
