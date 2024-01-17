# Testing

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fprimarypigments.github.io%2Fmemory-game%2Findex.html) | ![screenshot](documentation/validation/html-home.png) | Pass: No Errors |
| Game Screen | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fprimarypigments.github.io%2Fmemory-game%2Fgamescreen.html) | ![screenshot](documentation/validation/html-gamescreen.png) | Pass: No Errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fprimarypigments.github.io%2Fmemory-game) | ![screenshot](documentation/validation/css-index.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| app.js | ![screenshot](documentation/validation/jshint-app.js.png) | 189 Expected an assignment or function call and instead saw an expression.|
| dialog.js | ![screenshot](documentation/validation/jshint-dialog.js.png) | Pass: No Errors |
| foods.js | ![screenshot](documentation/validation/jshint-foods.js.png) | Pass: No Errors |
| dogs.js | ![screenshot](documentation/validation/jshint-dogs.js.png) | Pass: No Errors |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | About | Notes |
| --- | --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browsers/chrome-home.png) | ![screenshot](documentation/browsers/chrome-gamescreen.png) |  | Works as expected |
| Firefox | ![screenshot](documentation/browsers/firefox-home.png) | ![screenshot](documentation/browsers/firefox-gamescreen.png) |  | Works as expected |
| Edge | ![screenshot](documentation/browsers/chrome-home.png) | ![screenshot](documentation/browsers/edge-gamescreen.png) |  | Works as expected |
| Safari | ![screenshot](documentation/browsers/safari-home.png) | ![screenshot](documentation/browsers/safari-gamescreen.png) |  | Minor CSS differences |
| Brave | ![screenshot](documentation/browsers/brave-home.png) | ![screenshot](documentation/browsers/brave-gamescreen.png) |  | Works as expected |
| Opera | ![screenshot](documentation/browsers/opera-home.png) | ![screenshot](documentation/browsers/opera-gamescreen.png) |  | Minor differences |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | Gamescreen | Notes |
| --- | --- | --- | --- |
| iPad Pro | ![screenshot](documentation/responsive/responsive-home-ipad-pro.png) | ![screenshot](documentation/responsive/responsive-gamescreen-ipad-pro.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsive/responsive-home-desktop.png) | ![screenshot](documentation/responsive/responsive-gamescreen-desktop.png) | Works as expected |
| iPhone 15 Pro Max | ![screenshot](documentation/responsive/responsive-home-iphone-15-pro-max.png) | ![screenshot](documentation/responsive/responsive-gamescreen-iphone-15-pro-max.png) | Works as expected |
| iPhone SE (DevTools) | ![screenshot](documentation/responsive/responsive-home-iphone-se.png) | ![screenshot](documentation/responsive/responsive-gamescreen-iphone-se.png) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/validation/lighthouse-index.png) | ![screenshot](documentation/validation/lighthouse-index-desktop.png) | Some minor warnings |
| Game Screen | ![screenshot](documentation/validation/lighthouse-gamescreen.png) | ![screenshot](documentation/validation/lighthouse-gamescreen-desktop.png) | Some minor warnings |

## Bugs

- JS Dialog missprinting correct time format

    ![screenshot](documentation/bugs/dialog-bug-missprint-time-working-code.png)

    - To fix this, I concatenated the string on the line before I show the modal.
    - I used use the '+' operator for string concatenation instead of the commas. Then I assign it to a variable, and then set the innerText on the element to that variable.

- JS After making a match, the matched card are not disabled.

    ![screenshot](documentation/bugs/card-match-not-disabled-after-match-code.png)

    - To fix this, I used onclick in my initial code, then i learned that onclick is not reliable in JS and can cause errors or unwanted behavior, so i switched "onclick" to "click" and the game started to work properly.

- JS After pressing stop button cards are not disabled

    ![screenshot](documentation/bugs/card-not-disabled-stop-code-2-solution.png)

    - To fix this, I first tried to create an if statement and disable the cards once the start button was pressed. I found this to cause a series of problems that I didn't find a solution to. Then i tried to simplify this by disabling the board. I called the board class
 in the “eventlistener” for the stop button and added a disabled class to the board and then in “eventlistener” for the start button I removed disable.

- JS More than 2 cards can be clicked

    ![screenshot](documentation/bugs/more-than-2-cards-clicked-code.png)

    - To fix this, I created a loop through images and disabled them (to avoid more than 2 being clicked at a time). After this I added a delay to reactivate the cards.

- JS Card Matched are clickable after clicking the stop button and then clicking the start button.

    ![screenshot](documentation/bugs/Cards-reset-after-stopbuton.png)

    - To fix this, I added a classlist "matched" to the cards are were matched. I added a if statement to call for the cards that are matches then only remove "disabled" class if not already "matched".

## Unfixed Bugs

There are no remaining bugs that I am aware of.
