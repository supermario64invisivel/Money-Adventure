const bk = {
  name: 'BANKS',
  image: 'http://icons.iconarchive.com/icons/shlyapnikova/buildings/32/bank-icon.png',
  produceTime: 120000,
  initialProduceTime: 120000,
  value: 1000000,
  initialValue: 1000000,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 250000000,
  initialPrice: 2500000,
  priceProgress: 1.05,
  initialPriceProgress: 1.05,
  manager: false,
  managerName: 'Mine of Gold Manager',
  managerPrice: [0, 0, 0, 10],

  upgrade: {
    type: 'mineOfGold01',
    price: [0, 0, 0, 25]
  }
}

export default bk
