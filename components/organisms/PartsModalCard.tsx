import { PartWithPrice } from "@/type/type";
import Modal from "../molecules/Modal";
import ScoreBadge from "../atoms/ScoreBadge";
import Price from "../atoms/Price";
import PartSpecs from "../molecules/PartsSpecs";
import ButtonBase from "../atoms/ButtonBase";

interface PartDetailModalProps {
  part: PartWithPrice | null;
  isOpen: boolean;
  onClose: () => void;
}

const PartDetailModal: React.FC<PartDetailModalProps> = ({ part, isOpen, onClose }) => {
  if (!part) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#00BFFF' }}>{part.model}</h2>
          <ScoreBadge score={part.benchmarkScore} />
        </div>
        
        <Price price={part.price} />
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#F5F5F5' }}>詳細仕様</h3>
          <PartSpecs part={part} showDetailed={true} />
        </div>
        
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#2A2A2A', borderRadius: '8px' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '8px', color: '#F5F5F5' }}>説明</h4>
          <p style={{ margin: 0, color: '#CCCCCC', fontSize: '14px' }}>{part.description}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <ButtonBase variant="secondary" onClick={onClose}>閉じる</ButtonBase>
          <ButtonBase variant="success" onClick={() => console.log('購入サイトへ')}>購入サイトへ</ButtonBase>
        </div>
      </div>
    </Modal>
  );
};
export default PartDetailModal;