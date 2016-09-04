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
  qtyPrice: '2500000000000000',
  priceProgress: 1030,
  initialPriceProgress: 1030,
  manager: false,
  managerName: 'Flying Car manager',
  managerPrice: '100000000000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '200000000000000', amount: 2 },
    { price: '200000000000000000000000', amount: 5 },
    { price: '200000000000000000000000000000', amount: 3 },
    { price: '500000000000000000000000000000', amount: 10 },
    { price: '500000000000000000000000000000000000', amount: 2 },
    { price: '1000000000000000000000000000000000000', amount: 7.77 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 },
    200: { type: 'value', amount: 3 },
    300: { type: 'value', amount: 3 },
    400: { type: 'value', amount: 3 },
    500: { type: 'value', amount: 3 },
    600: { type: 'value', amount: 3 },
    700: { type: 'value', amount: 3 },
    800: { type: 'value', amount: 3 },
    900: { type: 'value', amount: 3 },
    1000: { type: 'value', amount: 3 },
    1100: { type: 'value', amount: 3 },
    1200: { type: 'value', amount: 3 },
    1300: { type: 'value', amount: 3 },
    1400: { type: 'value', amount: 3 }
  }
}

export default flyr
