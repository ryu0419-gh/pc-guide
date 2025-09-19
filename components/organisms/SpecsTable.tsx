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
