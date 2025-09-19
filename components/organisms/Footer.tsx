import {
  Box,
  Container,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import FooterLinks from "@/components/molecules/FooterLinks";
import Copyright from "@/components/molecules/Copyright";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="rgba(255, 255, 255, 0.05)"
      borderTop="1px solid"
      borderColor="rgba(0, 255, 255, 0.2)"
      py={8}
    >
      <Container maxW="1400px">
        <VStack spacing={6}>
          <Divider borderColor="rgba(0, 255, 255, 0.3)" />
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            w="full"
            gap={6}
          >
            <FooterLinks />
          </Flex>
          <Copyright />
        </VStack>
      </Container>
    </Box>
  );
}