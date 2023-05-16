const numberToChoice = { 1: "Rock", 2: "Paper", 3: "Scissors" };

const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userButtonSelect;

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userButtonSelect = e.target.id;
    userChoice.innerHTML = userButtonSelect;
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  const computerChoice = numberToChoice.randomNumber;
  return computerChoice;
}
