import { VStack, Text } from "@chakra-ui/react";

export default function Copyright() {
  return (
    <VStack spacing={2}>
      <Text
        fontSize="sm"
        color="neon.gray"
        fontFamily="heading"
        textAlign="center"
      >
        © 2025 MIYA NOTE 制作チーム ENGEI
      </Text>
      <Text
        fontSize="xs"
        color="rgba(255, 255, 255, 0.5)"
        textAlign="center"
        fontFamily="body"
      >
        Powered by Chakra UI & Next.js | Neon Theme Design
      </Text>
    </VStack>
  );
}