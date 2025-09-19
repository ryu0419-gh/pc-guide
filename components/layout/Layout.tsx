"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Box, Flex, Container, Heading, HStack, Text } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minH="100vh" bg="#000000" color="#FFFFFF">
      {/* Header */}
      <Box as="header" bg="#000000" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading
              as="h1"
              size="lg"
              fontFamily="STAATLICHES, sans-serif"
              fontWeight="bold"
            >
              MIYA Guide
            </Heading>
            <HStack spacing={6} fontFamily="STAATLICHES, sans-serif">
              <Link href="/">Home</Link>
              <Link href="/game/1">Games</Link>
              <Link href="/parts">Parts</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main */}
      <Box as="main" flex="1" py={6}>
        <Container maxW="container.lg">{children}</Container>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="#111111"
        py={4}
        textAlign="center"
        fontSize="sm"
        color="gray.400"
      >
        <Text fontFamily="STAATLICHES, sans-serif">
          © 2025 自作PCガイドチーム
        </Text>
      </Box>
    </Flex>
  );
}
