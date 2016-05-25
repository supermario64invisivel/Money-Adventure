const game = {
  name: 'Computer',
  image: 'http://icons.iconarchive.com/icons/tanitakawkaw/simple-cute/24/my-computer-icon.png',
  produceTime: 15000,
  initialProduceTime: 15000,
  value: 5000,
  initialValue: 5000,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 7500,
  initialPrice: 7500,
  priceProgress: 1.08,
  initialPriceProgress: 1.08,
  manager: false,
  managerName: 'Computer Manager',
  managerPrice: [0, 50],

  upgrade: {
    type: 'computer01',
    price: [0, 0, 5]
  }
}

export default game
