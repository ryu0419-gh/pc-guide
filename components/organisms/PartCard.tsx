import { PartWithPrice } from "@/type/type";
import RankBadge from "../atoms/RankBadge";
import ScoreBadge from "../atoms/ScoreBadge";
import Price from "../atoms/Price";
import PartSpecs from "../molecules/PartsSpecs";
import ButtonBase from "../atoms/ButtonBase";

interface PartCardProps {
  part: PartWithPrice;
  currentRank: 'recommended' | 'alternative';
  availableRanks: ('recommended' | 'alternative')[];
  onShowDetail: (part: PartWithPrice) => void;
  onRankChange: (type: string, newRank: 'recommended' | 'alternative') => void;
}

const PartCard: React.FC<PartCardProps> = ({ 
  part, 
  currentRank, 
  availableRanks, 
  onShowDetail, 
  onRankChange 
}) => {
  const otherRanks = availableRanks.filter(rank => rank !== currentRank);

  return (
    <div style={{ 
      border: '1px solid #333333', 
      borderRadius: '8px', 
      padding: '20px',
      backgroundColor: '#1F1F1F',
      position: 'relative'
    }}>
      {/* ヘッダー部分 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#F5F5F5' }}>{part.type}</h3>
          <RankBadge rank={currentRank} />
        </div>
        <ScoreBadge score={part.benchmarkScore} />
      </div>
      
      {/* パーツ名 */}
      <h4 style={{ color: '#00BFFF', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
        {part.model}
      </h4>
      
      {/* 価格 */}
      <Price price={part.price} />
      
      {/* 仕様 */}
      <div style={{ marginBottom: '15px' }}>
        <PartSpecs part={part} />
      </div>
      
      {/* 他ランクのオプション */}
      {otherRanks.length > 0 && (
        <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#2A2A2A', borderRadius: '4px' }}>
          <div style={{ fontSize: '12px', color: '#CCCCCC', marginBottom: '8px' }}>他のランクを見る:</div>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {otherRanks.map((rank) => (
              <ButtonBase
                key={rank}
                variant="small"
                onClick={() => onRankChange(part.type, rank)}
              >
                {rank === 'recommended' ? 'ハイエンド' : '推奨'}に変更
              </ButtonBase>
            ))}
          </div>
        </div>
      )}
      
      {/* アクションボタン */}
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
