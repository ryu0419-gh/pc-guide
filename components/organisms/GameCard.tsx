"use client";

import React from "react";
import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";

import { GameProps } from "@/type/type";

type Props = {
  game: GameProps;
  onSelect: (id: string) => void;
};

export const GameCard = ({ game, onSelect }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "lg", bg: "gray.700" }}
      p={3}
      cursor="pointer"
      onClick={() => onSelect(game.id)}
      bg="gray.900"
      borderColor="#44D7DA"
      color="white"
      role="group"
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
        position="relative"
        px={2}
        py={1}
        transition="all 0.3s ease"
        _groupHover={{
          color: "#44D7DA",
          textShadow: "0 0 10px rgba(68, 215, 218, 0.8)", // ← glowは文字だけ
          transform: "translateY(-2px)",
        }}
        _after={{
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: 0,
          height: "2px",
          bg: "#44D7DA",
          transform: "translateX(-50%)",
          transition: "width 0.3s ease",
        }}
        sx={{
          "&:hover::after": {
            width: "100%",
          },
        }}
      >
        {game.title}
      </Heading>
    </Box>
  );
};
