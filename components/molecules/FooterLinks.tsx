import { Flex } from "@chakra-ui/react";
import NavLink from "@/components/atoms/NavLink";

export default function FooterLinks() {
  return (
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
  );
}