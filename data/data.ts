const samplePartsData = {
  recommended: [
    {
      id: 'intel-i7-12700k',
      model: 'Intel Core i7-12700K',
      type: 'CPU',
      benchmarkScore: 95,
      description: '12コア20スレッド、3.6GHz-5.0GHz',
      price: 45000,
      specs: { cores: 12, threads: 20, baseClock: '3.6GHz', boostClock: '5.0GHz', tdp: '125W', socket: 'LGA1700' }
    },
    {
      id: 'nvidia-rtx-4070',
      model: 'NVIDIA GeForce RTX 4070',
      type: 'GPU',
      benchmarkScore: 90,
      description: '12GB GDDR6X、Ray Tracing対応',
      price: 80000,
      specs: { memory: '12GB GDDR6X', boostClock: '2610MHz', powerConsumption: '200W', rayTracing: true }
    },
    {
      id: 'corsair-32gb-ddr4',
      model: 'Corsair Vengeance LPX 32GB',
      type: 'Memory',
      benchmarkScore: 85,
      description: '32GB (16GBx2) DDR4-3200 CL16',
      price: 18000,
      specs: { capacity: '32GB', memoryType: 'DDR4', speed: '3200MHz', modules: '16GBx2', latency: 'CL16' }
    },
    {
      id: 'samsung-980-pro',
      model: 'Samsung 980 PRO 1TB',
      type: 'Storage',
      benchmarkScore: 95,
      description: '1TB NVMe PCIe 4.0 SSD',
      price: 15000,
      specs: { capacity: '1TB', interface: 'PCIe 4.0', readSpeed: '7,000MB/s', writeSpeed: '5,000MB/s' }
    },
    {
      id: 'asus-rog-b660',
      model: 'ASUS ROG STRIX B660-A',
      type: 'Motherboard',
      benchmarkScore: 88,
      description: 'Intel B660チップセット、WiFi 6対応',
      price: 25000,
      specs: { socket: 'LGA1700', chipset: 'Intel B660', formFactor: 'ATX', wifi: 'WiFi 6' }
    },
    {
      id: 'corsair-rm750x',
      model: 'Corsair RM750x 750W',
      type: 'PowerSupply',
      benchmarkScore: 92,
      description: '750W 80+ Gold認証、フルモジュラー',
      price: 18000,
      specs: { wattage: '750W', efficiency: '80+ Gold', modular: 'フルモジュラー', warranty: '10年保証' }
    }
  ],
  alternative: [
    {
      id: 'amd-ryzen-5600x',
      model: 'AMD Ryzen 5 5600X',
      type: 'CPU',
      benchmarkScore: 82,
      description: '6コア12スレッド、3.7GHz-4.6GHz',
      price: 28000,
      specs: { cores: 6, threads: 12, baseClock: '3.7GHz', boostClock: '4.6GHz', tdp: '65W', socket: 'AM4' }
    },
    {
      id: 'nvidia-rtx-4060ti',
      model: 'NVIDIA RTX 4060 Ti',
      type: 'GPU',
      benchmarkScore: 75,
      description: '16GB GDDR6、1080p-1440p向け',
      price: 65000,
      specs: { memory: '16GB GDDR6', boostClock: '2535MHz', powerConsumption: '165W', rayTracing: true }
    },
    {
      id: 'gskill-16gb-ddr4',
      model: 'G.Skill Ripjaws V 16GB',
      type: 'Memory',
      benchmarkScore: 75,
      description: '16GB (8GBx2) DDR4-3200 CL16',
      price: 8000,
      specs: { capacity: '16GB', memoryType: 'DDR4', speed: '3200MHz', modules: '8GBx2', latency: 'CL16' }
    },
    {
      id: 'wd-sn570-500gb',
      model: 'WD Blue SN570 500GB',
      type: 'Storage',
      benchmarkScore: 78,
      description: '500GB NVMe PCIe 3.0 SSD',
      price: 8000,
      specs: { capacity: '500GB', interface: 'PCIe 3.0', readSpeed: '3,500MB/s', writeSpeed: '3,000MB/s' }
    },
    {
      id: 'msi-b660m-pro',
      model: 'MSI B660M PRO-B',
      type: 'Motherboard',
      benchmarkScore: 82,
      description: 'Intel B660チップセット、mATX',
      price: 15000,
      specs: { socket: 'LGA1700', chipset: 'Intel B660', formFactor: 'mATX', wifi: '無し' }
    },
    {
      id: 'seasonic-gx650',
      model: 'Seasonic Focus GX-650',
      type: 'PowerSupply',
      benchmarkScore: 88,
      description: '650W 80+ Gold認証、セミモジュラー',
      price: 15000,
      specs: { wattage: '650W', efficiency: '80+ Gold', modular: 'セミモジュラー', warranty: '7年保証' }
    }
  ]
};
export default samplePartsData;