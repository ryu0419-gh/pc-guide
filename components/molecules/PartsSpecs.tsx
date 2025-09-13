import { PartWithPrice } from "@/type/type";

interface PartSpecsProps {
  part: PartWithPrice;
  showDetailed?: boolean;
}

const PartSpecs: React.FC<PartSpecsProps> = ({ part, showDetailed = false }) => {
  const getKeySpecs = () => {
    switch (part.type) {
      case 'CPU':
        return showDetailed 
          ? [`${part.cores}コア/${part.threads}スレッド`, `${part.baseClock}-${part.boostClock}`, `TDP ${part.tdp}`, `ソケット ${part.socket}`]
          : [`${part.cores}コア/${part.threads}スレッド`, `${part.baseClock}-${part.boostClock}`];
      case 'GPU':
        return showDetailed
          ? [`VRAM ${part.memory}`, `ブースト ${part.boostClock}`, `消費電力 ${part.powerConsumption}`, part.rayTracing ? 'Ray Tracing対応' : ''].filter(Boolean)
          : [`VRAM ${part.memory}`, `ブースト ${part.boostClock}`];
      case 'Memory':
        return showDetailed
          ? [`容量 ${part.capacity}`, `${part.memoryType} ${part.speed}`, `${part.modules} ${part.latency}`]
          : [`容量 ${part.capacity}`, `${part.memoryType} ${part.speed}`];
      case 'Storage':
        return showDetailed
          ? [`容量 ${part.capacity}`, `${part.interface} SSD`, `読込 ${part.readSpeed}`, `書込 ${part.writeSpeed}`]
          : [`容量 ${part.capacity}`, `読込 ${part.readSpeed}`];
      case 'Motherboard':
        return showDetailed
          ? [
              `ソケット ${part.socket}`, 
              `チップセット ${part.chipset}`, 
              `フォームファクター ${part.formFactor}`,
              `メモリスロット ${part.memorySlots || '4'}`,
              `拡張スロット ${part.expansionSlots || 'PCIe x16×2, PCIe x1×4'}`,
              part.wifi ? `WiFi ${part.wifi}` : 'WiFi なし',
              part.bluetooth ? `Bluetooth ${part.bluetooth}` : '',
              `I/O ${part.ioports || 'USB 3.2×6, USB-C×2'}`
            ].filter(Boolean)
          : [`ソケット ${part.socket}`, `チップセット ${part.chipset}`, `${part.formFactor}`];
      case 'PowerSupply':
        return showDetailed
          ? [
              `出力 ${part.wattage}`,
              `効率 ${part.efficiency}`,
              `ケーブル ${part.modular || 'セミモジュラー'}`,
              `80PLUS ${part.certification || 'Bronze'}`,
              `冷却 ${part.fanSize || '120mm'} ファン`,
              `保証 ${part.warranty || '3年'}`,
              `サイズ ${part.dimensions || 'ATX標準'}`,
              `コネクタ ${part.connectors || 'ATX24pin, EPS8pin, PCIe8pin×4'}`
            ].filter(Boolean)
          : [`出力 ${part.wattage}`, `効率 ${part.efficiency}`, `${part.modular || 'セミモジュラー'}`];
      default:
        return [part.description];
    }
  };

  const keySpecs = getKeySpecs();

  return (
    <div style={{ 
      color: '#CCCCCC', 
      fontSize: '14px',
      fontFamily: 'Staatliches, system-ui, sans-serif'
    }}>
      {keySpecs.map((spec, index) => (
        <div key={index} style={{ 
          marginBottom: '6px',
          padding: '2px 0',
          borderLeft: '2px solid rgba(0, 255, 255, 0.3)',
          paddingLeft: '8px'
        }}>
          {spec}
        </div>
      ))}
    </div>
  );
};

export default PartSpecs;