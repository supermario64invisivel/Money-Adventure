const flyr = {
  name: 'Fly Car',
  image: 'https://a.fsdn.com/allura/p/circuitchung/icon',
  produceTime: 3600000,
  initialProduceTime: 3600000,
  value: 5000000000000,
  initialValue: 5000000000000,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 2500000000000,
  initialPrice: 2500000000000,
  priceProgress: 1.04,
  initialPriceProgress: 1.04,
  manager: false,
  managerName: 'flyr manager',
  managerPrice: [0, 0, 0, 0, 100],

  upgrade: {
    type: 'flyr01',
    price: [0, 0, 0, 0, 250]
  }
}

export default flyr
