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
        memoryCards.setAttribute('src', 'assets/images/blank.jpg')
        memoryCards.setAttribute('data-id', i)
        memoryCards.addEventListener('click', turnCard)
        board.appendChild(memoryCards)
    }
}
//Build for checking for matches
function checkForMatch() {
    const memoryCards = document.querySelectorAll('img')
    const cardOneId = cardsPickedId[0]
    const cardTwoId = cardsPickedId[1]

    if (cardOneId == cardTwoId) {
        memoryCards[cardOneId].setAttribute('src', 'assets/images/blank.jpg')
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/blank.jpg')
        alert('You have a Match!')
    }
    else if (cardsPicked[0] === cardsPicked[1]) {
        alert('You found a match')
        memoryCards[cardOneId].setAttribute('src', 'assets/images/white.jpg')
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/white.jpg')
        memoryCards[cardOneId].removeEventListener('click', turnCard)
        memoryCards[cardTwoId].removeEventListener('click', turnCard)
        cardsMatch.push(cardsPicked)
    } else {
        memoryCards[cardOneId].setAttribute('src', 'assets/images/blank.jpg')
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/blank.jpg')
        alert('Sorry, Not a Match')
    }
    cardsPicked = []
    cardsPickedId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsMatch.length === cardImages.length / 2) {
        outcomeDisplay.textContent = 'Congratulations! You are a Match Master!'
       
      

    }
}
//turn cards over 
function turnCard() {
    let cardId = this.getAttribute('data-id')
    cardsPicked.push(cardImages[cardId].name)
    cardsPickedId.push(cardId)
    this.setAttribute('src', cardImages[cardId].img)
    if (cardsPicked.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}



createBoard()

// TIMER

let amoutOftime
// Start BTN
const startBtn = document.querySelector('[data-action="start"]');
// Set the maxium amout of time
const start = () => {
    whileRunning = true;
    amoutOftime = setInterval(incrementTimer, 1000)
}
// Time incresses by one second
    const incrementTimer = () => {
        timePassed++;
    }

    // Ability to start the  timer
    startBtn.addEventListener('click', startTimer = () => {
        start();
      });
