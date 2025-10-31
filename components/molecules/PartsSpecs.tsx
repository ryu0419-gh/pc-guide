import { VStack, Text, Box } from "@chakra-ui/react";
import { PartWithPriceProps } from "@/type/type";

interface PartSpecsProps {
  part: PartWithPriceProps;
  showDetailed?: boolean;
  spacing?: number;
}

const PartSpecs: React.FC<PartSpecsProps> = ({
  part,
  showDetailed = false,
  spacing = 3,
}) => {
  const getKeySpecs = () => {
    switch (part.type) {
      case "CPU":
        return showDetailed
          ? [
              `コア数: ${part.cores}`,
              `スレッド数: ${part.threads}`,
              `ベースクロック: ${part.baseClock}`,
              `ブーストクロック: ${part.boostClock}`,
              `TDP: ${part.tdp}`,
              `ソケット: ${part.socket}`,
            ]
          : [
              `${part.cores}コア / ${part.threads}スレッド`,
              `${part.baseClock} - ${part.boostClock}`,
            ];
      case "GPU":
        return showDetailed
          ? [
              `CUDAコア数: ${part.cores}`,
              `メモリ: ${part.memory}`,
              `メモリバス幅: ${part.memoryInterface}`,
              `TDP: ${part.tdp}`,
              part.rayTracing ? "Ray Tracing対応" : "",
            ].filter(Boolean)
          : [`VRAM ${part.memory}`, `消費電力 ${part.tdp}`];
      case "Memory":
        return showDetailed
          ? [
              `容量 ${part.capacity}`,
              `${part.memoryType} ${part.speed}`,
              `${part.modules} ${part.latency}`,
            ]
          : [`容量 ${part.capacity}`, `${part.memoryType} ${part.speed}`];
      case "Storage":
        return showDetailed
          ? [
              `容量 ${part.capacity}`,
              `${part.interface} SSD`,
              `読込 ${part.readSpeed}`,
              `書込 ${part.writeSpeed}`,
            ]
          : [`容量 ${part.capacity}`, `読込 ${part.readSpeed}`];
      case "Motherboard":
        return showDetailed
          ? [
              `ソケット ${part.socket}`,
              `チップセット ${part.chipset}`,
              `フォームファクター ${part.formFactor}`,
              `メモリスロット ${part.memorySlots || "4"}`,
              `拡張スロット ${part.expansionSlots || "PCIe x16×2, PCIe x1×4"}`,
              part.wifi ? `WiFi ${part.wifi}` : "WiFi なし",
              part.bluetooth ? `Bluetooth ${part.bluetooth}` : "",
              `I/O ${part.ioports || "USB 3.2×6, USB-C×2"}`,
            ].filter(Boolean)
          : [
              `ソケット ${part.socket}`,
              `チップセット ${part.chipset}`,
              `${part.formFactor}`,
            ];
      case "PowerSupply":
        return showDetailed
          ? [
              `出力 ${part.wattage}`,
              `効率 ${part.efficiency}`,
              `ケーブル ${part.modular || "セミモジュラー"}`,
              `80PLUS ${part.certification || "Bronze"}`,
              `冷却 ${part.fanSize || "120mm"} ファン`,
              `保証 ${part.warranty || "3年"}`,
              `サイズ ${part.dimensions || "ATX標準"}`,
              `コネクタ ${part.connectors || "ATX24pin, EPS8pin, PCIe8pin×4"}`,
            ].filter(Boolean)
          : [
              `出力 ${part.wattage}`,
              `効率 ${part.efficiency}`,
              `${part.modular || "セミモジュラー"}`,
            ];
      default:
        return [part.description];
    }
  };

  const keySpecs = getKeySpecs();

  return (
    <VStack align="start" spacing={spacing}>
      {keySpecs.map((spec, index) => (
        <Box key={index} w="full">
          <Text
            color="neon.white"
            fontSize="lg"
            fontFamily="body"
            fontWeight="semibold"
            borderLeft="3px solid"
            borderColor="rgba(0, 255, 255, 0.5)"
            pl={4}
            py={2}
            lineHeight="1.5"
          >
            {spec}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default PartSpecs;
