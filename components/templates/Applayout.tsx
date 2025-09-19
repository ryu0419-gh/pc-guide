"use client";

import { ReactNode, useState } from "react";
import { Flex, Box} from "@chakra-ui/react";
import Header from "@/components/organisms/Header";
import MobileMenu from "@/components/organisms/MobileMenu";
import Footer from "@/components/organisms/Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Flex direction="column" minH="100vh" bg="neon.black">
      <Header onMenuOpen={onOpen} />
      <MobileMenu isOpen={isOpen} onClose={onClose} />
      
      <Box
        as="main"
        flex="1"
        bg="neon.black"
        color="neon.white"
        fontFamily="body"
      >
        {children}
      </Box>
      
      <Footer />
    </Flex>
  );
}