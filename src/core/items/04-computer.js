const comp = {
  name: 'Computer',
  image: 'http://icons.iconarchive.com/icons/tanitakawkaw/simple-cute/24/my-computer-icon.png',
  produceTime: 15000,
  initialProduceTime: 15000,
  value: '5000000',
  initialValue: '5000000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '7500000',
  initialPrice: '7500000',
  priceProgress: 1080,
  initialPriceProgress: 1080,
  manager: false,
  managerName: 'Computer Manager',
  managerPrice: '50000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '5000000000', amount: 2 }
  ],

  achievements: {
    25: { type: 'speed', amount: 4 },
    50: { type: 'speed', amount: 2 },
    100: { type: 'speed', amount: 3 },
    175: { amount: 3 },
    250: { amount: 5 },
    325: { amount: 4 },
    400: { amount: 2 },
    500: { amount: 6 },
    600: { amount: 4 },
    666: { amount: 1.666 },
    700: { amount: 3 },
    800: { amount: 2 },
    900: { amount: 9 }
  }
}

export default comp
