const mineofgold = {
  name: 'Mine Of Gold',
  image: 'http://en.grandfantasia.info/assets/UI/itemicon/I00099.gif',
  produceTime: 300000,
  initialProduceTime: 300000,
  value: '1000000000',
  initialValue: '1000000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '2500000000',
  initialPrice: '2500000000',
  qtyPrice: '2500000000',
  priceProgress: 1060,
  initialPriceProgress: 1060,
  manager: false,
  managerName: 'Mine of Gold Manager',
  managerPrice: '10000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '25000000000', amount: 2 },
    { price: '250000000000000000', amount: 5 },
    { price: '250000000000000000000000', amount: 3 },
    { price: '500000000000000000000000000000', amount: 10 },
    { price: '25000000000000000000000000000000000', amount: 2 },
    { price: '100000000000000000000000000000000000000', amount: 7.77 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 },
    200: { type: 'value', amount: 4 },
    300: { type: 'value', amount: 3 },
    400: { type: 'value', amount: 2 },
    500: { type: 'value', amount: 5 },
    600: { type: 'value', amount: 7 },
    700: { type: 'value', amount: 2 },
    800: { type: 'value', amount: 3 },
    900: { type: 'value', amount: 4 },
    1000: { type: 'value', amount: 2 },
    1100: { type: 'value', amount: 3.4 }
  }
}

export default mineofgold
