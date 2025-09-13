"use client"
import { useState } from "react";
import { PartWithPrice, GameProps, PartProps, GamePartProps } from "@/type/type";
import ToggleButton from "@/components/atoms/ToggleButton";
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
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px', 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      fontFamily: 'Staatliches, system-ui, sans-serif'
    }}>
      <h1 style={{ 
        color: '#00FFFF', 
        fontSize: '48px',
        textShadow: '0 0 20px #00FFFF',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        PCパーツ推奨システム
      </h1>
      
      <div style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        border: '2px solid #00FFFF', 
        borderRadius: '16px', 
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)'
      }}>
        <h2 style={{ marginBottom: '15px', color: '#FFFFFF', fontSize: '24px' }}>対象ゲーム</h2>
        <div style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 'bold' }}>
          {currentGame.title}
        </div>
        <div>
          <img src={currentGame.thumbnail} style={{ borderRadius: '8px', marginTop: '10px' }} />
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '15px', color: '#FFFFFF', fontSize: '24px' }}>構成を選択</h2>
        <ToggleButton
          options={globalRankOptions}
          selected={globalRank}
          onChange={(value) => {
            setGlobalRank(value as 'budget' | 'recommended' | 'highend');
            setPartRanks({}); 
          }}
        />
      </div>

      <div style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        border: '2px solid #00FFFF', 
        borderRadius: '16px', 
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)'
      }}>
        <h2 style={{ margin: '0 0 15px 0', color: '#FFFFFF', fontSize: '24px' }}>パーツ構成</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ color: '#FFFFFF', fontSize: '18px' }}>
            <strong>総額:</strong> ¥{totalPrice.toLocaleString()}
          </div>
          <div style={{ color: '#FFFFFF', fontSize: '18px' }}>
            <strong>構成:</strong> {globalRankOptions.find(opt => opt.value === globalRank)?.label}
          </div>
          <div style={{ color: '#FFFFFF', fontSize: '18px' }}>
            <strong>パーツ数:</strong> {currentParts.length}個
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '20px', color: '#FFFFFF', fontSize: '24px' }}>推奨パーツ構成</h2>
        {currentParts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
            {currentParts.map((part, index) => (
              <PartCard
                key={`${part.type}-${index}`}
                part={part}
                currentRank={partRanks[part.type] || globalRank}
                availableRanks={['recommended', 'budget','highend']}
                onShowDetail={handleShowDetail}
                onRankChange={handleRankChange}
              />
            ))}
          </div>
        ) : (
          <div style={{ 
            color: '#CCCCCC', 
            textAlign: 'center', 
            padding: '40px',
            fontSize: '18px'
          }}>
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
        <ButtonBase variant="primary" onClick={() => console.log('構成を保存', currentParts)}>
          この構成を保存
        </ButtonBase>
        <ButtonBase variant="secondary" onClick={() => console.log('構成を共有', currentParts)}>
          構成を共有
        </ButtonBase>
      </div>
    </div>
  );
};

export default PCPartsRecommendation;