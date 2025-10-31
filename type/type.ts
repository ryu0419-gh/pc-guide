export interface GameProps {
  id: string;
  title: string;
  thumbnail: string;
  budgetOs: string;
  budgetProcessor: string;
  budgetMemory: string;
  budgetGraphics: string;
  budgetStorage: string;
  recommendedOs: string;
  recommendedProcessor: string;
  recommendedMemory: string;
  recommendedGraphics: string;
  recommendedStorage: string;
  highendOs: string;
  highendProcessor: string;
  highendMemory: string;
  highendGraphics: string;
  highendStorage: string;
}
export interface PartProps {
  id: string;
  model: string;
  type: string;
  benchmarkScore: number;
  description: string;
  // CPU properties
  cores?: number;
  threads?: number;
  baseClock?: string;
  boostClock?: string;
  tdp?: string;
  socket?: string;
  // GPU properties
  memory?: string;
  powerConsumption?: string;
  rayTracing?: boolean;
  cuda?: number;
  shaderUnits?: number;
  executionUnits?: number;
  // Memory properties
  capacity?: string;
  memoryType?: string;
  speed?: string;
  modules?: string;
  latency?: string;
  // Storage properties
  interface?: string;
  readSpeed?: string;
  writeSpeed?: string;
  formFactor?: string;
  // Motherboard properties
  chipset?: string;
  wifi?: string;
  bluetooth?: string;
  memorySlots?: number;
  expansionSlots?: string;
  ioports?: string;
  ethernet?: string;
  audio?: string;
  slots?: string;
  // PowerSupply properties
  wattage?: string;
  efficiency?: string;
  modular?: string;
  warranty?: string;
  certification?: string;
  fanSize?: string;
  dimensions?: string;
  connectors?: string;
  protections?: string;
  ripple?: string;
}
export interface GamePartProps {
  id: number;
  gameId: string;
  partId: string;
  recommendationType: "budget" | "recommended" | "highend";
  price: string;
}

export interface PartWithPriceProps extends PartProps {
  price: string;
  recommendationType?: string;
  url?: string;
  memoryInterface?:string;
}

export type SpecLevel = "budget" | "recommended" | "highend";

export const SPEC_LEVEL_NAMES: Record<SpecLevel, string> = {
  budget: "コスパ重視",
  recommended: "推奨スペック",
  highend: "ハイエンド",
};
export interface GameSpecInfoProps {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export type ExtractGameSpecProps = (
  game: GameProps,
  level: SpecLevel,
) => GameSpecInfoProps;
