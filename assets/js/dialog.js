/* jshint esversion: 11 */
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
const rulesDialog = document.querySelector("dialog");
const showRules = document.querySelector("dialog + button");
const closeRules = document.querySelector("dialog button");

// "ShowRules the dialog" button opens the dialog modally so the user can read the rules
showRules.addEventListener("click", () => {
    rulesDialog.showModal();
});

// "CloseRules" button closes the dialog
closeRules.addEventListener("click", () => {
    rulesDialog.close();
});