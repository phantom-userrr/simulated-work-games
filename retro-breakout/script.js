// DOM Elements
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");

// Constants
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 560;
const boardHeight = 300;

// Initial Directions and Positions
// Random initial direction
function getRandomDirection() {
  const speed = 2.5; // Slightly increased from 2
  return Math.random() < 0.5 ? -speed : speed;
}

let xDirection = getRandomDirection();
let yDirection = getRandomDirection();
// Ensure the ball always starts moving upward
if (yDirection < 0) yDirection = -yDirection;

const userStart = [230, 10];
let currentPosition = [...userStart];
const ballStart = [270, 40];
let ballCurrentPosition = [...ballStart];
let timerId;
let score = 0;

// Block Class
class Block {
  constructor(x, y) {
    this.bottomLeft = [x, y];
    this.bottomRight = [x + blockWidth, y];
    this.topRight = [x + blockWidth, y + blockHeight];
    this.topLeft = [x, y + blockHeight];
  }
}

// Initialize Blocks - Increased to 4 rows
const blocks = [
  ...Array(4).keys(), // 4 rows instead of 3
].flatMap((row) =>
  // Added one more block per row (6 instead of 5)
  [10, 100, 190, 280, 370, 450].map(
    (x, index) => new Block(x, 270 - row * 25), // Slightly adjusted vertical spacing
  ),
);

// Add Blocks to the Grid
function addBlocks() {
  blocks.forEach((block) => {
    const blockElement = document.createElement("div");
    blockElement.classList.add("block");
    blockElement.style.left = `${block.bottomLeft[0]}px`;
    blockElement.style.bottom = `${block.bottomLeft[1]}px`;
    grid.appendChild(blockElement);
  });
}
addBlocks();

// Create and Draw the User Paddle
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);
drawUser();

function drawUser() {
  user.style.left = `${currentPosition[0]}px`;
  user.style.bottom = `${currentPosition[1]}px`;
}

// Create and Draw the Ball
const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();

function drawBall() {
  ball.style.left = `${ballCurrentPosition[0]}px`;
  ball.style.bottom = `${ballCurrentPosition[1]}px`;
}

// Move User Paddle
function moveUser(e) {
  if (e.key === "ArrowLeft" && currentPosition[0] > 0) {
    currentPosition[0] -= 10;
  } else if (
    e.key === "ArrowRight" &&
    currentPosition[0] < boardWidth - blockWidth
  ) {
    currentPosition[0] += 10;
  }
  drawUser();
}
document.addEventListener("keydown", moveUser);

// Move Ball
function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}
// Slightly faster interval (25ms instead of 30ms)
timerId = setInterval(moveBall, 25);

// Check for Collisions
function checkForCollisions() {
  // Block Collisions
  blocks.forEach((block, index) => {
    if (
      ballCurrentPosition[0] > block.bottomLeft[0] &&
      ballCurrentPosition[0] < block.bottomRight[0] &&
      ballCurrentPosition[1] + ballDiameter > block.bottomLeft[1] &&
      ballCurrentPosition[1] < block.topLeft[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[index].classList.remove("block");
      blocks.splice(index, 1);
      changeDirection();
      updateScore();
    }
  });

  // Wall Collisions
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter || // Right Wall
    ballCurrentPosition[0] <= 0 || // Left Wall
    ballCurrentPosition[1] >= boardHeight - ballDiameter // Top Wall
  ) {
    changeDirection();
  }

  // User Paddle Collision
  if (
    ballCurrentPosition[0] > currentPosition[0] &&
    ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
    ballCurrentPosition[1] > currentPosition[1] &&
    ballCurrentPosition[1] < currentPosition[1] + blockHeight
  ) {
    changeDirection();
  }

  // Bottom Collision (Game Over)
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.textContent = "Game Over!";
    document.removeEventListener("keydown", moveUser);
  }
}

// Update Score
function updateScore() {
  score++;
  scoreDisplay.textContent = score;

  if (blocks.length === 0) {
    scoreDisplay.textContent = "You Win!";
    clearInterval(timerId);
    document.removeEventListener("keydown", moveUser);
  }
}

// Change Ball Direction
function changeDirection() {
  if (xDirection === 2.5 && yDirection === 2.5) yDirection = -2.5;
  else if (xDirection === 2.5 && yDirection === -2.5) xDirection = -2.5;
  else if (xDirection === -2.5 && yDirection === -2.5) yDirection = 2.5;
  else if (xDirection === -2.5 && yDirection === 2.5) xDirection = 2.5;
}
