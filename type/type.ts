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
  cores?: number;
  threads?: number;
  baseClock?: string;
  boostClock?: string;
  tdp?: string;
  socket?: string;
  memory?: string;
  powerConsumption?: string;
  rayTracing?: boolean;
  cuda?: number;
  shaderUnits?: number;
  executionUnits?: number;
  capacity?: string;
  memoryType?: string;
  speed?: string;
  modules?: string;
  latency?: string;
  interface?: string;
  readSpeed?: string;
  writeSpeed?: string;
  formFactor?: string;
  chipset?: string;
  wifi?: string;
  slots?: string;
  wattage?: string;
  efficiency?: string;
  modular?: string;
  warranty?: string;
}

export interface GamePartProps {
  id: number;
  gameId: string;
  partId: string;
  recommendationType: 'budget' | 'recommended' | 'highend';
  price: string;
}

export interface PartWithPrice extends PartProps {
  price: string;
}


export type SpecLevel = 'budget' | 'recommended' | 'highend';


export const SPEC_LEVEL_NAMES: Record<SpecLevel, string> = {
  budget: 'コスパ重視',
  recommended: '推奨スペック',
  highend: 'ハイエンド'
};


export interface GameSpecInfo {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}


export type ExtractGameSpec = (game: GameProps, level: SpecLevel) => GameSpecInfo;