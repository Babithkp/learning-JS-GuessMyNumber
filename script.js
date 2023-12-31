"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "correct Number! ";

// document.querySelector(".score").textContent = 13;
// document.querySelector(".number").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct answer!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;

      // } else if (guess < secretNumber) {
      //     document.querySelector(".message").textContent = "Too Low!";
      //     score--;
      //         document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You lost!";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
