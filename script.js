"use strict";

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }

  // when the player wins the game
  else if (guess === number) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  // when the guess is too high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
});
