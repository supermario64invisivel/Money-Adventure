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
  qtyPrice: '25000000000000',
  priceProgress: 1040,
  initialPriceProgress: 1040,
  manager: false,
  managerName: 'Oil manager',
  managerPrice: '100000000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '200000000000000', amount: 2 },
    { price: '2000000000000000000000', amount: 5 },
    { price: '2000000000000000000000000000', amount: 3 },
    { price: '500000000000000000000000000000', amount: 10 },
    { price: '100000000000000000000000000000000000', amount: 2 },
    { price: '100000000000000000000000000000000000000', amount: 7.77 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 },
    200: { type: 'value', amount: 2 },
    300: { type: 'value', amount: 2.5 },
    400: { type: 'value', amount: 2.75 },
    500: { type: 'value', amount: 3 },
    600: { type: 'value', amount: 3.25 },
    700: { type: 'value', amount: 3.75 },
    800: { type: 'value', amount: 4 },
    900: { type: 'value', amount: 3.75 },
    1000: { type: 'value', amount: 2 },
    1100: { type: 'value', amount: 2 },
    1200: { type: 'value', amount: 2 },
    1300: { type: 'value', amount: 2 }
  }
}

export default oil
