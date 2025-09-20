'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Box, 
  Container, 
  Flex, 
  HStack, 
  VStack,
  Stack,
  Text, 
  Heading, 
  Image, 
  SimpleGrid, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td,
  Button,
  Icon
} from '@chakra-ui/react';
import { Game } from "@/types/game";

interface GameSpecs {
  minimum: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  recommended: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

// interface Game {
//   id: string;
//   title: string;
//   thumbnail: string;
//   specs: GameSpecs;
//   screenshots?: string[];
// }

interface SpecsTableProps {
  game: Game;
}

export default function SpecsTable({ game }: SpecsTableProps) {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box bg="white" shadow="sm" borderBottomWidth="1px">
        <Container maxW="6xl" px={4} py={4}>
          <Flex align="center" justify="space-between">
            <Link href="/">
              <Text fontSize="xl" fontWeight="bold" color="gray.900" cursor="pointer">
                PC Guide
              </Text>
            </Link>
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <Link href="/">
                <Text color="gray.600" _hover={{ color: "gray.900" }} cursor="pointer">
                  ホーム
                </Text>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="4xl" px={4} py={8}>
        {/* ゲームタイトル + サムネイル画像 */}
        <Box bg="white" rounded="lg" shadow="lg" p={6} mb={8}>
          <Flex align="center" gap={6}>
            <Image
              src={game.thumbnail}
              alt={game.title}
              width={{ base: "96px", md: "128px" }}
              height={{ base: "96px", md: "128px" }}
              rounded="lg"
              objectFit="cover"
              shadow="md"
              fallbackSrc="/api/placeholder/400/400"
            />
            <Box>
              <Heading as="h1" size={{ base: "lg", md: "xl" }} color="gray.900" mb={2}>
                {game.title}
              </Heading>
              <Text color="gray.600">システム要件比較表</Text>
            </Box>
          </Flex>
        </Box>

        {/* 公式スクリーンショット（任意） */}
        {game.screenshots && game.screenshots.length > 0 && (
          <Box bg="white" rounded="lg" shadow="lg" p={6} mb={8}>
            <Heading as="h2" size="lg" color="gray.900" mb={4}>
              ゲームスクリーンショット
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {game.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  src={screenshot}
                  alt={`${game.title} スクリーンショット ${index + 1}`}
                  width="full"
                  height="48"
                  objectFit="cover"
                  rounded="lg"
                  shadow="sm"
                  _hover={{ shadow: "md" }}
                  transition="all 0.2s"
                  fallbackSrc="/api/placeholder/400/300"
                />
              ))}
            </SimpleGrid>
          </Box>
        )}

        {/* スペック比較表 */}
        <Box bg="white" rounded="lg" shadow="lg" p={6} mb={8}>
          <Heading as="h2" size="lg" color="gray.900" mb={6} textAlign="center">
            スペック比較表
          </Heading>
          
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr borderBottomWidth="2px" borderColor="gray.200">
                  <Th 
                    textAlign="left" 
                    py={4} 
                    px={4} 
                    fontWeight="bold" 
                    color="gray.700" 
                    bg="gray.50"
                    roundedTopLeft="lg"
                  >
                    項目
                  </Th>
                  <Th 
                    textAlign="center" 
                    py={4} 
                    px={4} 
                    fontWeight="bold" 
                    color="red.600" 
                    bg="red.50"
                  >
                    最低動作環境
                  </Th>
                  <Th 
                    textAlign="center" 
                    py={4} 
                    px={4} 
                    fontWeight="bold" 
                    color="blue.600" 
                    bg="blue.50"
                    roundedTopRight="lg"
                  >
                    推奨スペック
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr borderBottomWidth="1px" borderColor="gray.100" _hover={{ bg: "gray.50" }}>
                  <Td py={4} px={4} fontWeight="medium" color="gray.700" bg="gray.50">OS</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.minimum.os}</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.recommended.os}</Td>
                </Tr>
                <Tr borderBottomWidth="1px" borderColor="gray.100" _hover={{ bg: "gray.50" }}>
                  <Td py={4} px={4} fontWeight="medium" color="gray.700" bg="gray.50">CPU</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.minimum.processor}</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.recommended.processor}</Td>
                </Tr>
                <Tr borderBottomWidth="1px" borderColor="gray.100" _hover={{ bg: "gray.50" }}>
                  <Td py={4} px={4} fontWeight="medium" color="gray.700" bg="gray.50">GPU</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.minimum.graphics}</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.recommended.graphics}</Td>
                </Tr>
                <Tr borderBottomWidth="1px" borderColor="gray.100" _hover={{ bg: "gray.50" }}>
                  <Td py={4} px={4} fontWeight="medium" color="gray.700" bg="gray.50">RAM</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.minimum.memory}</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.recommended.memory}</Td>
                </Tr>
                <Tr _hover={{ bg: "gray.50" }}>
                  <Td py={4} px={4} fontWeight="medium" color="gray.700" bg="gray.50" roundedBottomLeft="lg">
                    ストレージ
                  </Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600">{game.specs.minimum.storage}</Td>
                  <Td py={4} px={4} textAlign="center" color="gray.600" roundedBottomRight="lg">
                    {game.specs.recommended.storage}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          {/* スペック判定インジケーター */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={6}>
            <Box p={4} borderWidth="2px" borderColor="red.200" rounded="lg" bg="red.50">
              <HStack mb={2}>
                <Box w={4} h={4} bg="red.500" rounded="full" />
                <Heading as="h3" size="sm" color="red.700">最低動作環境</Heading>
              </HStack>
              <Text fontSize="sm" color="red.600">
                ゲームが動作する最低限のスペックです。快適性は期待できません。
              </Text>
            </Box>
            <Box p={4} borderWidth="2px" borderColor="blue.200" rounded="lg" bg="blue.50">
              <HStack mb={2}>
                <Box w={4} h={4} bg="blue.500" rounded="full" />
                <Heading as="h3" size="sm" color="blue.700">推奨スペック</Heading>
              </HStack>
              <Text fontSize="sm" color="blue.600">
                快適にゲームをプレイできるスペックです。このスペック以上を推奨します。
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* 推奨パーツを見るボタン */}
        <Box bg="white" rounded="lg" shadow="lg" p={6}>
          <VStack spacing={6} textAlign="center">
            <Heading as="h3" size="lg" color="gray.900">PC構成をチェック</Heading>
            <Text color="gray.600">このゲームに最適なパーツ構成を確認しましょう</Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Link href={`/game/${game.id}/parts`}>
                <Button
                  size="lg"
                  bgGradient="linear(to-r, blue.600, blue.700)"
                  color="white"
                  _hover={{ 
                    bgGradient: "linear(to-r, blue.700, blue.800)",
                    transform: "scale(1.05)"
                  }}
                  shadow="lg"
                  _hover={{ shadow: "xl" }}
                  transition="all 0.2s"
                  leftIcon={<Icon viewBox="0 0 24 24">
                    <path 
                      fill="currentColor" 
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </Icon>}
                  rightIcon={<Icon viewBox="0 0 24 24">
                    <path 
                      fill="currentColor" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Icon>}
                >
                  このゲーム用の推奨パーツを見る
                </Button>
              </Link>
              
              <Link href="/">
                <Button
                  size="lg"
                  bg="gray.200"
                  color="gray.700"
                  _hover={{ bg: "gray.300" }}
                  transition="all 0.2s"
                >
                  他のゲームを見る
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Box>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={8} mt={12}>
        <Container maxW="6xl" textAlign="center">
          <Text color="gray.400">© 2024 PC Guide - ゲーミングPC構成ガイド</Text>
        </Container>
      </Box>
    </Box>
  );
}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{game.title}</h1>
              <p className="text-gray-600">システム要件比較表</p>
            </div>
          </div>
        </div>

        {/* 公式スクリーンショット（任意） */}
        {game.screenshots && game.screenshots.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">ゲームスクリーンショット</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {game.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${game.title} スクリーンショット ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/api/placeholder/400/300';
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* スペック比較表 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">スペック比較表</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-700 bg-gray-50 rounded-tl-lg">項目</th>
                  <th className="text-center py-4 px-4 font-bold text-red-600 bg-red-50">最低動作環境</th>
                  <th className="text-center py-4 px-4 font-bold text-blue-600 bg-blue-50 rounded-tr-lg">推奨スペック</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700 bg-gray-50">OS</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.minimum.os}</td>
                  <td className="py-4 px-4 text-center text-gray-600 bg-blue-25">{game.specs.recommended.os}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700 bg-gray-50">CPU</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.minimum.processor}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.recommended.processor}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700 bg-gray-50">GPU</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.minimum.graphics}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.recommended.graphics}</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700 bg-gray-50">RAM</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.minimum.memory}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.recommended.memory}</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700 bg-gray-50 rounded-bl-lg">ストレージ</td>
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.minimum.storage}</td>
                  <td className="py-4 px-4 text-center text-gray-600 rounded-br-lg">{game.specs.recommended.storage}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* スペック判定インジケーター */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <h3 className="font-bold text-red-700">最低動作環境</h3>
              </div>
              <p className="text-sm text-red-600">ゲームが動作する最低限のスペックです。快適性は期待できません。</p>
            </div>
            <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <h3 className="font-bold text-blue-700">推奨スペック</h3>
              </div>
              <p className="text-sm text-blue-600">快適にゲームをプレイできるスペックです。このスペック以上を推奨します。</p>
            </div>
          </div>
        </div>

        {/* 推奨パーツを見るボタン */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">PC構成をチェック</h3>
            <p className="text-gray-600 mb-6">このゲームに最適なパーツ構成を確認しましょう</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/game/${game.id}/parts`}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                このゲーム用の推奨パーツを見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors duration-200"
              >
                他のゲームを見る
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 PC Guide - ゲーミングPC構成ガイド</p>
        </div>
      </footer>
    </div>
  );
}