export interface GameProps {
  id: string;
  title: string;
  thumbnail: string;
  min_os: string;
  min_processor: string;
  min_memory: string;
  min_graphics: string;
  min_storage: string;
  rec_os: string;
  rec_processor: string;
  rec_memory: string;
  rec_graphics: string;
  rec_storage: string;
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
  recommendationType: 'recommended' | 'alternative';
  price: string;
}

export interface PartWithPrice extends PartProps {
  price: string;
}