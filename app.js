/* jshint esversion: 11 */

// Array for card images

// After i changed the image sizes, the image size is not correct..
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
];
// Shuffle code from https://javascript.info/
cardImages.sort(() => Math.random() - 0.5);
// Memory game base code https://www.youtube.com/watch?v=ec8vSKJuZTk
const board = document.querySelector('.board');
const outcomeDisplay = document.querySelector('#result');
let cardsPicked = [];
let cardsPickedId = [];
let cardsMatch = [];

//creating board for game
function createBoard() {
    for (let i = 0; i < cardImages.length; i++) {
        const memoryCards = document.createElement('img');
        memoryCards.setAttribute('src', 'assets/images/blank.jpg');
        memoryCards.setAttribute('data-id', i);
        memoryCards.addEventListener('click', turnCard);
        board.appendChild(memoryCards);
    }
}
//Build for checking for matches
function checkForMatch() {
    const memoryCards = document.querySelectorAll('img');
    const cardOneId = cardsPickedId[0];
    const cardTwoId = cardsPickedId[1];

    if (cardsPicked[0] === cardsPicked[1]) {
        alert('You found a match');
        memoryCards[cardOneId].setAttribute('src', 'assets/images/white.jpg');
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/white.jpg');
        memoryCards[cardOneId].removeEventListener('click', turnCard);
        memoryCards[cardTwoId].removeEventListener('click', turnCard);
        cardsMatch.push(cardsPicked);
    } else {
        memoryCards[cardOneId].setAttribute('src', 'assets/images/blank.jpg');
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/blank.jpg');

    }
    cardsPicked = [];
    cardsPickedId = [];
    // resultDisplay.textContent = cardsWon.length
    if (cardsMatch.length === cardImages.length / 2) {
        outcomeDisplay.textContent = 'Congratulations! You are a Match Master!';
    }
}
//turn cards over 
function turnCard() {
    let cardId = this.getAttribute('data-id');
    cardsPicked.push(cardImages[cardId].name);
    cardsPickedId.push(cardId);
    this.src = cardImages[cardId].img;
    // two cards clicked
    if (cardsPicked.length === 2) {
        let memoryCards = document.querySelectorAll('img');
        // loop through images and disable them (to avoid more than 2 being clicked at a time)
        memoryCards.forEach(card => {
            card.classList.add("disable");
        });
        setTimeout(() => {
            // check for a match or not
            checkForMatch();
            // re-enable the cards to be clickable again
            memoryCards.forEach(card => {
                card.classList.remove("disable");
            });
        }, 900);
    }
}



createBoard();

// TIMER

let amoutOftime;
// Timer starts a 0 seconds
let timePassed = 0;
// Start BTN Code to start timer.
const startBtn = document.querySelector('[data-action="start"]');
// Relays the time to the Timer ´, so that the time will chnage on the timer
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


// Set the maxium amout of time
const start = () => {
    whileRunning = true;
    // setInterval https://www.w3schools.com/jsref/met_win_setinterval.asp
    amoutOftime = setInterval(increaseTimer, 1000);
};

const area = (number) => {
    return (number > 10) ? '0' + number : number;
};
// Time incresses by one second

const increaseTimer = () => {
    timePassed++;
    // https://stackoverflow.com/questions/41896116/javascript-math-floor-time-calculcation
    // Used for Time calculations Minutes ans Seconds
    const numberMinutes = Math.floor(timePassed / 60);
    const numberSeconds = timePassed % 60;
    //inner text https://www.w3schools.com/jsref/prop_node_innertext.asp#:~:text=The%20innerText%20property%20returns%3A,hidden%20text%2C%20but%20without%20tags.
    minutes.innerText = area(numberMinutes);
    seconds.innerText = area(numberSeconds);
};

// Ability to start the  timer
startBtn.addEventListener('click', startTimer = () => {
    start();
});
// End of start timer

// Stop button

// clearinterval https://www.w3schools.com/jsref/met_win_clearinterval.asp
const stop = () => {
    whileRunning = false;
    clearInterval(amoutOftime);
};
const stopBtn = document.querySelector('[data-action="stop"]');

stopBtn.addEventListener('click', stopTimer = () => {
    stop();
});
// End of stop Btn code

// Reset game button
// Bug Must double click for it to work // Bug fixed by removing redundent code. From 3 lines to one line.
const restbtn = document.querySelector('[data-action="reset"]');
// reload page to reset the game https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
restbtn.addEventListener("click", function () {
    location.reload();
});

// End of reset btn