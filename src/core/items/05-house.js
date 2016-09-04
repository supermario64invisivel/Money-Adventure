const game = {
  name: 'House',
  image: 'http://www.fancyicons.com/free-icons/155/quartz/png/32/house_1_32.png',
  produceTime: 60000,
  initialProduceTime: 60000,
  value: '500000000',
  initialValue: '500000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '250000000',
  initialPrice: '250000000',
  qtyPrice: '250000000',
  priceProgress: 1070,
  initialPriceProgress: 1070,
  manager: false,
  managerName: 'House Manager',
  managerPrice: '1000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '10000000000', amount: 2 },
    { price: '100000000000000000', amount: 5 },
    { price: '100000000000000000000000', amount: 3 },
    { price: '500000000000000000000000000000', amount: 10 },
    { price: '10000000000000000000000000000000000', amount: 2 },
    { price: '100000000000000000000000000000000000000', amount: 7.77 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 },
    200: { type: 'value', amount: 4 },
    300: { type: 'value', amount: 3 },
    400: { type: 'value', amount: 5 },
    500: { type: 'value', amount: 6 },
    600: { type: 'value', amount: 4 },
    700: { type: 'value', amount: 2 },
    800: { type: 'value', amount: 8 },
    900: { type: 'value', amount: 1.9 },
    1000: { type: 'value', amount: 5 }
  }
}

export default game
