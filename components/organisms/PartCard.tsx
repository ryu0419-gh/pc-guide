import { PartWithPrice } from "@/type/type";
import RankBadge from "../atoms/RankBadge";
import Price from "../atoms/Price";
import PartSpecs from "../molecules/PartsSpecs";
import ButtonBase from "../atoms/ButtonBase";

interface PartCardProps {
  part: PartWithPrice;
  currentRank: 'budget' | 'recommended' | 'highend';
  availableRanks: ('budget' | 'recommended' | 'highend')[];
  onShowDetail: (part: PartWithPrice) => void;
  onRankChange: (type: string, newRank: 'budget' | 'recommended' | 'highend') => void;
}

const PartCard: React.FC<PartCardProps> = ({ 
  part, 
  currentRank, 
  availableRanks, 
  onShowDetail, 
  onRankChange 
}) => {
  const otherRanks = availableRanks.filter(rank => rank !== currentRank);
  
  const getRankLabel = (rank: 'budget' | 'recommended' | 'highend') => {
    switch (rank) {
      case 'budget': return 'コスパ重視';
      case 'recommended': return '推奨';
      case 'highend': return 'ハイエンド';
      default: return rank;
    }
  };

  return (
    <div style={{ 
      border: '2px solid #00FFFF', 
      borderRadius: '16px', 
      padding: '20px',
      backgroundColor: 'rgba(0, 255, 255, 0.05)',
      position: 'relative',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
      fontFamily: 'Staatliches, system-ui, sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', color: '#FFFFFF' }}>{part.type}</h3>
        <RankBadge rank={currentRank} />
      </div>
      
      <h4 style={{ 
        color: '#00FFFF', 
        marginBottom: '10px', 
        fontSize: '16px', 
        fontWeight: 'bold',
        textShadow: '0 0 10px #00FFFF'
      }}>
        {part.model}
      </h4>

      <Price price={part.price} />
      
      <div style={{ marginBottom: '15px' }}>
        <PartSpecs part={part} />
      </div>
      
      {otherRanks.length > 0 && (
        <div style={{ 
          marginBottom: '15px', 
          padding: '10px', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          borderRadius: '8px',
          border: '1px solid rgba(0, 255, 255, 0.3)'
        }}>
          <div style={{ fontSize: '12px', color: '#CCCCCC', marginBottom: '8px' }}>他のランクを見る:</div>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {otherRanks.map((rank) => (
              <ButtonBase
                key={rank}
                variant="small"
                onClick={() => onRankChange(part.type, rank)}
              >
                {getRankLabel(rank)}に変更
              </ButtonBase>
            ))}
          </div>
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <ButtonBase
          variant="primary" 
          onClick={() => onShowDetail(part)}
          fullWidth
        >
          詳細を見る
        </ButtonBase>
      </div>
    </div>
  );
};

export default PartCard;