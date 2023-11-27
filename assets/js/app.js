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
const setupGuideOptionsEL = document.querySelector(".setup-guide-options");

const setupGuideTextsEL = document.querySelectorAll(".setup-guide-texts");
const toggleTextsEL = document.querySelectorAll(".toggle-text");
const guideCardsEL = document.querySelectorAll(".guide_card");
const guideImagesEL = document.querySelectorAll(".guide-image");

// Destructuring the setup guide text array.
const [
  guideTextOne,
  guideTextTwo,
  guideTextThree,
  guideTextFour,
  guideTextFive,
] = setupGuideTextsEL;

// Destructuring the toggle text array.
const [
  toggleTextOne,
  toggleTextTwo,
  toggleTextThree,
  toggleTextFour,
  toggleTextFive,
] = toggleTextsEL;

// Destructuring the guide card array.
const [
  guideCardOne,
  guideCardTwo,
  guideCardThree,
  guideCardFour,
  guideCardFive,
] = guideCardsEL;

// Destructuring the guide images array.
const [
  guideImageOne,
  guideImageTwo,
  guideImageThree,
  guideImageFour,
  guideImageFive,
] = guideImagesEL;

// Select and checked Elements
const selectBtnsEL = document.querySelectorAll(".select-icon");
const checkedBtnsEL = document.querySelectorAll(".select-checked-icon");
const [selectOne, selectTwo, selectThree, selectFour, selectFive] =
  selectBtnsEL;
const [checkOne, checkTwo, checkThree, checkFour, checkFive] = checkedBtnsEL;
// console.log(check);

// Select and checked functionality
selectOne.addEventListener("click", function () {
  selectOne.classList.add("hidden");
  checkOne.style.display = "block";

  openGuideTwo();
});
selectTwo.addEventListener("click", function () {
  selectTwo.classList.add("hidden");
  checkTwo.style.display = "block";

  openGuideThree();
});
selectThree.addEventListener("click", function () {
  selectThree.classList.add("hidden");
  checkThree.style.display = "block";

  openGuideFour();
});

selectFour.addEventListener("click", function () {
  selectFour.classList.add("hidden");
  checkFour.style.display = "block";

  openGuideFive();
});

selectFive.addEventListener("click", function () {
  selectFive.classList.add("hidden");
  checkFive.style.display = "block";

  toggleTextFive.classList.add("hidden");
});

// for (const box of selectBtnsEL) {
//   box.addEventListener("click", function () {
//     box.classList.add("hidden");
//     checkOne.style.display = "block";
//   });
// }

/* RE-USABLE FUNCTIONS */
const openGuideOne = function () {
  const elements = [
    {
      toggleText: toggleTextOne,
      guideCard: guideCardOne,
      guideImage: guideImageOne,
    },
    {
      toggleText: toggleTextTwo,
      guideCard: guideCardTwo,
      guideImage: guideImageTwo,
    },
    {
      toggleText: toggleTextThree,
      guideCard: guideCardThree,
      guideImage: guideImageThree,
    },
    {
      toggleText: toggleTextFour,
      guideCard: guideCardFour,
      guideImage: guideImageFour,
    },
    {
      toggleText: toggleTextFive,
      guideCard: guideCardFive,
      guideImage: guideImageFive,
    },
  ];
  for (const element of elements) {
    element.toggleText.classList.add("hidden");
    element.guideCard.classList.remove("background-color");
    element.guideImage.classList.add("hidden");
  }
  elements[0].toggleText.classList.remove("hidden");
  elements[0].guideCard.classList.add("background-color");
  elements[0].guideImage.classList.remove("hidden");
};

const openGuideTwo = function () {
  const elements = [
    {
      toggleText: toggleTextTwo,
      guideCard: guideCardTwo,
      guideImage: guideImageTwo,
    },
    {
      toggleText: toggleTextOne,
      guideCard: guideCardOne,
      guideImage: guideImageOne,
    },
    {
      toggleText: toggleTextThree,
      guideCard: guideCardThree,
      guideImage: guideImageThree,
    },
    {
      toggleText: toggleTextFour,
      guideCard: guideCardFour,
      guideImage: guideImageFour,
    },
    {
      toggleText: toggleTextFive,
      guideCard: guideCardFive,
      guideImage: guideImageFive,
    },
  ];

  elements.forEach((element) => {
    element.toggleText.classList.add("hidden");
    element.guideCard.classList.remove("background-color");
    element.guideImage.classList.add("hidden");
  });

  elements[0].toggleText.classList.remove("hidden");
  elements[0].guideCard.classList.add("background-color");
  elements[0].guideImage.classList.remove("hidden");
};

