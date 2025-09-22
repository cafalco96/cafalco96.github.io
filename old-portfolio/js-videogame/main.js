const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const playerLives = document.querySelector("#lives");
const playerTime = document.querySelector("#time");
const playerRecord = document.querySelector("#record");
const playerResult = document.querySelector("#result");
const modal = document.querySelector("dialog");
const modalButton = document.querySelector(".modal-button");
const playAgainButton = document.querySelector(".play-again");
let canvasSize;
let elementCanvasSize;
const playerPosition = {
  x: undefined,
  y: undefined,
};
const giftPosition = {
  x: undefined,
  y: undefined,
};
let enemiesPositions = [];
let level = 0;
let lives = 3;
let timeStart;
let timeInterval;
const tolerance = 0.000001;

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
function startGame() {
  game.font = `${elementCanvasSize}px Verdana`;
  game.textAlign = "end";
  const map = maps[level];
  if (!map) {
    gameWin();
    return;
  }
  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 1000);
    showRecord();
  }
  const mapRows = map.trim().split("\n");
  game.clearRect(0, 0, canvasSize, canvasSize);
  enemiesPositions = [];
  const allMap = mapRows.map((col) => col.trim().split(""));
  // for (let x = 1; x <= 10; x++) {
  //   for (let y = 1; y <= 10; y++) {
  //     game.fillText(emojis[allMap[x-1][y-1]], elementCanvasSize *y,elementCanvasSize * x);
  //   }
  // };
  showLives();
  allMap.forEach((row, indexRow) =>
    row.forEach((col, indexCol) => {
      const emoji = emojis[col];
      const posX = elementCanvasSize * (indexCol + 1);
      const posY = elementCanvasSize * (indexRow + 1);
      game.fillText(emoji, posX, posY);
      if (col == "O" && !playerPosition.x && !playerPosition.y) {
        playerPosition.x = posX;
        playerPosition.y = posY;
      }
      if (col == "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
      }
      if (col === "X") {
        enemiesPositions.push({
          x: posX,
          y: posY,
        });
      }
    })
  );
  movePlayer();
}

function movePlayer() {
  const enemyCollition = enemiesPositions.find(enemy =>
    Math.abs(enemy.x - playerPosition.x) < tolerance &&
    Math.abs(enemy.y - playerPosition.y) < tolerance
);

if (Math.abs(playerPosition.x - giftPosition.x) < tolerance &&
    Math.abs(playerPosition.y - giftPosition.y) < tolerance) {
    levelUp();
}
  if (enemyCollition) {
    levelFail();
  }
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}
function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  canvasSize = Number(canvasSize.toFixed(0));
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementCanvasSize = canvasSize / 10;
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}
btnUp.addEventListener("click", upMovement);
btnDown.addEventListener("click", downMovement);
btnLeft.addEventListener("click", leftMovement);
btnRight.addEventListener("click", rightMovement);
window.addEventListener("keydown", moveByKey);
function upMovement() {
  playerPosition.y - elementCanvasSize < elementCanvasSize
    ? playerPosition.y
    : (playerPosition.y -= elementCanvasSize);
  startGame();
}
function downMovement() {
  playerPosition.y + elementCanvasSize > canvasSize
    ? playerPosition.y
    : (playerPosition.y += elementCanvasSize);
  startGame();
}
function leftMovement() {
  playerPosition.x - elementCanvasSize < elementCanvasSize
    ? playerPosition.x
    : (playerPosition.x -= elementCanvasSize);
  startGame();
}
function rightMovement() {
  playerPosition.x + elementCanvasSize > canvasSize
    ? playerPosition.x
    : (playerPosition.x += elementCanvasSize);
  startGame();
}
function moveByKey(e) {
  switch (e.code) {
    case "ArrowUp":
      upMovement();
      break;
    case "ArrowDown":
      downMovement();
      break;
    case "ArrowLeft":
      leftMovement();
      break;
    case "ArrowRight":
      rightMovement();
      break;
  }
}
function levelUp() {
  level++;
  startGame();
}
const recordTime = localStorage.getItem("record_time");
function gameWin() {
  clearInterval(timeInterval);
  const timeToPlay = Date.now() - timeStart;
  if (recordTime) {
    if (recordTime >= timeToPlay) {
      localStorage.setItem("record_time", timeToPlay);
      playerResult.innerText = "You Win !!!";
    } else {
      playerResult.innerText = "Oh, no please try again!!!";
    }
  } else {
    localStorage.setItem("record_time", timeToPlay);
  }
  playAgainButton.classList.add("show");
  playAgainButton.addEventListener("click", () => location.reload());
}

function levelFail() {
  lives--;
  if (lives <= 0) {
    level = 0;
    lives = 3;
    timeStart = undefined;
    showModalFinishPlay();
  } else {
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
  }
}

function showLives() {
  const heartsArray = Array(lives).fill(emojis["HEART"]);
  playerLives.innerHTML = "";
  heartsArray.forEach((heart) => playerLives.append(heart));
}

function showTime() {
  playerTime.innerText = `${Math.floor(
    (Date.now() - timeStart) / 1000
  )} seconds`;
}

function showRecord() {
  playerRecord.innerText = localStorage.getItem("record_time");
}

function showModalFinishPlay() {
  modal.showModal();
  clearInterval(timeInterval);
}

function gameAgain() {
  lives++;
  modal.close();
  startGame();
}
if (showModalFinishPlay) {
  modalButton.addEventListener("click", gameAgain);
}
