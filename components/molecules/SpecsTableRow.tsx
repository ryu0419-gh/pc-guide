import React from "react";
import { Tr, Td, Box } from "@chakra-ui/react";
import RankBadge from "@/components/atoms/RankBadge";

interface SpecsTableRowProps {
  label: string;
  budgetValue: string;
  recommendedValue: string;
  highendValue: string;
  isLast?: boolean;
}

export const SpecsTableRow = ({
  label,
  budgetValue,
  recommendedValue,
  highendValue,
  isLast,
}: SpecsTableRowProps) => (
  <Tr
    borderBottomWidth={isLast ? "0" : "1px"}
    borderColor="rgba(0, 255, 255, 0.2)"
    _hover={{
      bg: "rgba(0, 255, 255, 0.05)",
      transform: "translateX(2px)",
    }}
    transition="all 0.2s ease"
  >
    <Td
      py={4}
      px={4}
      fontWeight="bold"
      color="neon.white"
      bg="rgba(0, 255, 255, 0.05)"
      borderRight="1px"
      borderColor="rgba(0, 255, 255, 0.2)"
      fontFamily="heading"
      textTransform="uppercase"
      letterSpacing="1px"
      fontSize="sm"
    >
      {label}
    </Td>
    <Td
      py={4}
      px={3}
      textAlign="center"
      color="neon.gray"
      fontSize="sm"
      borderRight="1px"
      borderColor="rgba(0, 255, 255, 0.2)"
      fontFamily="body"
      position="relative"
    >
      <Box position="absolute" top={2} left={2}>
        <RankBadge rank="budget" size="sm" />
      </Box>
      <Box mt={6}>{budgetValue}</Box>
    </Td>
    <Td
      py={4}
      px={3}
      textAlign="center"
      color="neon.gray"
      fontSize="sm"
      borderRight="1px"
      borderColor="rgba(0, 255, 255, 0.2)"
      fontFamily="body"
      position="relative"
    >
      <Box position="absolute" top={2} left={2}>
        <RankBadge rank="recommended" size="sm" />
      </Box>
      <Box mt={6}>{recommendedValue}</Box>
    </Td>
    <Td
      py={4}
      px={3}
      textAlign="center"
      color="neon.gray"
      fontSize="sm"
      fontFamily="body"
      position="relative"
    >
      <Box position="absolute" top={2} left={2}>
        <RankBadge rank="highend" size="sm" />
      </Box>
      <Box mt={6}>{highendValue}</Box>
    </Td>
  </Tr>
);
