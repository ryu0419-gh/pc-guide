"use client";

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ChakraTest() {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      <VStack spacing={6} maxW="lg" mx="auto">
        <Heading as="h1" size="xl" textAlign="center" color="blue.600">
          Chakra UI テスト
        </Heading>

        <Box
          bg={bg}
          borderColor={borderColor}
          borderWidth="1px"
          borderRadius="lg"
          p={6}
          w="full"
        >
          <Heading as="h2" size="md" mb={4}>
            サンプルカード
          </Heading>
          <VStack spacing={4} align="stretch">
            <Text>
              Chakra UIが正常に動作しています。 このカードはChakra
              UIのコンポーネントで作成されています。
            </Text>

            <HStack>
              <Badge colorScheme="green">動作中</Badge>
              <Badge colorScheme="blue">テスト</Badge>
              <Badge colorScheme="purple">Chakra UI</Badge>
            </HStack>

            <HStack spacing={4}>
              <Button colorScheme="blue" size="md">
                プライマリ
              </Button>
              <Button variant="outline" colorScheme="blue" size="md">
                アウトライン
              </Button>
              <Button variant="ghost" colorScheme="blue" size="md">
                ゴースト
              </Button>
            </HStack>
          </VStack>
        </Box>

        <Box
          p={6}
          bg="blue.50"
          borderRadius="lg"
          borderLeft="4px solid"
          borderLeftColor="blue.500"
        >
          <Text fontSize="sm" color="blue.700">
            💡 このコンポーネントはChakra UIを使用して作成されました。
            既存のTailwind CSSと併用可能です。
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
