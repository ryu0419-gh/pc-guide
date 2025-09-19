"use client";

import {
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import Logo from "@/components/atoms/Logo";
import NavigationList from "@/components/molecules/NavigationList";
import HamburgerButton from "@/components/atoms/HamburgerButton";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/game/1", label: "Games" },
  { href: "/parts", label: "Parts" },
];

interface HeaderProps {
  onMenuOpen: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <Box
      as="header"
      bg="rgba(0, 0, 0, 0.95)"
      backdropFilter="blur(10px)"
      borderBottom="2px solid"
      borderColor="brand.500"
      boxShadow="0 0 20px rgba(0, 255, 255, 0.3)"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Container maxW="1400px" py={4}>
        <Flex justify="space-between" align="center">
          <Logo />
          <NavigationList items={navigationItems} />
          <HamburgerButton onClick={onMenuOpen} />
        </Flex>
      </Container>
    </Box>
  );
}