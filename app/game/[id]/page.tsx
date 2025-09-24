<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  screenshots?: string[];
  specs: {
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
  };
  parts: {
    recommended: Array<{
      type: string;
      model: string;
      price?: string;
      description?: string;
      benchmarkScore?: number;
    }>;
    alternative: Array<{
      type: string;
      model: string;
      price?: string;
      description?: string;
      benchmarkScore?: number;
    }>;
  };
}

export default function GameDetail({ params }: { params: Promise<{ id: string }> }) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [gameId, setGameId] = useState<string>('');

  useEffect(() => {
    const initializeGameId = async () => {
      const resolvedParams = await params;
      setGameId(resolvedParams.id);
    };
    
    initializeGameId();
  }, [params]);

  useEffect(() => {
    if (!gameId) return;
    
    const fetchGame = async () => {
      try {
        const response = await fetch('/data/games.json');
        const games: Game[] = await response.json();
        const selectedGame = games.find(g => g.id === gameId);
        setGame(selectedGame || null);
      } catch (error) {
        console.error('ゲームデータの読み込みに失敗:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [gameId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
      </div>
=======
// app/game/[id]/page.tsx
"use client";

import React, { useState, useEffect, use } from "react";
import { SpecsTable } from "@/components/organisms/SpecsTable";
import { GameProps } from "@/type/type";
import gamesData from "@/data/games.json";
import { Box, Container, Text, VStack } from "@chakra-ui/react";

interface GameDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = use(params);
  const [game, setGame] = useState<GameProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ゲームデータから該当するゲームを検索
    const foundGame = gamesData.find((g) => g.id === id);
    setGame(foundGame || null);
    setLoading(false);
  }, [id]);

  const handleViewParts = () => {
    // パーツページへの遷移
    window.location.href = `/game/${id}/parts`;
  };

  if (loading) {
    return (
      <Container maxW="1200px" py={8}>
        <Text color="neon.gray" textAlign="center">
          読み込み中...
        </Text>
      </Container>
>>>>>>> origin/feature/test
    );
  }

  if (!game) {
    return (
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">ゲームが見つかりませんでした</h2>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ホームに戻る
          </Link>
        </div>
      </div>
=======
      <Container maxW="1200px" py={8}>
        <Text color="neon.gray" textAlign="center">
          ゲームが見つかりませんでした
        </Text>
      </Container>
>>>>>>> origin/feature/test
    );
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">PC Guide</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">ホーム</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* ゲームタイトル + サムネイル画像 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-6">
            <img 
              src={game.thumbnail} 
              alt={game.title}
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover shadow-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/api/placeholder/400/400';
              }}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{game.title}</h1>
              <p className="text-gray-600">システム要件とPC構成ガイド</p>
            </div>
          </div>
          
          <div className="mt-4">
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ゲーム一覧に戻る
            </Link>
          </div>
        </div>

        {/* 公式スクリーンショット（任意） */}
        {game.screenshots && game.screenshots.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">公式スクリーンショット</h2>
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
                  <td className="py-4 px-4 text-center text-gray-600">{game.specs.recommended.os}</td>
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
                このゲーム用の推奨パーツを見る →
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
=======
    <Box py={8} px={4} w="full">
      <VStack spacing={8} w="full">
        <SpecsTable game={game} onViewParts={handleViewParts} />
      </VStack>
    </Box>
  );
}
>>>>>>> origin/feature/test
