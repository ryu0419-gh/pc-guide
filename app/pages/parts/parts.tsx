"use client"
import { useState } from "react";
import { PartWithPrice, GameProps, PartProps, GamePartProps } from "@/type/type";
import ToggleButton from "@/components/atoms/ChangeButton";
import PartCard from "@/components/organisms/PartCard";
import ButtonBase from "@/components/atoms/ButtonBase";
import PartDetailModal from "@/components/organisms/PartsModalCard";

// JSONファイルのインポート（実際のプロジェクトではこちらを使用）
// import gameData from '@/data/games.json';
// import partsData from '@/data/parts.json';
// import gamePartsData from '@/data/game_parts.json';

// 一時的なデータ（JSONファイル作成後は削除）
const gameData: GameProps[] = [
    {
    id: "1",
    title: "Cyberpunk 2077",
    thumbnail: "/images/games/cyberpunk2077.jpg",
    min_os: "Windows 10",
    min_processor: "Intel Core i5-3570K / AMD FX-8310",
    min_memory: "8 GB RAM",
    min_graphics: "NVIDIA GeForce GTX 780 / AMD Radeon RX 470",
    min_storage: "70 GB",
    rec_os: "Windows 10",
    rec_processor: "Intel Core i7-4790 / AMD Ryzen 3 3200G",
    rec_memory: "12 GB RAM",
    rec_graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon R9 Fury",
    rec_storage: "70 GB"
  }
];

const partsData: PartProps[] = [
    {
    id: "intel-i7-12700k",
    model: "Intel Core i7-12700K",
    type: "CPU",
    benchmarkScore: 95,
    description: "12コア20スレッド、3.6GHz-5.0GHz",
    cores: 12,
    threads: 20,
    baseClock: "3.6GHz",
    boostClock: "5.0GHz",
    tdp: "125W",
    socket: "LGA1700"
  },
  {
    id: "nvidia-rtx-4070",
    model: "NVIDIA GeForce RTX 4070",
    type: "GPU",
    benchmarkScore: 90,
    description: "12GB GDDR6X、Ray Tracing対応",
    memory: "12GB GDDR6X",
    boostClock: "2610MHz",
    powerConsumption: "200W",
    rayTracing: true,
    cuda: 5888
  },
  {
    id: "corsair-vengeance-32gb-ddr4-3200",
    model: "Corsair Vengeance LPX 32GB DDR4-3200",
    type: "Memory",
    benchmarkScore: 85,
    description: "32GB (16GBx2) DDR4-3200 CL16",
    capacity: "32GB",
    memoryType: "DDR4",
    speed: "3200MHz",
    modules: "16GBx2",
    latency: "CL16"
  },
  {
    id: "samsung-980-pro-1tb",
    model: "Samsung 980 PRO 1TB NVMe SSD",
    type: "Storage",
    benchmarkScore: 95,
    description: "1TB NVMe PCIe 4.0 SSD、読み込み7,000MB/s",
    capacity: "1TB",
    interface: "PCIe 4.0",
    readSpeed: "7,000MB/s",
    writeSpeed: "5,000MB/s",
    formFactor: "M.2 2280"
  },
  {
    id: "asus-rog-strix-b660a",
    model: "ASUS ROG STRIX B660-A GAMING WIFI",
    type: "Motherboard",
    benchmarkScore: 88,
    description: "Intel B660チップセット、WiFi 6対応",
    socket: "LGA1700",
    chipset: "Intel B660",
    formFactor: "ATX",
    wifi: "WiFi 6",
    slots: "4xDIMM, 3xPCIe"
  },
  {
    id: "corsair-rm750x",
    model: "Corsair RM750x 750W 80+ Gold",
    type: "PowerSupply",
    benchmarkScore: 92,
    description: "750W 80+ Gold認証、フルモジュラー",
    wattage: "750W",
    efficiency: "80+ Gold",
    modular: "フルモジュラー",
    warranty: "10年保証"
  },
  {
    id: "amd-ryzen5-5600x",
    model: "AMD Ryzen 5 5600X",
    type: "CPU",
    benchmarkScore: 82,
    description: "6コア12スレッド、3.7GHz-4.6GHz",
    cores: 6,
    threads: 12,
    baseClock: "3.7GHz",
    boostClock: "4.6GHz",
    tdp: "65W",
    socket: "AM4"
  },
  {
    id: "nvidia-rtx-4060ti",
    model: "NVIDIA GeForce RTX 4060 Ti",
    type: "GPU",
    benchmarkScore: 75,
    description: "16GB GDDR6、1080p-1440p向け",
    memory: "16GB GDDR6",
    boostClock: "2535MHz",
    powerConsumption: "165W",
    rayTracing: true,
    cuda: 4352
  },
  {
    id: "gskill-ripjaws-16gb-ddr4-3200",
    model: "G.Skill Ripjaws V 16GB DDR4-3200",
    type: "Memory",
    benchmarkScore: 75,
    description: "16GB (8GBx2) DDR4-3200 CL16",
    capacity: "16GB",
    memoryType: "DDR4",
    speed: "3200MHz",
    modules: "8GBx2",
    latency: "CL16"
  }
];
const gamePartsData: GamePartProps[] = [
   {
    id: 1,
    gameId: "1",
    partId: "intel-i7-12700k",
    recommendationType: "recommended",
    price: "45,000"
  },
  {
    id: 2,
    gameId: "1",
    partId: "nvidia-rtx-4070",
    recommendationType: "recommended",
    price: "80,000"
  },
  {
    id: 3,
    gameId: "1",
    partId: "corsair-vengeance-32gb-ddr4-3200",
    recommendationType: "recommended",
    price: "18,000"
  },
  {
    id: 4,
    gameId: "1",
    partId: "samsung-980-pro-1tb",
    recommendationType: "recommended",
    price: "15,000"
  },
  {
    id: 5,
    gameId: "1",
    partId: "asus-rog-strix-b660a",
    recommendationType: "recommended",
    price: "25,000"
  },
  {
    id: 6,
    gameId: "1",
    partId: "corsair-rm750x",
    recommendationType: "recommended",
    price: "18,000"
  },
  {
    id: 7,
    gameId: "1",
    partId: "amd-ryzen5-5600x",
    recommendationType: "alternative",
    price: "28,000"
  },
  {
    id: 8,
    gameId: "1",
    partId: "nvidia-rtx-4060ti",
    recommendationType: "alternative",
    price: "65,000"
  },
  {
    id: 9,
    gameId: "1",
    partId: "gskill-ripjaws-16gb-ddr4-3200",
    recommendationType: "alternative",
    price: "8,000"
  }
];

