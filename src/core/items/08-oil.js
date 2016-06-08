const oil = {
  name: 'Oil',
  image: 'http://factorio.rotol.me/pack/yuoki-f11-a/icon/fluid/crude-oil.png',
  produceTime: 600000,
  initialProduceTime: 600000,
  value: '30000000000000',
  initialValue: '30000000000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '25000000000000',
  initialPrice: '25000000000000',
  priceProgress: 1050,
  initialPriceProgress: 1050,
  manager: false,
  managerName: 'Oil manager',
  managerPrice: '100000000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '200000000000000', amount: 2 }
  ],

  achievements: {
  }
}

export default oil
