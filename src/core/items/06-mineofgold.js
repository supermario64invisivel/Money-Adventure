const mineofgold = {
  name: 'Mine Of Gold',
  image: 'http://en.grandfantasia.info/assets/UI/itemicon/I00099.gif',
  produceTime: 300000,
  initialProduceTime: 300000,
  value: 1000000,
  initialValue: 1000000,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 2500000,
  initialPrice: 2500000,
  priceProgress: 1.06,
  initialPriceProgress: 1.06,
  manager: false,
  managerName: 'Mine of Gold Manager',
  managerPrice: [0, 0, 10],

  upgrade: {
    type: 'mineOfGold01',
    price: [0, 0, 25]
  }
}

export default mineofgold
