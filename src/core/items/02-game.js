const game = {
  name: 'Game',
  image: 'http://iconizer.net/files/Random_icons/orig/game.png',
  produceTime: 3000,
  initialProduceTime: 3000,
  value: '60000',
  initialValue: '60000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '60000',
  initialPrice: '60000',
  priceProgress: 1100,
  initialPriceProgress: 1100,
  manager: false,
  managerName: 'Game Manager',
  managerPrice: '1000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '500000000', amount: 2 }
  ],

  achievements: {
  }
}

export default game