// 価格パース関数
const parsePrice = (priceString: string): number => {
  return parseInt(priceString.replace(/,/g, ''));
};

const PCPartsRecommendation: React.FC = () => {
  const [globalRank, setGlobalRank] = useState<'recommended' | 'alternative'>('recommended');
  const [selectedPart, setSelectedPart] = useState<PartWithPrice | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [partRanks, setPartRanks] = useState<{[key: string]: 'recommended' | 'alternative'}>({});

  // 固定でCyberpunk 2077を使用
  const currentGame = gameData[0];
  
  // 新しいデータ構造でパーツを取得
  const getCurrentParts = (): PartWithPrice[] => {
    const categoryOrder = ['CPU', 'GPU', 'Memory', 'Storage', 'Motherboard', 'PowerSupply'];
    const result: PartWithPrice[] = [];
    
    categoryOrder.forEach(category => {
      const rankToUse = partRanks[category] || globalRank;
      
      // game_partsからパーツIDと価格を取得
      const gamePartRelation = gamePartsData.find(gp => 
        gp.gameId === currentGame.id && 
        gp.recommendationType === rankToUse &&
        partsData.find(p => p.id === gp.partId && p.type === category)
      );
      
      if (gamePartRelation) {
        // partsからパーツ詳細を取得
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

  const handleRankChange = (type: string, newRank: 'recommended' | 'alternative') => {
    setPartRanks(prev => ({
      ...prev,
      [type]: newRank
    }));
  };

  const globalRankOptions = [
    { value: 'recommended', label: 'ハイエンド構成' },
    { value: 'alternative', label: '推奨構成' }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#121212', minHeight: '100vh' }}>
      <h1 style={{ color: '#F5F5F5' }}>PCパーツ推奨システム</h1>
      
      {/* 全体ランク切り替え */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '15px', color: '#F5F5F5' }}>構成を選択</h2>
        <ToggleButton
          options={globalRankOptions}
          selected={globalRank}
          onChange={(value) => {
            setGlobalRank(value as 'recommended' | 'alternative');
            setPartRanks({}); // 個別設定をリセット
          }}
        />
      </div>

      {/* サマリー情報 */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #333333', borderRadius: '8px', backgroundColor: '#1F1F1F' }}>
        <h2 style={{ margin: '0 0 15px 0', color: '#F5F5F5' }}>構成サマリー</h2>
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
        </div>
      </div>

      {/* パーツ一覧 */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '20px', color: '#F5F5F5' }}>推奨パーツ構成</h2>
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
      </div>

      {/* パーツ詳細モーダル */}
      <PartDetailModal 
        part={selectedPart}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPart(null);
        }}
      />

      {/* 構成の保存・共有 */}
      <div style={{ textAlign: 'center', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <ButtonBase variant="success" onClick={() => console.log('構成を保存')}>
          この構成を保存
        </ButtonBase>
        <ButtonBase variant="purple" onClick={() => console.log('構成を共有')}>
          構成を共有
        </ButtonBase>
        <ButtonBase variant="secondary" onClick={() => console.log('見積書作成')}>
          見積書を作成
        </ButtonBase>
      </div>
  </div>
)}
export default PCPartsRecommendation;