const game = {
  name: 'Video Game',
  image: 'http://www.gpj.com.br/content/images/thumbs/0014341_video-game-playstation-3-slim-hd-250gb-preto-usado-open_32.jpeg',
  produceTime: 7500,
  initialProduceTime: 7500,
  value: 500,
  initialValue: 500,
  producing: false,
  producingTime: 0,
  progress: 0,
  quantity: 0,
  price: 1000,
  initialPrice: 1000,
  priceProgress: 100,
  initialPriceProgress: 100,
  manager: false,
  managerName: 'Video Game Manager',
  managerPrice: [0, 25],

  upgrade: {
    type: 'videogame01',
    price: [0, 500, 2]
  }
}

export default game
