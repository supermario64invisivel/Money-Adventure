const game = {
  name: 'House',
  image: 'http://www.fancyicons.com/free-icons/155/quartz/png/32/house_1_32.png',
  produceTime: 60000,
  initialProduceTime: 60000,
  value: '500000',
  initialValue: '500000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '250000',
  initialPrice: '250000',
  priceProgress: 1070,
  initialPriceProgress: 1070,
  manager: false,
  managerName: 'House Manager',
  managerPrice: '1000000',

  upgrade: {
    type: 'house01',
    price: '10000000'
  }
}

export default game
