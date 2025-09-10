"use client"
import { useState } from "react";
import { PartWithPrice, GameProps, PartProps, GamePartProps } from "@/type/type";
import ToggleButton from "@/components/atoms/ChangeButton";
import PartCard from "@/components/organisms/PartCard";
import ButtonBase from "@/components/atoms/ButtonBase";
import PartDetailModal from "@/components/organisms/PartsModalCard";

import gameData from '@/data/games.json';
import partsData from '@/data/parts.json';
import gamePartsData from '@/data/game_parts.json';

const parsePrice = (priceString: string): number => {
  return parseInt(priceString.replace(/,/g, ''));
};

const PCPartsRecommendation: React.FC = () => {
  const [globalRank, setGlobalRank] = useState<'budget' | 'recommended' | 'highend'>('recommended');
  const [selectedPart, setSelectedPart] = useState<PartWithPrice | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [partRanks, setPartRanks] = useState<{[key: string]: 'budget' | 'recommended' | 'highend'}>({});

  const currentGame = gameData[0];
  
  const getCurrentParts = (): PartWithPrice[] => {
    const categoryOrder = ['CPU', 'GPU', 'Memory', 'Storage', 'Motherboard', 'PowerSupply'];
    const result: PartWithPrice[] = [];
    
    categoryOrder.forEach(category => {
      const rankToUse = partRanks[category] || globalRank;
      

      const gamePartRelation = gamePartsData.find(gp => 
        gp.gameId === currentGame.id && 
        gp.recommendationType === rankToUse &&
        partsData.find(p => p.id === gp.partId && p.type === category)
      );
      
      if (gamePartRelation) {
        const partDetail = partsData.find(p => p.id === gamePartRelation.partId);
        if (partDetail) {
          result.push({
            ...partDetail,
            price: gamePartRelation.price
          });
        }
      }
    });
    
    return result;
  };

  const currentParts = getCurrentParts();
  const totalPrice = currentParts.reduce((sum, part) => sum + parsePrice(part.price), 0);
  const averageScore = currentParts.length > 0 ? Math.round(currentParts.reduce((sum, part) => sum + part.benchmarkScore, 0) / currentParts.length) : 0;

  const handleShowDetail = (part: PartWithPrice) => {
    setSelectedPart(part);
    setIsModalOpen(true);
  };

  const handleRankChange = (type: string, newRank: 'budget' | 'recommended' | 'highend') => {
    setPartRanks(prev => ({
      ...prev,
      [type]: newRank
    }));
  };

  const globalRankOptions = [
    { value: 'budget', label: 'コスパ重視' },
    { value: 'recommended', label: '推奨' },
    { value: 'highend', label: 'ハイエンド' }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#121212', minHeight: '100vh' }}>
      <h1 style={{ color: '#F5F5F5' }}>PCパーツ推奨システム</h1>
      
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #333333', borderRadius: '8px', backgroundColor: '#1F1F1F' }}>
        <h2 style={{ marginBottom: '15px', color: '#F5F5F5' }}>対象ゲーム</h2>
        <div style={{ color: '#F5F5F5', fontSize: '18px', fontWeight: 'bold' }}>
          {currentGame.title}
        </div>
        <div>
          <img src={currentGame.thumbnail} />
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '15px', color: '#F5F5F5' }}>構成を選択</h2>
        <ToggleButton
          options={globalRankOptions}
          selected={globalRank}
          onChange={(value) => {
            setGlobalRank(value as 'budget' | 'recommended' | 'highend');
            setPartRanks({}); 
          }}
        />
      </div>

      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #333333', borderRadius: '8px', backgroundColor: '#1F1F1F' }}>
        <h2 style={{ margin: '0 0 15px 0', color: '#F5F5F5' }}>パーツ構成</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ color: '#F5F5F5' }}>
            <strong>総額:</strong> ¥{totalPrice.toLocaleString()}
          </div>
          <div style={{ color: '#F5F5F5' }}>
            <strong>平均スコア:</strong> {averageScore}点
          </div>
          <div style={{ color: '#F5F5F5' }}>
            <strong>構成:</strong> {globalRankOptions.find(opt => opt.value === globalRank)?.label}
          </div>
          <div style={{ color: '#F5F5F5' }}>
            <strong>パーツ数:</strong> {currentParts.length}個
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '20px', color: '#F5F5F5' }}>推奨パーツ構成</h2>
        {currentParts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            {currentParts.map((part, index) => (
              <PartCard
                key={`${part.type}-${index}`}
                part={part}
                currentRank={partRanks[part.type] || globalRank}
                availableRanks={['recommended', 'alternative']}
                onShowDetail={handleShowDetail}
                onRankChange={handleRankChange}
              />
            ))}
          </div>
        ) : (
          <div style={{ color: '#AAAAAA', textAlign: 'center', padding: '40px' }}>
            選択された構成に対応するパーツが見つかりませんでした。
          </div>
        )}
      </div>

      <PartDetailModal 
        part={selectedPart}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPart(null);
        }}
      />

      <div style={{ textAlign: 'center', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <ButtonBase variant="success" onClick={() => console.log('構成を保存', currentParts)}>
          この構成を保存
        </ButtonBase>
        <ButtonBase variant="purple" onClick={() => console.log('構成を共有', currentParts)}>
          構成を共有
        </ButtonBase>
        <ButtonBase variant="secondary" onClick={() => console.log('見積書作成', currentParts)}>
          見積書を作成
        </ButtonBase>
      </div>

      {/*{process.env.NODE_ENV === 'development' && (
        <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #333333', borderRadius: '8px', backgroundColor: '#1F1F1F' }}>
          <h3 style={{ color: '#F5F5F5', marginBottom: '15px' }}>デバッグ情報</h3>
          <div style={{ color: '#AAAAAA', fontSize: '12px' }}>
            <p>ロードされたゲーム数: {gameData.length}</p>
            <p>ロードされたパーツ数: {partsData.length}</p>
            <p>ロードされたゲームパーツ関連数: {gamePartsData.length}</p>
            <p>現在のパーツ数: {currentParts.length}</p>
          </div>
        </div>
      )}*/}
    </div>
  );
};

export default PCPartsRecommendation;