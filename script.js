// document.querySelector(".message").textContent = "🎉 Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;
// document.querySelector(".guess").value = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    //
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.fontSize = "70px";
    document.querySelector(".message").style.color = "#fff";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").style.color = "red";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".message").style.color = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//

document.querySelector(".score").addEventListener("click", () => {});
