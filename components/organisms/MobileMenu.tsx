import {
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NavigationList from "@/components/molecules/NavigationList";
import SupportLinks from "@/components/molecules/SupportLinks";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/game/1", label: "Games" },
  { href: "/parts", label: "Parts" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
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
            <NavigationList 
              items={navigationItems} 
              onItemClick={onClose}
              direction="vertical"
            />
            <SupportLinks onLinkClick={onClose} />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}