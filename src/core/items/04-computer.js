const game = {
  name: 'Computer',
  image: 'http://icons.iconarchive.com/icons/tanitakawkaw/simple-cute/24/my-computer-icon.png',
  produceTime: 15000,
  initialProduceTime: 15000,
  value: '5000000',
  initialValue: '5000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '7500000',
  initialPrice: '7500000',
  priceProgress: 1080,
  initialPriceProgress: 1080,
  manager: false,
  managerName: 'Computer Manager',
  managerPrice: '50000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '5000000000', amount: 2 }
  ],

  achievements: {
  }
}

export default game
