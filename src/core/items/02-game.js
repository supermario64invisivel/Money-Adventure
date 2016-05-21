const game = {
  name: 'Game',
  image: 'http://iconizer.net/files/Random_icons/orig/game.png',
  produceTime: 3000,
  initialProduceTime: 3000,
  value: 60,
  initialValue: 60,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 60,
  initialPrice: 60,
  priceProgress: 20,
  initialPriceProgress: 20,
  manager: false,
  managerName: 'Game Manager',
  managerPrice: [0, 1],

  upgrade: {
    type: 'game01',
    price: [0, 900]
  }
}

export default game
