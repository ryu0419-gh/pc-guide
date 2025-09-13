"use client";

import { ReactNode } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Divider,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type ClientLayoutProps = {
  children: ReactNode;
};

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}) => (
  <Box
    as={Link}
    href={href}
    color="neon.white"
    fontFamily="heading"
    fontSize="md"
    textTransform="uppercase"
    letterSpacing="1px"
    _hover={{
      color: "brand.500",
      textShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
      transform: "translateY(-1px)",
    }}
    transition="all 0.2s ease"
    cursor="pointer"
    onClick={onClick}
  >
    {children}
  </Box>
);

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/game/1", label: "Games" },
  { href: "/parts", label: "Parts" },
];

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" minH="100vh" bg="neon.black">
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
            <Heading
              as={Link}
              href="/"
              size={{ base: "md", md: "lg" }}
              color="brand.500"
              fontFamily="heading"
              textTransform="uppercase"
              letterSpacing="2px"
              textShadow="0 0 15px rgba(0, 255, 255, 1)"
              _hover={{
                textShadow: "0 0 25px rgba(0, 255, 255, 1)",
                transform: "scale(1.05)",
              }}
              transition="all 0.3s ease"
              cursor="pointer"
              textDecoration="none"
            >
              自作PCガイド
            </Heading>

            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </HStack>

            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              variant="neonSecondary"
              size="md"
            />
          </Flex>
        </Container>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg="blackAlpha.800" />
        <DrawerContent
          bg="neon.black"
          border="2px solid"
          borderColor="brand.500"
          boxShadow="0 0 30px rgba(0, 255, 255, 0.4)"
        >
          <DrawerCloseButton
            color="brand.500"
            _hover={{ bg: "rgba(0, 255, 255, 0.1)" }}
          />
          <DrawerHeader
            color="brand.500"
            fontFamily="heading"
            textTransform="uppercase"
            borderBottom="1px solid"
            borderColor="rgba(0, 255, 255, 0.3)"
          >
            メニュー
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="start" pt={6}>
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href} onClick={onClose}>
                  {item.label}
                </NavLink>
              ))}

              <Divider borderColor="rgba(0, 255, 255, 0.3)" />

              <VStack spacing={4} align="start" w="full">
                <Text color="neon.gray" fontSize="sm" textTransform="uppercase">
                  サポート
                </Text>
                <NavLink href="/help" onClick={onClose}>
                  Help
                </NavLink>
                <NavLink href="/contact" onClick={onClose}>
                  Contact
                </NavLink>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box
        as="main"
        flex="1"
        bg="neon.black"
        color="neon.white"
        fontFamily="body"
      >
        {children}
      </Box>

      <Box
        as="footer"
        bg="rgba(255, 255, 255, 0.05)"
        borderTop="1px solid"
        borderColor="rgba(0, 255, 255, 0.2)"
        py={8}
      >
        <Container maxW="1400px">
          <VStack spacing={6}>
            <Divider borderColor="rgba(0, 255, 255, 0.3)" />

            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              w="full"
              gap={6}
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap={{ base: 4, sm: 6 }}
                align="center"
              >
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/privacy">Privacy</NavLink>
                <NavLink href="/terms">Terms</NavLink>
              </Flex>
            </Flex>

            <VStack spacing={2}>
              <Text
                fontSize="sm"
                color="neon.gray"
                fontFamily="heading"
                textAlign="center"
              >
                © 2025 MIYA NOTE 制作チーム ENGEI
              </Text>

              <Text
                fontSize="xs"
                color="rgba(255, 255, 255, 0.5)"
                textAlign="center"
                fontFamily="body"
              >
                Powered by Chakra UI & Next.js | Neon Theme Design
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
