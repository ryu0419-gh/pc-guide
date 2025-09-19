import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface HamburgerButtonProps {
  onClick: () => void;
}

export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <IconButton
      aria-label="Open menu"
      icon={<HamburgerIcon />}
      display={{ base: "flex", md: "none" }}
      onClick={onClick}
      variant="neonSecondary"
      size="md"
    />
  );
}
