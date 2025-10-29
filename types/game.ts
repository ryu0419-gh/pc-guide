export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  specs: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
  parts: {
    recommended: Array<{
      type: string;
      model: string;
      price: string;
      description: string;
      benchmarkScore: number;
    }>;
    alternative: Array<{
      type: string;
      model: string;
      price: string;
      description: string;
      benchmarkScore: number;
    }>;
  };
}