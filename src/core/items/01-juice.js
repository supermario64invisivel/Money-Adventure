const juice = {
  name: 'Juice',
  image: 'http://megaicons.net/static/img/icons_sizes/503/1801/32/orange-juice-icon.png',
  produceTime: 1000,
  initialProduceTime: 1000,
  value: 2,
  initialValue: 2,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 1,
  price: 4,
  initialPrice: 4,
  priceProgress: 2,
  initialPriceProgress: 2,
  manager: false,
  managerName: 'Juice Manager',
  managerPrice: [500],

  upgrade: {
    type: 'juice01',
    price: [0, 100]
  }
}

export default juice
