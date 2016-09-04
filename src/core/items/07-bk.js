const bk = {
  name: 'BANKS',
  image: 'http://icons.iconarchive.com/icons/shlyapnikova/buildings/32/bank-icon.png',
  produceTime: 120000,
  initialProduceTime: 120000,
  value: '250000000000',
  initialValue: '250000000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '250000000000',
  initialPrice: '250000000000',
  qtyPrice: '250000000000',
  priceProgress: 1050,
  initialPriceProgress: 1050,
  manager: false,
  managerName: 'Banks Manager',
  managerPrice: '10000000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '25000000000000', amount: 2 },
    { price: '250000000000000000000', amount: 5 },
    { price: '250000000000000000000000000', amount: 3 },
    { price: '500000000000000000000000000000', amount: 10 },
    { price: '50000000000000000000000000000000000', amount: 2 },
    { price: '100000000000000000000000000000000000000', amount: 7.77 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 },
    200: { type: 'value', amount: 3 },
    300: { type: 'value', amount: 3 },
    400: { type: 'value', amount: 3 },
    500: { type: 'value', amount: 4 },
    600: { type: 'value', amount: 4 },
    700: { type: 'value', amount: 4 },
    800: { type: 'value', amount: 10 },
    900: { type: 'value', amount: 5 },
    1000: { type: 'value', amount: 5 },
    1100: { type: 'value', amount: 5 },
    1200: { type: 'value', amount: 1.6 }
  }
}

export default bk
