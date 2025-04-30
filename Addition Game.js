let  firstNumber   = document.getElementById("firstNumber");
let  secondNumber  = document.getElementById("secondNumber");
let  userInput     = document.getElementById("userInput");
let  gameResult    = document.getElementById("gameResult");
let  checkButton   = document.getElementById("checkButton");
let  restartButton = document.getElementById("restartButton");

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function setNewQuestion() {
    let num1 = getRandomNumber();
    let  num2 = getRandomNumber();
  firstNumber.textContent = num1;
  secondNumber.textContent = num2;
  userInput.value = '';
  gameResult.textContent = '';
  gameResult.className = 'game-result';
}

 checkButton.addEventListener("click", () => {
    let  sum = parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent);
    let  userAnswer = parseInt(userInput.value);
  
  if (userAnswer === sum) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.className = "game-result success";
  } else {
    gameResult.textContent = "Oops! That's not correct.";
    gameResult.className = "game-result failure";
  }
});
restartButton.addEventListener("click", setNewQuestion);
setNewQuestion();