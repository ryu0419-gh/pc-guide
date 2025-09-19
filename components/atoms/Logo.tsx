import Link from "next/link";
import { Heading } from "@chakra-ui/react";

export default function Logo() {
  return (
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
  );
}
