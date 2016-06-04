const game = {
  name: 'Game',
  image: 'http://iconizer.net/files/Random_icons/orig/game.png',
  produceTime: 3000,
  initialProduceTime: 3000,
  value: '60',
  initialValue: '60',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '60',
  initialPrice: '60',
  priceProgress: 1100,
  initialPriceProgress: 1100,
  manager: false,
  managerName: 'Game Manager',
  managerPrice: '1000',

  upgrade: {
    type: 'game01',
    price: '500000'
  }
}

export default game
