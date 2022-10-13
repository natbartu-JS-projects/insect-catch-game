const screens = document.querySelectorAll(".screen");
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn");
const startBtn = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
const gameContainer = document.getElementById("game-container");

let seconds = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener("click", () => screens[0].classList.add("up"));
