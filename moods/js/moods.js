const chooseFeelSection = document.querySelector("#choose-feel");
const restartingSection = document.querySelector("#restarting");
const moodButton = document.querySelector(".mood-button");
const restartingButton = document.querySelector(".restarting-button");
restartingSection.style.display = "none";

const chooseMoodSection = document.querySelector("#choose-mood");
const nameMoodPlayer = document.querySelector(".player-mood");

const nameMoodPc = document.querySelector(".pc-mood");

const htmlVictoryPlayer = document.querySelector(".player-victory");
const htmlVictoryPc = document.querySelector(".pc-victory");

const resultSection = document.querySelector(".result");
const messageFeelPlayer = document.querySelector(".feel-player");
const messageFeelPc = document.querySelector(".feel-pc");
const moodContent = document.getElementById("mood-content");
const feelContent = document.getElementById("feel-content");

let moods = [];
let feelPlayer = [];
let feelPc = [];
let moodOptions;
let inputJoy;
let inputSadness;
let inputFear;
let inputDisgust;
let inputAnger;
let moodPlayer;
let feelMoodPlayer;
let feelMoodPc;
let buttons = [];
let indexFeelPlayer;
let indexFeelPc;
let playerVictorys = 0;
let pcVictorys = 0;

class Mood {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.feels = [];
  }
}

let joy = new Mood("Joy", "./assets/joy.png");

let sadness = new Mood("Sadness", "./assets/sadness.png");

let fear = new Mood("Fear", "./assets/fear.png");

let disgust = new Mood("Disgust", "./assets/disgust.png");

let anger = new Mood("Anger", "./assets/anger.png");

joy.feels.push(
  { name: "đ", id: "boton-agua" },
  { name: "đ", id: "boton-agua" },
  { name: "đ¤Ŗ", id: "boton-fuego" },
  { name: "đ", id: "boton-tierra" }
);

sadness.feels.push(
  { name: "đĨ˛", id: "boton-tierra" },
  { name: "đ", id: "boton-tierra" },
  { name: "âšī¸", id: "boton-agua" },
  { name: "đĨ", id: "boton-fuego" }
);

fear.feels.push(
  { name: "đŽ", id: "boton-fuego" },
  { name: "đ¨", id: "boton-fuego" },
  { name: "đ°", id: "boton-fuego" }
);

disgust.feels.push(
  { name: "đ¤§", id: "boton-fuego" },
  { name: "đ¤ĸ", id: "boton-fuego" },
  { name: "đ¤Ž", id: "boton-fuego" }
);

anger.feels.push(
  { name: "đ ", id: "boton-fuego" },
  { name: "đ¤", id: "boton-fuego" },
  { name: "đĄ", id: "boton-fuego" },
  { name: "đ¤Ŧ", id: "boton-agua" }
);

moods.push(joy, sadness, fear, disgust, anger);

function startGame() {
  chooseFeelSection.style.display = "none";

  moods.forEach((mood) => {
    moodOptions = `
        <input type="radio" name="mascota" id=${mood.name} />
        <label class="cards-moods_mood" for=${mood.name}>
            <p>${mood.name}</p>
            <img src=${mood.image} alt=${mood.name}>
        </label>
        `;
    moodContent.innerHTML += moodOptions;

    inputJoy = document.getElementById("Joy");
    inputSadness = document.getElementById("Sadness");
    inputFear = document.getElementById("Fear");
    inputDisgust = document.getElementById("Disgust");
    inputAnger = document.getElementById("Anger");
  });

  moodButton.addEventListener("click", chooseMoodPlayer);

  restartingButton.addEventListener("click", restartGame);
}

function chooseMoodPlayer() {
  chooseMoodSection.style.display = "none";

  chooseFeelSection.style.display = "flex";

  if (inputJoy.checked) {
    nameMoodPlayer.innerHTML = inputJoy.id;
    moodPlayer = inputJoy.id;
  } else if (inputSadness.checked) {
    nameMoodPlayer.innerHTML = inputSadness.id;
    moodPlayer = inputSadness.id;
  } else if (inputFear.checked) {
    nameMoodPlayer.innerHTML = inputFear.id;
    moodPlayer = inputFear.id;
  } else if (inputDisgust.checked) {
    nameMoodPlayer.innerHTML = inputDisgust.id;
    moodPlayer = inputDisgust.id;
  } else if (inputAnger.checked) {
    nameMoodPlayer.innerHTML = inputAnger.id;
    moodPlayer = inputAnger.id;
  } else {
    alert("Please choose a mood");
    return restartGame();
  }

  extractFeels(moodPlayer);
  chooseMoodPc();
}

