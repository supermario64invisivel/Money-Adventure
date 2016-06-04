const oil = {
  name: 'Oil',
  image: 'http://factorio.rotol.me/pack/yuoki-f11-a/icon/fluid/crude-oil.png',
  produceTime: 600000,
  initialProduceTime: 600000,
  value: 30000000000,
  initialValue: 30000000000,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 25000000000,
  initialPrice: 25000000000,
  priceProgress: 1.05,
  initialPriceProgress: 1.05,
  manager: false,
  managerName: 'Oil manager',
  managerPrice: [0, 0, 0, 100],

  upgrade: {
    type: 'oil01',
    price: [0, 0, 0, 200]
  }
}

export default oil
