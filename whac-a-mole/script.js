const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

let result = 0;
let hitPosition = null;
let currentTime = 23;
let timerId = null;
let countDownTimerId = null;
let lastPosition = null;

function randomSquare() {
  squares.forEach((square) => square.classList.remove("mole"));

  let randomPosition;
  do {
    randomPosition = Math.floor(Math.random() * squares.length);
  } while (randomPosition === lastPosition);

  const randomSquare = squares[randomPosition];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
  lastPosition = randomPosition;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  clearInterval(timerId);
  timerId = setInterval(randomSquare, 500);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is " + result);
  }
}

function startGame() {
  clearInterval(timerId);
  clearInterval(countDownTimerId);

  result = 0;
  score.textContent = result;
  currentTime = 23;
  timeLeft.textContent = currentTime;
  lastPosition = null;

  moveMole();
  countDownTimerId = setInterval(countDown, 1000);
}

startButton.addEventListener("click", startGame);