function extractFeels(moodPlayer) {
  let feels;
  for (let i = 0; i < moods.length; i++) {
    if (moodPlayer === moods[i].name) {
      feels = moods[i].feels;
    }
  }
  showFeels(feels);
}

function showFeels(feels) {
  feels.forEach((feel) => {
    feelMoodPlayer = `
        <button id=${feel.id} class="feel-buttons feel-buttons_button">${feel.name}</button>
        `;
    feelContent.innerHTML += feelMoodPlayer;
  });

  buttons = document.querySelectorAll(".feel-buttons_button");
}

function orderFight() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.textContent === "đ") {
        feelPlayer.push("Happy");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ") {
        feelPlayer.push("Very Happy");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ¤Ŗ") {
        feelPlayer.push("Too Much Happy");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ") {
        feelPlayer.push("Exited");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đĨ˛") {
        feelPlayer.push("Sad");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ") {
        feelPlayer.push("Very Sad");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "âšī¸") {
        feelPlayer.push("Too Much Sad");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đĨ") {
        feelPlayer.push("Depressing");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đŽ") {
        feelPlayer.push("Afraid");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ¨") {
        feelPlayer.push("Very Afraid");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ°") {
        feelPlayer.push("Awestruck");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ¤§") {
        feelPlayer.push("Disgusted");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ¤ĸ") {
        feelPlayer.push("Very Disgusted");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ¤Ž") {
        feelPlayer.push("Grossed Out");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ ") {
        feelPlayer.push("Angry");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đ¤") {
        feelPlayer.push("Very Angry");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else if (e.target.textContent === "đĄ") {
        feelPlayer.push("Too Much Angry");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      } else {
        feelPlayer.push("Upset");
        console.log(feelPlayer);
        button.style.background = "#112f58";
        button.disabled = true;
      }
      randomFeelsPc();
    });
  });
}

function chooseMoodPc() {
  let mascotaAleatoria = randomOpction(0, moods.length - 1);

  nameMoodPc.innerHTML = moods[mascotaAleatoria].name;
  feelMoodPc = moods[mascotaAleatoria].feels;
  orderFight();
}

function randomFeelsPc() {
  let ataqueAleatorio = randomOpction(0, feelMoodPc.length - 1);
  if (feelMoodPc[ataqueAleatorio].name === "đ") {
    feelPc.push("Happy");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ") {
    feelPc.push("Very Happy");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ¤Ŗ") {
    feelPc.push("Too Much Happy");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ") {
    feelPc.push("Exited");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đĨ˛") {
    feelPc.push("Sad");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ") {
    feelPc.push("Very Sad");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "âšī¸") {
    feelPc.push("Too Much Sad");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đĨ") {
    feelPc.push("Depressing");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đŽ") {
    feelPc.push("Afraid");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ¨") {
    feelPc.push("Very Afraid");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ°") {
    feelPc.push("Awestruck");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ¤§") {
    feelPc.push("Disgusted");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ¤ĸ") {
    feelPc.push("Very Disgusted");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ¤Ž") {
    feelPc.push("Grossed Out");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ ") {
    feelPc.push("Angry");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đ¤") {
    feelPc.push("Very Angry");
    console.log(feelPc);
  } else if (feelMoodPc[ataqueAleatorio].name === "đĄ") {
    feelPc.push("Too Much Angry");
    console.log(feelPc);
  } else {
    feelPc.push("Upset");
    console.log(feelPc);
  }

  startFight();
}

function startFight() {
  if (feelPlayer.length === 3) {
    fight();
  }
}

function indexOponents(player, pc) {
  indexFeelPlayer = feelPlayer[player];
  indexFeelPc = feelPc[pc];
}

