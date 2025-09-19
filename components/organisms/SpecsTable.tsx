// components/organisms/GameSpecsDetailTable.tsx
import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  HStack,
  Circle,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ButtonBase from "@/components/atoms/ButtonBase";
import { GameProps } from "@/type/type";

const MotionCard = motion(Card);

interface SpecsTableProps {
  game: GameProps;
  onViewParts?: () => void;
}

export const SpecsTable = ({ game, onViewParts }: SpecsTableProps) => {
  if (!game) {
    return (
      <Box maxW="800px" mx="auto" w="full">
        <Card variant="neon">
          <CardBody>
            <Text color="neon.gray" textAlign="center">
              ゲーム情報を読み込み中...
            </Text>
          </CardBody>
        </Card>
      </Box>
    );
  }

  const handleViewParts = () => {
    if (onViewParts) {
      onViewParts();
    } else {
      window.location.href = `/game/${game.id}/parts`;
    }
  };

  return (
    <Box maxW="800px" mx="auto" w="full">
      <MotionCard
        variant="neon"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CardBody>
          <VStack spacing={6}>
            {/* ヘッダー */}
            <VStack spacing={2} textAlign="center">
              <Heading
                variant="neonSubtitle"
                fontSize={{ base: "xl", md: "2xl" }}
                color="brand.500"
                textShadow="0 0 10px rgba(0, 255, 255, 0.8)"
              >
                システム要件
              </Heading>
              <Text color="neon.gray" fontSize="sm" fontFamily="body">
                {game.title} の動作に必要なPC性能
              </Text>
            </VStack>

            {/* スペック比較テーブル */}
            <Box
              w="full"
              overflowX="auto"
              border="2px solid"
              borderColor="rgba(0, 255, 255, 0.3)"
              borderRadius="12px"
              bg="rgba(0, 0, 0, 0.2)"
            >
              <Table variant="simple" size="md">
                <Thead>
                  <Tr borderBottomWidth="2px" borderColor="brand.500">
                    <Th
                      color="brand.500"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="2px"
                      textAlign="left"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                      bg="rgba(0, 255, 255, 0.05)"
                    >
                      項目
                    </Th>
                    <Th
                      color="neon.white"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="1px"
                      textAlign="center"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                    >
                      最低動作スペック
                    </Th>
                    <Th
                      color="brand.500"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="1px"
                      textAlign="center"
                      py={4}
                      px={4}
                      bg="rgba(0, 255, 255, 0.1)"
                      textShadow="0 0 8px rgba(0, 255, 255, 0.8)"
                    >
                      推奨スペック
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* OS */}
                  <Tr
                    borderBottomWidth="1px"
                    borderColor="rgba(0, 255, 255, 0.2)"
                    _hover={{ bg: "rgba(0, 255, 255, 0.03)" }}
                    transition="all 0.2s ease"
                  >
                    <Td
                      fontWeight="bold"
                      color="neon.white"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                      bg="rgba(0, 255, 255, 0.05)"
                    >
                      OS
                    </Td>
                    <Td
                      color="neon.gray"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                    >
                      {game.budgetOs}
                    </Td>
                    <Td
                      color="neon.white"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      fontWeight="bold"
                      bg="rgba(0, 255, 255, 0.1)"
                    >
                      {game.recommendedOs}
                    </Td>
                  </Tr>

                  {/* CPU */}
                  <Tr
                    borderBottomWidth="1px"
                    borderColor="rgba(0, 255, 255, 0.2)"
                    _hover={{ bg: "rgba(0, 255, 255, 0.03)" }}
                    transition="all 0.2s ease"
                  >
                    <Td
                      fontWeight="bold"
                      color="neon.white"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                      bg="rgba(0, 255, 255, 0.05)"
                    >
                      CPU
                    </Td>
                    <Td
                      color="neon.gray"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                    >
                      {game.budgetProcessor}
                    </Td>
                    <Td
                      color="neon.white"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      fontWeight="bold"
                      bg="rgba(0, 255, 255, 0.1)"
                    >
                      {game.recommendedProcessor}
                    </Td>
                  </Tr>

                  {/* GPU */}
                  <Tr
                    borderBottomWidth="1px"
                    borderColor="rgba(0, 255, 255, 0.2)"
                    _hover={{ bg: "rgba(0, 255, 255, 0.03)" }}
                    transition="all 0.2s ease"
                  >
                    <Td
                      fontWeight="bold"
                      color="neon.white"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                      bg="rgba(0, 255, 255, 0.05)"
                    >
                      GPU
                    </Td>
                    <Td
                      color="neon.gray"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                    >
                      {game.budgetGraphics}
                    </Td>
                    <Td
                      color="neon.white"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      fontWeight="bold"
                      bg="rgba(0, 255, 255, 0.1)"
                    >
                      {game.recommendedGraphics}
                    </Td>
                  </Tr>

                  {/* RAM */}
                  <Tr
                    borderBottomWidth="1px"
                    borderColor="rgba(0, 255, 255, 0.2)"
                    _hover={{ bg: "rgba(0, 255, 255, 0.03)" }}
                    transition="all 0.2s ease"
                  >
                    <Td
                      fontWeight="bold"
                      color="neon.white"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                      bg="rgba(0, 255, 255, 0.05)"
                    >
                      RAM
                    </Td>
                    <Td
                      color="neon.gray"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                    >
                      {game.budgetMemory}
                    </Td>
                    <Td
                      color="neon.white"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      fontWeight="bold"
                      bg="rgba(0, 255, 255, 0.1)"
                    >
                      {game.recommendedMemory}
                    </Td>
                  </Tr>

                  {/* ストレージ */}
                  <Tr
                    _hover={{ bg: "rgba(0, 255, 255, 0.03)" }}
                    transition="all 0.2s ease"
                  >
                    <Td
                      fontWeight="bold"
                      color="neon.white"
                      fontFamily="heading"
                      textTransform="uppercase"
                      fontSize="sm"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                      bg="rgba(0, 255, 255, 0.05)"
                    >
                      ストレージ
                    </Td>
                    <Td
                      color="neon.gray"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      borderRight="1px solid rgba(0, 255, 255, 0.2)"
                    >
                      {game.budgetStorage}
                    </Td>
                    <Td
                      color="neon.white"
                      fontSize="sm"
                      fontFamily="body"
                      textAlign="center"
                      py={4}
                      px={4}
                      fontWeight="bold"
                      bg="rgba(0, 255, 255, 0.1)"
                    >
                      {game.recommendedStorage}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
<Box mt={6} marginLeft={{ base: "0", md: "80px" }} maxW={{ base: "100%", md: "500px" }}>
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
    {/* 最低動作環境 - 赤系ネオン */}
    <Box
      p={4}
      border="2px solid"
      borderColor="neon.red"
      borderRadius="12px"
      bg="rgba(239, 68, 68, 0.05)"
      boxShadow="0 0 15px rgba(239, 68, 68, 0.3)"
      _hover={{
        boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)",
        transform: "scale(1.02)",
      }}
      transition="all 0.2s ease"
    >
      <VStack align="start" spacing={2}>
        <HStack>
          <Circle 
            size="16px" 
            bg="neon.red"
            boxShadow="0 0 10px rgba(239, 68, 68, 0.8)"
          />
          <Text 
            fontWeight="bold" 
            color="neon.red"
            fontFamily="heading"
            textTransform="uppercase"
            letterSpacing="1px"
            fontSize="sm"
            textShadow="0 0 8px rgba(239, 68, 68, 0.8)"
          >
            最低動作環境
          </Text>
        </HStack>
        <Text 
          fontSize="xs" 
          color="neon.gray"
          fontFamily="body"
          lineHeight="1.4"
          borderLeft="2px solid rgba(239, 68, 68, 0.3)"
          pl={2}
        >
          ゲームが動作する最低限のスペックです。快適性は期待できません。
        </Text>
      </VStack>
    </Box>
    
    {/* 推奨スペック - シアン系ネオン */}
    <Box
      p={4}
      border="2px solid"
      borderColor="brand.500"
      borderRadius="12px"
      bg="rgba(0, 255, 255, 0.05)"
      boxShadow="0 0 15px rgba(0, 255, 255, 0.3)"
      _hover={{
        boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)",
        transform: "scale(1.02)",
      }}
      transition="all 0.2s ease"
    >
      <VStack align="start" spacing={2}>
        <HStack>
          <Circle 
            size="16px" 
            bg="brand.500"
            boxShadow="0 0 10px rgba(0, 255, 255, 0.8)"
          />
          <Text 
            fontWeight="bold" 
            color="brand.500"
            fontFamily="heading"
            textTransform="uppercase"
            letterSpacing="1px"
            fontSize="sm"
            textShadow="0 0 8px rgba(0, 255, 255, 0.8)"
          >
            推奨スペック
          </Text>
        </HStack>
        <Text 
          fontSize="xs" 
          color="neon.gray"
          fontFamily="body"
          lineHeight="1.4"
          borderLeft="2px solid rgba(0, 255, 255, 0.3)"
          pl={2}
        >
          快適にゲームをプレイできるスペックです。このスペック以上を推奨します。
        </Text>
      </VStack>
    </Box>
  </SimpleGrid>
</Box>
            {/* 注釈 */}
            <Text
              fontSize="xs"
              color="rgba(255, 255, 255, 0.5)"
              textAlign="center"
              fontFamily="body"
              lineHeight="1.4"
            >
              ※ 推奨スペックは快適にゲームをプレイできる性能です
              <br />
              最低動作スペックでは画質やフレームレートが制限される場合があります
            </Text>

            {/* パーツ構成ボタン */}
            <Box pt={4}>
              <ButtonBase
                variant="primary"
                onClick={handleViewParts}
                size="lg"
                fullWidth
              >
                このスペックに基づいたパーツ構成へ
              </ButtonBase>
            </Box>
          </VStack>
        </CardBody>
      </MotionCard>
    </Box>
  );
};
