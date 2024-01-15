/* jshint esversion: 11 */

// Array for card images

// After i changed the image sizes, the image size is not correct..
// Fix was to make the images more responive in CSS.
// How to target the page URL parameters https://stackoverflow.com/questions/979975/get-the-values-from-the-get-parameters-javascript/979995#979995
let cardImages = [];
let url = new URL(window.location);
let gameCategory = url.searchParams.get("game");
if (gameCategory == "foods") {
    cardImages = foods;
} else if (gameCategory == "dogs") {
    cardImages = dogs;
}


//shuffle code https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
cardImages.sort(() => Math.random() - 0.5);
// Memory game base code https://www.youtube.com/watch?v=ec8vSKJuZTk
let board = document.querySelector('.board');
// Dialog https://www.youtube.com/watch?v=ywtkJkxJsdg
const closeBtn = document.querySelector("[data-close-complete]");
const dataScreen = document.querySelector("[data-screen]");
// End Dialog 
let cardsPicked = [];
let cardsPickedId = [];
let cardsMatch = [];

//creating board for game
function createBoard() {

    for (let i = 0; i < cardImages.length; i++) {
        const memoryCards = document.createElement('img');
        memoryCards.setAttribute('src', 'assets/images/blank.jpg');
        memoryCards.setAttribute('data-id', i);
        // Move the event listener to carEventlistener to prevent the user to be able to click the cards before pushing the start bitton,
        memoryCards.classList.add("card");
        // memoryCards.addEventListener('click', turnCard);
        board.appendChild(memoryCards);
    }
}
// Loop call the fucktion to enable to turn card over, this is called at the start button on the timer
function cardEventListener() {
    let cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', turnCard);
    }
}

//Build for checking for matches
function checkForMatch() {
    const memoryCards = document.querySelectorAll('img');
    let cardOneId = cardsPickedId[0];
    let cardTwoId = cardsPickedId[1];
    // Code here is pervent when the same card is clicked twice by diableing the clicked card.

    if (cardOneId == cardTwoId) {
        memoryCards[cardOneId].setAttribute('src', 'assets/images/blank.jpg');
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/blank.jpg');
        memoryCards.forEach(card => {
            card.classList.remove("disable");
        });
    }
    // end of disabling code
    else if (cardsPicked[0] === cardsPicked[1]) {


        memoryCards[cardOneId].setAttribute('src', 'assets/images/white.jpg');
        memoryCards[cardOneId].classList.add("disable");
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/white.jpg');
        memoryCards[cardTwoId].classList.add("disable");
        memoryCards[cardOneId].removeEventListener('click', turnCard);
        memoryCards[cardTwoId].removeEventListener('click', turnCard);
        cardsMatch.push(cardsPicked);
    } else {
        memoryCards[cardOneId].setAttribute('src', 'assets/images/blank.jpg');
        memoryCards[cardTwoId].setAttribute('src', 'assets/images/blank.jpg');

    }
    cardsPicked = [];
    cardsPickedId = [];
    if (cardsMatch.length === cardImages.length / 2) {

        // Dialog Code
        // Help Joohn

        {
            clearInterval(amoutOftime);
        }
        let numberMinutes = Math.floor(timePassed / 60);
        let numberSeconds = timePassed % 60;
        var timeRan = (area(numberMinutes) + ":" + area(numberSeconds));
        dataScreen.showModal(document.getElementById("total-time").innerText = timeRan);


        closeBtn.addEventListener("click", function () {
            clearInterval(amoutOftime);
            location.reload(); () => {


                dataScreen.close();
            };
        });
        // End Dialog Code
    }
}
//turn cards over 
function turnCard() {
    let cardId = this.getAttribute('data-id');
    cardsPicked.push(cardImages[cardId].name);
    cardsPickedId.push(cardId);
    this.src = cardImages[cardId].img;
    this.alt = cardImages[cardId].name;
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
let startBtn = document.querySelector('[data-action="start"]');

// Relays the time to the Timer ´, so that the time will chnage on the timer
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let whileRunning = ("");



// starts the timer and stop the setinterval being called multiple times
const start = () => {
    whileRunning = (true);
    // setInterval https://www.w3schools.com/jsref/met_win_setinterval.asp
    amoutOftime = setInterval(increaseTimer, 1000);
    document.querySelector("#clicks").disabled = true;
    //Calling the fucktion so the cards are able to be fliped- 
    cardEventListener();
};

// Bug fix  (timer not diplaying correctly. Changed > to <)
const area = (number) => {
    return (number < 10) ? '0' + number : number;
};
// Time incresses by one second

const increaseTimer = () => {
    timePassed++;
    // https://stackoverflow.com/questions/41896116/javascript-math-floor-time-calculcation
    // Used for Time calculations Minutes ans Seconds
    let numberMinutes = Math.floor(timePassed / 60);
    let numberSeconds = timePassed % 60;
    //inner text https://www.w3schools.com/jsref/prop_node_innertext.asp#:~:text=The%20innerText%20property%20returns%3A,hidden%20text%2C%20but%20without%20tags.
    minutes.innerText = area(numberMinutes);
    seconds.innerText = area(numberSeconds);
};

// Ability to start the  timer
startBtn.addEventListener('click', () => {
    //Bug fix after pressing stop button cards were still clikcable
    start(board.classList.remove("disable"));
});
// End of start timer

// Stop button

// clearinterval https://www.w3schools.com/jsref/met_win_clearinterval.asp
const stop = () => {
    whileRunning = (false);
    clearInterval(amoutOftime);
    document.querySelector("#clicks").disabled = false;
};
const stopBtn = document.querySelector('[data-action="stop"]');
stopBtn.addEventListener('click', () => {
    //Bug fix after pressing stop button cards were still clikcable
    stop(board.classList.add("disable"));
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