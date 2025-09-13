import { PartWithPrice } from "@/type/type";
import Modal from "../molecules/Modal";
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
      <div style={{ fontFamily: 'Staatliches, system-ui, sans-serif' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}>
          <h2 style={{ 
            margin: 0, 
            color: '#00FFFF',
            fontSize: '28px',
            textShadow: '0 0 20px #00FFFF'
          }}>
            {part.model}
          </h2>
        </div>
        
        <Price price={part.price} />
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            fontSize: '20px', 
            marginBottom: '15px', 
            color: '#FFFFFF',
            borderBottom: '2px solid #00FFFF',
            paddingBottom: '8px'
          }}>
            詳細仕様
          </h3>
          <PartSpecs part={part} showDetailed={true} />
        </div>
        
        <div style={{ 
          marginBottom: '20px', 
          padding: '20px', 
          backgroundColor: 'rgba(0, 255, 255, 0.1)', 
          borderRadius: '12px',
          border: '1px solid rgba(0, 255, 255, 0.3)'
        }}>
          <h4 style={{ 
            fontSize: '18px', 
            marginBottom: '12px', 
            color: '#FFFFFF',
            textShadow: '0 0 10px #00FFFF'
          }}>
            説明
          </h4>
          <p style={{ 
            margin: 0, 
            color: '#CCCCCC', 
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            {part.description}
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
          <ButtonBase variant="secondary" onClick={onClose}>
            閉じる
          </ButtonBase>
          <ButtonBase variant="success" onClick={() => console.log('購入サイトへ')}>
            購入サイトへ
          </ButtonBase>
        </div>
      </div>
    </Modal>
  );
};

export default PartDetailModal;