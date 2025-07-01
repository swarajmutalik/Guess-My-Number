"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage("No Number!");
  }

  // when the player wins the game
  else if (guess === number) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (highscore > score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start Guessing...");
  document.querySelector(".number") = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
});
