const game = {
  name: 'Video Game',
  image: 'http://www.gpj.com.br/content/images/thumbs/0014341_video-game-playstation-3-slim-hd-250gb-preto-usado-open_32.jpeg',
  produceTime: 7500,
  initialProduceTime: 7500,
  value: '500000',
  initialValue: '500000',
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: '1000000',
  initialPrice: '1000000',
  priceProgress: 1090,
  initialPriceProgress: 1090,
  manager: false,
  managerName: 'Video Game Manager',
  managerPrice: '25000000',

  nextUpgrade: 0,
  upgrades: [
    { price: '2500000000', amount: 2 }
  ],

  achievements: {
  }
}

export default game
