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
// Memory game base code https://www.youtube.com/watch?v=ec8vSKJuZTk
    const board = document.querySelector('.board')
    const outcomeDisplay = document.querySelector('#result')
    let cardsPicked = []
    let cardsPickedId = []
    let cardsMatch = []
    
//creating board for game
function createBoard() {
  for (let i = 0; i < cardImages.length; i++) {
    const memoryCards = document.createElement('img')
    memoryCards.setAttribute('src', 'assets/images/blank.png')
    memoryCards.setAttribute('data-id', i)
    memoryCards.addEventListener('click', flipCard)
    board.appendChild(memoryCards)
  }
}
//Build for checking for matches
function checkForMatch() {
    const memoryCards = document.querySelectorAll('img')
    const cardOneId = cardsPickedId[0]
    const cardTwoId = cardsPickedId[1]
  
    if (cardOneId == cardTwoId) {
        memoryCards[cardOneId].setAttribute('src', 'assets/images/blank.png')
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsPicked[0] === cardsPicked[1]) {
      alert('You found a match')
      memoryCards[cardOneId].setAttribute('src', 'assets/images/white.png')
      memoryCards[cardTwoId].setAttribute('src', 'assets/images/white.png')
      memoryCards[cardOneId].removeEventListener('click', flipCard)
      memoryCards[cardTwoId].removeEventListener('click', flipCard)
      cardsMatch.push(cardsPicked)
    } else {
        memoryCards[cardOneId].setAttribute('src', 'assets/images/blank.png')
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/blank.png')
     
    }
    cardsPicked = []
    cardsPickedId = []
    outcomeDisplay.textContent = cardsMatch.length
    if (cardsMatch.length === cardImages.length / 2) {
        outcomeDisplay.textContent = 'Congratulations! You are a Match Master!'
    }
}