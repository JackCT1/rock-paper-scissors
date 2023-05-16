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
