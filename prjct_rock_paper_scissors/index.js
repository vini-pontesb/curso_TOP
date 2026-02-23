let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    choice = parseInt(Math.random() * (4 - 1) + 1)
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } return "Scissors";
};
function getHumanChoice() {
    choice = parseInt(prompt("1 - Rock\n2 - Paper\n3 - Scissors"));
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    } else {
        return "You didn't choice the right numbers!";
    }
};
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1;
        return `Computer wins, ${computerChoice} beats ${humanChoice}\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}\n-------------------------`;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore += 1;
        return `Human wins, ${humanChoice} beats ${computerChoice}\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}\n-------------------------`;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore += 1;
        return `Human wins, ${humanChoice} beats ${computerChoice}\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}\n-------------------------`;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore += 1;
        return `Computer wins, ${computerChoice} beats ${humanChoice}\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}\n-------------------------`;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore += 1;
        return `Computer wins, ${computerChoice} beats ${humanChoice}\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}\n-------------------------`;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore += 1;
        return `Human wins, ${humanChoice} beats ${computerChoice}\nnHuman Score - ${humanScore}\nComputer Score - ${computerScore}\n-------------------------`;
    } else {
        return `Draw, ${humanChoice} = ${computerChoice}\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}\n-------------------------`;
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore > computerScore) {
        return `Human wins the game!\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}`;
    } else if (computerScore > humanScore) {
        return `Computer wins the game!\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}`;
    } return `Draw game!\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}`;
}
console.log(playGame())



