import React from "react";
import { HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { GameThumbnail } from "@/components/atoms/GameThumbnail";
import { GameProps } from "@/type/type";

interface GameSpecsHeaderProps {
  game: GameProps;
  subtitle?: string;
}

export const GameSpecsHeader = ({ game, subtitle }: GameSpecsHeaderProps) => (
  <HStack spacing={6} align="center" w="full">
    <GameThumbnail src={game.thumbnail} alt={game.title} size="lg" />
    <VStack align="start" spacing={2} flex={1}>
      <Heading
        variant="neonTitle"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        lineHeight="1.2"
      >
        {game.title}
      </Heading>
      <Text
        color="neon.gray"
        fontSize={{ base: "md", md: "lg" }}
        fontFamily="body"
        textShadow="0 0 5px rgba(0, 255, 255, 0.3)"
      >
        {subtitle || "システム要件比較表"}
      </Text>
    </VStack>
  </HStack>
);
