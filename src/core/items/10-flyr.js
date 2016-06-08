const flyr = {
  name: 'Flying Car',
  image: 'https://a.fsdn.com/allura/p/circuitchung/icon',
  produceTime: 3600000,
  initialProduceTime: 3600000,
  value: '5000000000000000',
  initialValue: '5000000000000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '2500000000000000',
  initialPrice: '2500000000000000',
  priceProgress: 1040,
  initialPriceProgress: 1040,
  manager: false,
  managerName: 'Flying Car manager',
  managerPrice: '100000000000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '250000000000000000', amount: 2 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 }
  }
}

export default flyr
