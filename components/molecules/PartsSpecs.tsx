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
          ? [`ソケット ${part.socket}`, `チップセット ${part.chipset}`, `${part.formFactor}`, part.wifi]
          : [`ソケット ${part.socket}`, `チップセット ${part.chipset}`];
      case 'PowerSupply':
        return showDetailed
          ? [`${part.wattage}`, `${part.efficiency}`, part.modular, `${part.warranty}`]
          : [`${part.wattage}`, `${part.efficiency}`];
      default:
        return [part.description];
    }
  };

  const keySpecs = getKeySpecs();

  return (
    <div style={{ color: '#CCCCCC', fontSize: '14px' }}>
      {keySpecs.map((spec, index) => (
        <div key={index} style={{ marginBottom: '4px' }}>{spec}</div>
      ))}
    </div>
  );
};
export default PartSpecs;
