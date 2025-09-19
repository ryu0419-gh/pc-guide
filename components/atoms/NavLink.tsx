import { ReactNode } from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
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
}