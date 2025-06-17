"use strcit";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let chance = 20;
let score = 20;
const loseSound = new Audio("lose.mp3");
const winSound = new Audio("victory.mp3");

document.querySelector(".check").addEventListener("click", function () {
  console.log(`current change = ${chance}`);

  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (chance == 0) {
    document.querySelector(".message").textContent = "Good Boy";
    document.querySelector(".number").textContent = randomNumber;
    // document.querySelector(".score") = 20;
    return;
  }

  if (!guess) {
    document.querySelector(".message").textContent = "No Number 🤦‍♀️";
  } else {
    if (guess == randomNumber) {
      winSound.play();
      //   winSound.volume = 0.5;
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".message").textContent = "YOu Won";
      document.querySelector(".number").textContent = randomNumber;
      const highscore = Number(
        document.querySelector(".highscore").textContent
      );
      document.querySelector(".number").style.width = "25rem";
      if (score >= highscore) {
        document.querySelector(".highscore").textContent = score;
      }
      return;
    } else {
      loseSound.play();
      setTimeout(() => {
        loseSound.pause();
        loseSound.currentTime = 0;
      }, 1500);
      score--;
      chance--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent =
        guess > randomNumber
          ? `too far chances left ${chance}`
          : `too low chances left ${chance}`;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  winSound.pause();
  document.querySelector(".number").style.width = "15rem";
  console.log(randomNumber);

  document.querySelector(".message").textContent = "Start Guessing ╰(*°▽°*)╯";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  score = 20;
  chance = 20;
});
