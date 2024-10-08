let humanScore = 0;
let computerScore = 0;
let gameOver = false;
const winningScore = 5;

const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const winnerDisplay = document.querySelector('.winner');
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}


function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice)
    return 'draw';
  if (humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'paper'
  )
    return 'human';

  return 'computer';
}

function disableBtns() {
  buttons.forEach(btn => btn.disabled = true);
}

function updateDisplay() {
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
}

function checkGameover() {
  if (humanScore === 5) {
    winnerDisplay.innerText = 'Human Wins!';
    gameOver = true;
    disableBtns();
  } else if (computerScore === 5) {
    winnerDisplay.innerText = 'Computer Wins!';
    gameOver = true;
    disableBtns();
  }
}

const play = (e) => {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  const humanChoice = e.target.innerText;
  const winner = determineWinner(humanChoice, computerChoice);

  if (winner === 'human') {
    humanScore++;
    winnerDisplay.innerText = 'Human scored';
  } else if (winner === 'computer') {
    computerScore++;
    winnerDisplay.innerText = 'Computer scored';
  } else {
    winnerDisplay.innerText = 'Draw';
  }

  updateDisplay();
  checkGameover();
}

buttons.forEach(button => {
  button.addEventListener('click', play);
})