const openGuideThree = function () {
  const elements = [
    {
      toggleText: toggleTextThree,
      guideCard: guideCardThree,
      guideImage: guideImageThree,
    },
    {
      toggleText: toggleTextOne,
      guideCard: guideCardOne,
      guideImage: guideImageOne,
    },
    {
      toggleText: toggleTextTwo,
      guideCard: guideCardTwo,
      guideImage: guideImageTwo,
    },
    {
      toggleText: toggleTextFour,
      guideCard: guideCardFour,
      guideImage: guideImageFour,
    },
    {
      toggleText: toggleTextFive,
      guideCard: guideCardFive,
      guideImage: guideImageFive,
    },
  ];

  elements.forEach((element) => {
    element.toggleText.classList.add("hidden");
    element.guideCard.classList.remove("background-color");
    element.guideImage.classList.add("hidden");
  });

  elements[0].toggleText.classList.remove("hidden");
  elements[0].guideCard.classList.add("background-color");
  elements[0].guideImage.classList.remove("hidden");
};

const openGuideFour = function () {
  const elements = [
    {
      toggleText: toggleTextFour,
      guideCard: guideCardFour,
      guideImage: guideImageFour,
    },
    {
      toggleText: toggleTextOne,
      guideCard: guideCardOne,
      guideImage: guideImageOne,
    },
    {
      toggleText: toggleTextTwo,
      guideCard: guideCardTwo,
      guideImage: guideImageTwo,
    },
    {
      toggleText: toggleTextThree,
      guideCard: guideCardThree,
      guideImage: guideImageThree,
    },
    {
      toggleText: toggleTextFive,
      guideCard: guideCardFive,
      guideImage: guideImageFive,
    },
  ];

  elements.forEach((element) => {
    element.toggleText.classList.add("hidden");
    element.guideCard.classList.remove("background-color");
    element.guideImage.classList.add("hidden");
  });

  elements[0].toggleText.classList.remove("hidden");
  elements[0].guideCard.classList.add("background-color");
  elements[0].guideImage.classList.remove("hidden");
};

const openGuideFive = function () {
  const elements = [
    {
      toggleText: toggleTextFive,
      guideCard: guideCardFive,
      guideImage: guideImageFive,
    },
    {
      toggleText: toggleTextOne,
      guideCard: guideCardOne,
      guideImage: guideImageOne,
    },
    {
      toggleText: toggleTextTwo,
      guideCard: guideCardTwo,
      guideImage: guideImageTwo,
    },
    {
      toggleText: toggleTextThree,
      guideCard: guideCardThree,
      guideImage: guideImageThree,
    },
    {
      toggleText: toggleTextFour,
      guideCard: guideCardFour,
      guideImage: guideImageFour,
    },
  ];

  elements.forEach((element) => {
    element.toggleText.classList.add("hidden");
    element.guideCard.classList.remove("background-color");
    element.guideImage.classList.add("hidden");
  });

  elements[0].toggleText.classList.remove("hidden");
  elements[0].guideCard.classList.add("background-color");
  elements[0].guideImage.classList.remove("hidden");
};
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

//Setup guide toggling functionality
guideTextOne.addEventListener("click", openGuideOne);

// Guide two
guideTextTwo.addEventListener("click", openGuideTwo);

// Guide three
guideTextThree.addEventListener("click", openGuideThree);

// Guide four
guideTextFour.addEventListener("click", openGuideFour);

// Guide five
guideTextFive.addEventListener("click", openGuideFive);

const checkboxesEL = document.querySelectorAll(".checkbox-input");
const setupGuideChecksEL = document.querySelectorAll(".setup-guide-check");
const btnChecksEL = document.querySelectorAll(".check-btn");

// Progress bar elements
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector(".progress-number");

// Progress bar functionality
let progress = 0;

checkboxesEL.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    progress++;
    progressBar.value = progress;
    progressText.textContent = progress;
  });
});
