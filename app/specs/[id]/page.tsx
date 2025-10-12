'use client';

import React, { useState, useEffect } from 'react';
import SpecsTable from '@/components/organisms/SpecsTable';
import Link from "next/link";

interface Game {
  id: string;
  title: string;
  thumbnail: string;
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
  screenshots?: string[];
}

export default function SpecsPage({ params }: { params: Promise<{ id: string }> }) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const resolvedParams = await params;
        const response = await fetch('/data/games.json');
        const games: Game[] = await response.json();
        const selectedGame = games.find(g => g.id === resolvedParams.id);
        
        // スクリーンショットの例を追加
        if (selectedGame) {
          selectedGame.screenshots = [
            '/images/screenshots/game1-1.jpg',
            '/images/screenshots/game1-2.jpg',
            '/images/screenshots/game1-3.jpg'
          ];
        }
        
        setGame(selectedGame || null);
      } catch (error) {
        console.error('ゲームデータの読み込みに失敗:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">ゲームが見つかりませんでした</h2>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  return <SpecsTable game={game} />;
}