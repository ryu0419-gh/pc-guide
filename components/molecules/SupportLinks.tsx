import { VStack, Text, Divider } from "@chakra-ui/react";
import NavLink from "@/components/atoms/NavLink";

interface SupportLinksProps {
  onLinkClick?: () => void;
}

export default function SupportLinks({ onLinkClick }: SupportLinksProps) {
  return (
    <>
      <Divider borderColor="rgba(0, 255, 255, 0.3)" />
      <VStack spacing={4} align="start" w="full">
        <Text color="neon.gray" fontSize="sm" textTransform="uppercase">
          サポート
        </Text>
        <NavLink href="/help" onClick={onLinkClick}>
          Help
        </NavLink>
        <NavLink href="/contact" onClick={onLinkClick}>
          Contact
        </NavLink>
      </VStack>
    </>
  );
}