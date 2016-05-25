const game = {
  name: 'House',
  image: 'http://www.fancyicons.com/free-icons/155/quartz/png/32/house_1_32.png',
  produceTime: 60000,
  initialProduceTime: 60000,
  value: 500000,
  initialValue: 500000,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 250000,
  initialPrice: 250000,
  priceProgress: 1.07,
  initialPriceProgress: 1.07,
  manager: false,
  managerName: 'House Manager',
  managerPrice: [0, 0, 1],

  upgrade: {
    type: 'house01',
    price: [0, 0, 10]
  }
}

export default game
