const castless = {
  name: 'Castle',
  image: 'http://megaicons.net/static/img/icons_sizes/491/1756/32/king-ikthusius-castle-icon.png',
  produceTime: 1800000,
  initialProduceTime: 1800000,
  value: '250000000000000',
  initialValue: '250000000000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '250000000000000',
  initialPrice: '250000000000000',
  qtyPrice: '250000000000000',
  priceProgress: 1040,
  initialPriceProgress: 1040,
  manager: false,
  managerName: 'Castle manager',
  managerPrice: '1000000000000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '2500000000000000', amount: 2 },
    { price: '25000000000000000000000', amount: 5 },
    { price: '25000000000000000000000000000', amount: 3 },
    { price: '500000000000000000000000000000', amount: 10 },
    { price: '250000000000000000000000000000000000', amount: 2 },
    { price: '100000000000000000000000000000000000000', amount: 7.77 }
  ],

  achievements: {
    25: { type: 'speed', amount: 2 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 2 },
    200: { type: 'value', amount: 3 },
    300: { type: 'value', amount: 3 },
    400: { type: 'value', amount: 3 },
    500: { type: 'value', amount: 3 },
    600: { type: 'value', amount: 3 },
    700: { type: 'value', amount: 7 },
    800: { type: 'value', amount: 3 },
    900: { type: 'value', amount: 3 },
    1000: { type: 'value', amount: 5 },
    1100: { type: 'value', amount: 3 },
    1200: { type: 'value', amount: 3 },
    1300: { type: 'value', amount: 3 },
    1400: { type: 'value', amount: 5 }
  }
}

export default castless
