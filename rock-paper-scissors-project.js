var HUMANPOINTS = 0;
var COMPUTERPOINTS = 0;

function playRound(humanChoice, computerChoice) {
  
  if(humanChoice == "paper" && (computerChoice == "rock" || computerChoice == "scissors")) {
    COMPUTERPOINTS++;
  } else if(computerChoice == "paper" && (humanChoice == "rock" || humanChoice == "scissors")) {
    HUMANPOINTS++;
  } else if(humanChoice == "rock" && (computerChoice == "paper" || computerChoice == "scissors")) {
    HUMANPOINTS++;
  } else if(computerChoice == "rock" && humanChoice == "scissors") {
    COMPUTERPOINTS++;
  }
}

function whoWins(humanPoints, computerPoints) {
  if(humanPoints > computerPoints) {
    console.log("human wins -- total points = ", humanPoints);
  } else if(computerPoints > humanPoints) {
    console.log("computer wins -- total points = ", computerPoints)
  } else {
    console.log("same points", " human = ", humanPoints, " and computer = ", computerPoints);
  }
}

for(let i=0; i<5; i++) {
  const humanSelection = humanChoice();
  const computerSelection = computerChoice();

  playRound(humanSelection, computerSelection)
}

whoWins(HUMANPOINTS, COMPUTERPOINTS)

function humanChoice(value) {
  let choice = "scissors"; // prompt
  
  if(choice === "rock") {
    return "rock";
  } else if(choice === "paper") {
    return "paper";
  } else if(choice === "scissors") {
    return "scissors";
  } else {
    return "invalid choice";
  }
}

function computerChoice() {
  const value = Math.floor(Math.random() * 3);
  
  if(value === 0) {
    return "rock";
  } else if(value === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