function fight() {
  for (let index = 0; index < feelPlayer.length; index++) {
    if (feelPlayer[index] === feelPc[index]) {
      indexOponents(index, index);
      messagesFight();
    } else if (
      (feelPlayer[index] === "Exited" && feelPc[index] === "Very Happy") ||
      feelPc[index] === "Too Much Happy" ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Very Sad" ||
      feelPc[index] === "Too Much Sad" ||
      feelPc[index] === "Afraid" ||
      feelPc[index] === "Very Afraid" ||
      feelPc[index] === "Awestruck" ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Very Disgusted" ||
      feelPc[index] === "Grossed Out" ||
      feelPc[index] === "Angry" ||
      feelPc[index] === "Upset"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Too Much Happy" && feelPc[index] === "Sad") ||
      feelPc[index] === "Very Sad" ||
      feelPc[index] === "Upset" ||
      feelPc[index] === "Afraid" ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Very Disgusted" ||
      feelPc[index] === "Angry"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Very Happy" && feelPc[index] === "Sad") ||
      feelPc[index] === "Afraid" ||
      feelPc[index] === "Disgusted"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Happy" && feelPc[index] === "Sad") ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Angry" ||
      feelPc[index] === "Disgusted"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Sad" && feelPc[index] === "Afraid") ||
      feelPc[index] === "Very Afraid" ||
      feelPc[index] === "Angry"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Very Sad" && feelPc[index] === "Afraid") ||
      feelPc[index] === "Very Afraid" ||
      feelPc[index] === "Angry" ||
      feelPc[index] === "Disgusted"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Too Much Sad" && feelPc[index] === "Afraid") ||
      feelPc[index] === "Very Afraid" ||
      feelPc[index] === "Angry" ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Very Sad" ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Very Happy"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Depressing" && feelPc[index] === "Afraid") ||
      feelPc[index] === "Very Afraid" ||
      feelPc[index] === "Angry" ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Very Sad" ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Very Happy" ||
      feelPc[index] === "Too Much Happy" ||
      feelPc[index] === "Too Much Sad" ||
      feelPc[index] === "Awestruck" ||
      feelPc[index] === "Very Disgusted" ||
      feelPc[index] === "Grossed Out"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Afraid" && feelPc[index] === "Angry") ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Very Sad" ||
      feelPc[index] === "Happy"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Very Afraid" && feelPc[index] === "Angry") ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Very Sad" ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Afraid"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Awestruck" && feelPc[index] === "Angry") ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Very Sad" ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Afraid" ||
      feelPc[index] === "Very Afraid"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Disgusted" && feelPc[index] === "Angry") ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Sad"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Very Disgusted" && feelPc[index] === "Angry") ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Disgusted"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else if (
      (feelPlayer[index] === "Grossed Out" && feelPc[index] === "Angry") ||
      feelPc[index] === "Happy" ||
      feelPc[index] === "Sad" ||
      feelPc[index] === "Disgusted" ||
      feelPc[index] === "Very Disgusted"
    ) {
      indexOponents(index, index);
      messagesFight();
      playerVictorys++;
      htmlVictoryPlayer.innerHTML = playerVictorys;
    } else {
      indexOponents(index, index);
      messagesFight();
      pcVictorys++;
      htmlVictoryPc.innerHTML = pcVictorys;
    }
  }

  reviewVictorys();
}

function reviewVictorys() {
  if (playerVictorys === pcVictorys) {
    finalMessage("similar emotions đ");
  } else if (playerVictorys > pcVictorys) {
    finalMessage("Your emotions are strong !!!!! Congratulations đ¤");
  } else {
    finalMessage("Sorry, your emotions are weak đ");
  }
}

function messagesFight() {
  let newFeelPlayer = document.createElement("p");
  let newFeelPc = document.createElement("p");

  newFeelPlayer.innerHTML = indexFeelPlayer;
  newFeelPc.innerHTML = indexFeelPc;

  messageFeelPlayer.appendChild(newFeelPlayer);
  messageFeelPc.appendChild(newFeelPc);
}

function finalMessage(resultFight) {
  resultSection.innerHTML = resultFight;

  restartingSection.style.display = "block";
}

function restartGame() {
  location.reload();
}

function randomOpction(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);
