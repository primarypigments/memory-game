// Array for card images
const cardImages = [
    {
      name: 'fries',
      img: 'assets/images/fries.jpg'
    },
    {
      name: 'hamburger',
      img: 'assets/images/hamburger.jpg'
    },
    {
        name: 'malt',
        img: 'assets/images/malt.jpg'
    },
    {
      name: 'pizza',
      img: 'assets/images/pizza.jpg'
    },
    {
      name: 'rootbeer',
      img: 'assets/images/rootbeer.jpg'
    },
    {
      name: 'popcorn',
      img: 'assets/images/popcorn.jpg'
    },
    {
      name: 'palak',
      img: 'assets/images/palak.jpg'
    },
    {
      name: 'jellybean',
      img: 'assets/images/jellybeans.jpg'
    },
    {
      name: 'grilled cheese',
      img: 'assets/images/grilledcheese.jpg'
    },
    {
      name: 'fish and chips',
      img: 'assets/images/fishandchips.jpg'
    },
    {
      name: 'cafe latte',
      img: 'assets/images/cafelatte.jpg'
    },
    {
      name: 'beer',
      img: 'assets/images/beer.jpg'
    },
    {
        name: 'fries',
        img: 'assets/images/fries.jpg'
      },
      {
        name: 'hamburger',
        img: 'assets/images/malt.jpg'
      },
      {
        name: 'malt',
        img: 'assets/images/malt.jpg'
      },
      {
        name: 'pizza',
        img: 'assets/images/pizza.jpg'
      },
      {
        name: 'rootbeer',
        img: 'assets/images/rootbeer.jpg'
      },
      {
        name: 'popcorn',
        img: 'assets/images/popcorn.jpg'
      },
      {
        name: 'palak',
        img: 'assets/images/palak.jpg'
      },
      {
        name: 'jellybean',
        img: 'assets/images/jellybeans.jpg'
      },
      {
        name: 'grilled cheese',
        img: 'assets/images/grilledcheese.jpg'
      },
      {
        name: 'fish and chips',
        img: 'assets/images/fishandchips.jpg'
      },
      {
        name: 'cafe latte',
        img: 'assets/images/cafelatte.jpg'
      },
      {
        name: 'beer',
        img: 'assets/images/beer.jpg'
      },
    ]
  // Shuffle code from https://javascript.info/
    cardImages.sort(() => Math.random() - 0.5); 

    const grid = document.querySelector('.board')

//creating board for game
function createBoard() {
  for (let i = 0; i < cardImages.length; i++) {
    const memoryCard = document.createElement('img')
    memoryCard.setAttribute('src', 'assets/images/blank.png')
    memoryCard.setAttribute('data-id', i)
    board.appendChild(memoryCard)
  }
}