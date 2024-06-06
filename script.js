
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return (prompt('write your move: rock, scissors or paper')).toLowerCase();
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === 'rock') {
    if (computerChoice === 'rock')
      console.log(`Even! rock and rock`);
    if (computerChoice === 'scissors') {
      console.log(`You won! rock beats scissors`);
      humanScore++;
    }
    if (computerChoice === 'paper') {
      computerScore++;
      console.log(`You lose! paper beats rock`);
    }
  }

  if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      console.log(`You lose! rock beats scissors`);
    }
    if (computerChoice === 'scissors')
      console.log(`Even! scissors and scissors`);
    if (computerChoice === 'paper') {
      humanScore++;
      console.log(`You won! scissors beats paper`);
    }
  }

  if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log(`You won! paper beats rock`);
      humanScore++;
    }
    if (computerChoice === 'scissors') {
      console.log(`You lose! scissors beats paper`);
      computerScore++;
    }
    if (computerChoice === 'paper')
      console.log(`Even! paper and paper`);
  }
}
let humanScore = 0;
let computerScore = 0;
function playGame() {
  for (let i = 0; i < 5; i++)
    playRound();

  if (humanScore > computerScore)
    console.log('you won!!!!');
  else if (humanScore < computerScore)
    console.log('you lose!!!!');
  else
  console.log('Even!!!!');
}

playGame();
