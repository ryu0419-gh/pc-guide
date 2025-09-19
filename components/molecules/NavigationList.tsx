import { HStack, VStack } from "@chakra-ui/react";
import NavLink from "@/components/atoms/NavLink";

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationListProps {
  items: NavigationItem[];
  onItemClick?: () => void;
  direction?: "horizontal" | "vertical";
}

export default function NavigationList({ 
  items, 
  onItemClick, 
  direction = "horizontal" 
}: NavigationListProps) {
  const Container = direction === "horizontal" ? HStack : VStack;
  
  return (
    <Container 
      spacing={direction === "horizontal" ? 8 : 6} 
      display={direction === "horizontal" ? { base: "none", md: "flex" } : "flex"}
      align="start"
    >
      {items.map((item) => (
        <NavLink key={item.href} href={item.href} onClick={onItemClick}>
          {item.label}
        </NavLink>
      ))}
    </Container>
  );
}