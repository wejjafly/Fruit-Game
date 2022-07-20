const easy = document.getElementById("startGame");
const expert = document.getElementById("exper");
const divInfo = document.getElementById("infoBox");
const paragraph = document.createElement("p");
const time = document.getElementById("time");
const emojiBox = document.createElement("div");
const popup = document.getElementById("popupbox");
let score = 0;
const fruitEmoji = document.createElement("h3");
let currentFruit;
const board = document.getElementById("root");
const resetEasy = document.createElement("button");
const resetExpert = document.createElement("button");

const fruits = [
  {
    emoji: "🍏",
    onClick() {
      return (score += 1);
    },
  },
  {
    emoji: "🍎",
    onClick() {
      return (score += 2);
    },
  },
  {
    emoji: "🍐",
    onClick() {
      return (score += 1);
    },
  },
  {
    emoji: "🍊",
    onClick() {
      return (score += 2);
    },
  },
  {
    emoji: "🍌",
    onClick() {
      return (score += 1);
    },
  },
  {
    emoji: "🍉",
    onClick() {
      return (score += 2);
    },
  },
  {
    emoji: "🍑",
    onClick() {
      return (score += 1);
    },
  },
  {
    emoji: "🍒",
    onClick() {
      return (score += 2);
    },
  },
  {
    emoji: "🍇",
    onClick() {
      return (score += 2);
    },
  },
  {
    emoji: "💣",
    onClick() {
      return (score -= 1);
    },
  },
];

const setFruit = () => {
  emojiBox.className = "fruits";
  emojiBox.textContent = ` ${currentFruit.emoji}`;
  emojiBox.style.left = Math.random() * 400 + "px";
  emojiBox.style.top = Math.random() * 400 + "px";
  board.appendChild(emojiBox);
};

function createBoard() {
  board.className = "gameBox";
  divInfo.textContent = `punkty:${score}`;
  time.textContent = `60`;
}

const getRandomFruitEasy = () => {
  timeFruitIdEasy = setInterval(() => {
    const index = Math.floor(Math.random() * fruits.length);
    currentFruit = fruits[index];

    setFruit();
  }, 5000);
};

const getRandomFruitExpert = () => {
  timeFruitIdExpert = setInterval(() => {
    const index = Math.floor(Math.random() * fruits.length);
    currentFruit = fruits[index];

    setFruit();
  }, 1000);
};
const startExpertGame = (e) => {
  score = 0;
  easy.disabled = true;
  expert.disabled = true;
  let currentTime = 60;
  createBoard();
  getRandomFruitExpert();

  function countDown() {
    --currentTime;
    time.textContent = `czas: ${currentTime}`;

    if (currentTime == 0) {
      clearInterval(countDownTimer);
      clearInterval(timeFruitIdExpert);
      popupAlert();
      easy.disabled = false;
      expert.disabled = false;
    }
  }
  let countDownTimer = setInterval(countDown, 1000);
  e.preventDefault();
};

const startGameEasy = (e) => {
  score = 0;
  easy.disabled = true;
  expert.disabled = true;
  let currentTime = 60;
  createBoard();
  getRandomFruitEasy();

  function countDown() {
    --currentTime;
    time.textContent = `czas: ${currentTime}`;

    if (currentTime == 0) {
      clearInterval(countDownTimer);
      clearInterval(timeFruitIdEasy);
      popupAlert();
      easy.disabled = false;
      expert.disabled = false;
    }
  }
  let countDownTimer = setInterval(countDown, 1000);
  e.preventDefault();
};
const popupAlert = () => {
  popup.appendChild(fruitEmoji);
  fruitEmoji.textContent = `${currentFruit.emoji}`;

  popup.style.opacity = "1";
};

const addPoint = (e) => {
  currentFruit.onClick();
  divInfo.textContent = `punkty:${score}`;
  emojiBox.remove();
  paragraph.textContent = `Brawo! Zdobyłeś 
  ${score}
  punktów!`;
  popup.appendChild(paragraph);
};

easy.addEventListener("click", startGameEasy);
emojiBox.addEventListener("click", addPoint);
expert.addEventListener("click", startExpertGame);
window.addEventListener("click", () => {
  popup.style.opacity = "0";
});
