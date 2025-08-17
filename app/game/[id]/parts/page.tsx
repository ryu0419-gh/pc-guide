'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Part {
  type: string;
  model: string;
  price?: string;
  description?: string;
  benchmarkScore?: number;
}

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  parts: {
    recommended: Part[];
    alternative: Part[];
  };
}

export default function GameParts({ params }: { params: Promise<{ id: string }> }) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'recommended' | 'alternative'>('recommended');
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

  const renderPartsGrid = (parts: Part[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {parts.map((part, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{part.type}</h3>
            {part.benchmarkScore && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                スコア: {part.benchmarkScore}
              </span>
            )}
          </div>
          <p className="text-xl font-bold text-blue-600 mb-2">{part.model}</p>
          {part.price && (
            <p className="text-lg font-semibold text-green-600 mb-2">¥{part.price}</p>
          )}
          {part.description && (
            <p className="text-gray-600 text-sm mb-4">{part.description}</p>
          )}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
            詳細を見る
          </button>
        </div>
      ))}
    </div>
  );

  const calculateTotalPrice = (parts: Part[]) => {
    return parts.reduce((total, part) => {
      if (part.price) {
        return total + parseInt(part.price.replace(/,/g, ''));
      }
      return total;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href={`/game/${game.id}`} className="hover:text-gray-700">{game.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">推奨パーツ</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Game Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={game.thumbnail} 
              alt={game.title}
              className="w-16 h-16 rounded-lg object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/api/placeholder/400/400';
              }}
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{game.title}</h1>
              <p className="text-gray-600">推奨パーツ構成</p>
            </div>
          </div>
          <Link 
            href={`/game/${game.id}`}
            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ゲーム詳細に戻る
          </Link>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="flex border-b">
            <button
              className={`py-4 px-6 font-medium ${
                activeTab === 'recommended' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('recommended')}
            >
              推奨パーツ構成
            </button>
            <button
              className={`py-4 px-6 font-medium ${
                activeTab === 'alternative' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('alternative')}
            >
              代替パーツ
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'recommended' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">推奨パーツ構成</h2>
                  <p className="text-gray-600">このゲームを快適にプレイするための推奨パーツです。</p>
                </div>
                {renderPartsGrid(game.parts.recommended)}
              </div>
            )}

            {activeTab === 'alternative' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">代替パーツ</h2>
                  <p className="text-gray-600">コストを抑えたい場合や、在庫がない場合の代替パーツです。</p>
                </div>
                {game.parts.alternative && game.parts.alternative.length > 0 ? (
                  renderPartsGrid(game.parts.alternative)
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">代替パーツの情報はありません</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Total Price */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">構成合計金額</h3>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-lg font-medium text-gray-700">
              {activeTab === 'recommended' ? '推奨構成' : '代替構成'}の合計
            </span>
            <span className="text-2xl font-bold text-green-600">
              ¥{activeTab === 'recommended' 
                ? calculateTotalPrice(game.parts.recommended).toLocaleString()
                : calculateTotalPrice(game.parts.alternative).toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            ※価格は参考価格です。実際の価格は販売店にてご確認ください。
          </p>
        </div>
      </main>
    </div>
  );
}