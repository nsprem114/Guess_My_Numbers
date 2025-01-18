/*
MAP

const foodData = [
  {
    id: 1,
    name: "Pizza",
    price: 250,
    description: "This is nice pizza",
  },
  {
    id: 2,
    name: "Dosa",
    price: 300,
    description: "This is nice pizza",
  },
  {
    id: 2,
    name: "Fridge Rice",
    price: 300,
    description: "This is nice pizza",
  },
];

console.log(foodData);

foodData.map((data) => {
  console.log(`Name: ${data.name}`);
  console.log(`Price: ${data.price}`);
  console.log(`Description: ${data.description}`);
});

SET

const currency = ["USD", "AUS", "GBP", "GBP", "GBP", "USD"];
let filterDuplicate = new Set(currency);
console.log(filterDuplicate);

console.log(currency);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "green";
    document.body.style.fontSize = "50";
    document.querySelector(".number").style.color = "white";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = 20;
  document.querySelector(".highscore").textContent = 0;
  document.querySelector(".message").textContent = "Start Guessing";
  document.body.style.backgroundColor = "";
  document.body.style.fontSize = "";
  document.querySelector(".number").style.color = "";
});

// Completed
