"use strict";
// Selecting elements and storing them into variables
// Notification elements
const notificationEL = document.querySelector(".notifications");
const notificationDropdownEL = document.querySelector(".notification-dropdown");

// My store elements
const myStoreEL = document.querySelector(".my_store");
const myStoreDropdownEL = document.querySelector(".my_store_dropdown");

// Plan selection elements
const closePlanSelectionEL = document.querySelector(".btn-close-plan");
const planSelectionEL = document.querySelector(".plan-selection");

// Setup guide elements
const arrowUpEL = document.querySelector(".arrow-up");
const arrowDownEL = document.querySelector(".arrow-down");

const setupGuideTextsEL = document.querySelectorAll(".setup-guide-texts");
const toggleTextsEL = document.querySelectorAll(".toggle-text");

const [
  toggleTextOne,
  toggleTextTwo,
  toggleTextThree,
  toggleTextFour,
  toggleTextFive,
] = toggleTextsEL;
const [
  guideTextOne,
  guideTextTwo,
  guideTextThree,
  guideTextFour,
  guideTextFive,
] = setupGuideTextsEL; // Destructuring the setup guide text array.
// console.log(guideTextFive);

const guideCardOne = document.querySelector(".guide-one");
const guideCardTwo = document.querySelector(".guide-two");

//Setup guide toggling functionality
guideTextOne.addEventListener("click", function () {
  toggleTextOne.classList.remove("hidden");
  guideCardOne.classList.add("background-color");

  toggleTextTwo.classList.add("hidden");
  guideCardTwo.classList.remove("background-color");
});

// Guide two
guideTextTwo.addEventListener("click", function () {
  toggleTextOne.classList.add("hidden");
  guideCardOne.classList.remove("background-color");
  toggleTextTwo.classList.remove("hidden");
  guideCardTwo.classList.add("background-color");
});
// Progress bar elements
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector(".progress-text");

// Progress bar functionality
let progress = 0;

/* FUNCTIONALITY */

// Notification dropdown functionality
notificationEL.addEventListener("click", function () {
  notificationDropdownEL.classList.toggle("hidden");
});

// My store dropdown functionality
myStoreEL.addEventListener("click", function () {
  myStoreDropdownEL.classList.toggle("hidden");
});

// Close plan selection funcionality
closePlanSelectionEL.addEventListener("click", function () {
  planSelectionEL.classList.add("hidden");
});

// Setup guide functionality
arrowUpEL.addEventListener("click", function () {
  setupGuideOptionsEL.classList.add("hidden");
  arrowUpEL.classList.add("visibility_hidden");
  arrowDownEL.classList.remove("visibility_hidden");
});
arrowDownEL.addEventListener("click", function () {
  setupGuideOptionsEL.classList.remove("hidden");
  arrowDownEL.classList.add("visibility_hidden");
  arrowUpEL.classList.remove("visibility_hidden");
});
