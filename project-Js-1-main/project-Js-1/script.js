"use strict";

const scoreElem0 = document.getElementById("score--0");
const scoreElem1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const currentPlayer0 = document.getElementById(".current--0");
const currentPlayer1 = document.getElementById(".current--1");
const btnStart = document.querySelector(".btn--roll");
const btnStop = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const playerGamer0 = document.querySelector(".player--0");
const playerGamer1 = document.querySelector(".player--1");
const click = new Audio("../click.mp3");
const lose = new Audio("../los.mp3");
const win = new Audio("../win.mp3");

scoreElem0.textContent = 0;
scoreElem1.textContent = 0;
dice.classList.add("hidden");

let scoreAllPlayer = 0;
let allPlayers = 0;
let arrGame = [0, 0];
let bolLogick = true;

const gameLogick = function () {
  scoreAllPlayer = 0;
  document.getElementById(`current--${allPlayers}`).textContent =
    scoreAllPlayer;
  allPlayers = allPlayers === 0 ? 1 : 0;
  playerGamer0.classList.toggle("player--active");
  playerGamer1.classList.toggle("player--active");
};

btnStart.addEventListener("click", function () {
  click.play();
  if (bolLogick) {
    const randomNumberDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice${randomNumberDice}.png`;

    if (randomNumberDice !== 1) {
      scoreAllPlayer += randomNumberDice;
      document.getElementById(`current--${allPlayers}`).textContent =
        scoreAllPlayer;
    } else {
      gameLogick();
      lose.play();
    }
  }
});

btnStop.addEventListener("click", function () {
  click.play();
  if (bolLogick) {
    arrGame[allPlayers] += scoreAllPlayer;
    document.getElementById(`score--${allPlayers}`).textContent =
      arrGame[allPlayers];

    if (arrGame[allPlayers] >= 80) {
      bolLogick = false;
      document
        .querySelector(`.player--${allPlayers}`)
        .classList.add("player--winner");

      document
        .querySelector(`.span-win--${allPlayers}`)
        .classList.remove("hidden");
      btnNew.classList.add("l1");
      win.play();
      dice.classList.add("hidden");
    } else {
      gameLogick();
      lose.play();
    }
  }
});

btnNew.addEventListener("click", function () {
  location.reload();
});
