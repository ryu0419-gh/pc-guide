"use client";

import { ReactNode } from "react";
import { Flex, Box, Container } from "@chakra-ui/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minH="100vh" bg="neon.black" color="neon.white">
      <Header />
      <Box as="main" flex="1" py={6}>
        <Container maxW="container.xl" px={6}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
}
