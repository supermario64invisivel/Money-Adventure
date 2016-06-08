const juice = {
  name: 'Juice',
  image: 'http://megaicons.net/static/img/icons_sizes/503/1801/32/orange-juice-icon.png',
  produceTime: 1000,
  initialProduceTime: 1000,
  value: '2000',
  initialValue: '2000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 1,
  price: '4000',
  initialPrice: '4000',
  priceProgress: 1050,
  initialPriceProgress: 1050,
  manager: false,
  managerName: 'Juice Manager',
  managerPrice: '500000',

  nextUpgrade: 0,
  upgrades: [
    { price: '100000000', amount: 2 },
    { price: '1000000000000000', amount: 5 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 },
    150: { type: 'speed', amount: 2 },
    200: { amount: 2.5 },
    300: { amount: 2.75 },
    400: { amount: 3 },
    500: { amount: 5 },
    600: { amount: 2 },
    777: { amount: 7.77 },
    800: { amount: 3 },
    900: { amount: 3 },
    1000: { amount: 5 },
    1100: { amount: 3 },
    1200: { amount: 3 },
    1300: { amount: 4 },
    1400: { amount: 4 },
    1500: { amount: 10 }
  }
}

export default juice
