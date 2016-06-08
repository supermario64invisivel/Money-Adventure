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
  priceProgress: 1070,
  initialPriceProgress: 1070,
  manager: false,
  managerName: 'House Manager',
  managerPrice: '1000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '10000000000', amount: 2 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 }
  }
}

export default game
