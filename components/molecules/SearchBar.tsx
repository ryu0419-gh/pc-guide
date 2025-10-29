"use client";
import React from "react";
import { Box, Input, Button } from "@chakra-ui/react";

type Props = {
  query: string;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

export const SearchBar = ({ query, onQueryChange, onSearch }: Props) => {
  return (
    <Box display="flex" gap={2} w="100%" maxW="600px" mx="auto">
      <Input
        type="text"
        value={query}
        onChange={onQueryChange}
        placeholder="プレイしたいゲームを検索..."
        bg="gray.800"
        color="white"
        borderColor="#44D7DA"
        _placeholder={{ color: "gray.400" }}
        _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #3182ce" }}
        flex="1"
        fontFamily="'Staatliches', sans-serif"
      />
      <Button
        onClick={onSearch}
        bg="#44D7DA"
        color="white"
        _hover={{ bg: "#2FB8BB", color: "white" }}
        fontFamily="'Staatliches', sans-serif"
      >
        検索
      </Button>
    </Box>
  );
};
