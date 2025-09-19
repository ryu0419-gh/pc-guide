"use client";

import Link from "next/link";
import { Container, Heading, HStack, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeader = motion.header;

export default function Header() {
  return (
    <MotionHeader
      style={{
        backgroundColor: "#000000",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderBottom: "2px solid rgba(0, 255, 255, 0.2)",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container maxW="container.xl" px={6}>
        <Flex justify="space-between" align="center">
          <Heading
            as={Link}
            href="/"
            variant="neonTitle"
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily="STAATLICHES, sans-serif"
            textShadow="0 0 20px rgba(0, 255, 255, 1)"
            _hover={{
              textShadow: "0 0 30px rgba(0, 255, 255, 1)",
              transform: "scale(1.05)",
            }}
            transition="all 0.3s ease"
            cursor="pointer"
            textDecoration="none"
          >
            MIYA Guide
          </Heading>
          <HStack spacing={8} fontFamily="STAATLICHES, sans-serif">
            <Text
              as={Link}
              href="/"
              color="neon.white"
              fontSize="lg"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="2px"
              position="relative"
              px={3}
              py={2}
              borderRadius="8px"
              _hover={{
                color: "brand.500",
                textShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
                transform: "translateY(-2px)",
                bg: "rgba(0, 255, 255, 0.1)",
                borderColor: "brand.500",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
              }}
              _before={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                bg: "transparent",
                transition: "all 0.3s ease",
              }}
              _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: 0,
                height: "2px",
                bg: "brand.500",
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
                transform: "translateX(-50%)",
                transition: "all 0.3s ease",
              }}
              sx={{
                "&:hover::after": {
                  width: "100%",
                },
              }}
              transition="all 0.3s ease"
              cursor="pointer"
              textDecoration="none"
            >
              Home
            </Text>
          </HStack>
        </Flex>
      </Container>
    </MotionHeader>
  );
}
