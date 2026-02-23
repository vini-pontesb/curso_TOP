const human = {
    score: 0,
    choice: getHumanChoice(),
}
const computer = {
    score: 0,
    choice: getComputerChoice(),
}
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
        computer.score += 1;
        return `Computer wins, ${computerChoice} beats ${humanChoice}\nHuman Score - ${human.score}\nComputer Score - ${computer.score}\n-------------------------`;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        human.score += 1;
        return `Human wins, ${humanChoice} beats ${computerChoice}\nHuman Score - ${human.score}\nComputer Score - ${computer.score}\n-------------------------`;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        human.score += 1;
        return `Human wins, ${humanChoice} beats ${computerChoice}\nHuman Score - ${human.score}\nComputer Score - ${computer.score}\n-------------------------`;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computer.score += 1;
        return `Computer wins, ${computerChoice} beats ${humanChoice}\nHuman Score - ${human.score}\nComputer Score - ${computer.score}\n-------------------------`;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computer.score += 1;
        return `Computer wins, ${computerChoice} beats ${humanChoice}\nHuman Score - ${human.score}\nComputer Score - ${computer.score}\n-------------------------`;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        human.score += 1;
        return `Human wins, ${humanChoice} beats ${computerChoice}\nnHuman Score - ${human.score}\nComputer Score - ${computer.score}\n-------------------------`;
    } else {
        return `Draw, ${humanChoice} = ${computerChoice}\nHuman Score - ${human.score}\nComputer Score - ${computer.score}\n-------------------------`;
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = human.choice;
        let computerSelection = computer.choice;
        console.log(playRound(humanSelection, computerSelection));
    }
    if (human.score > computer.score) {
        return `Human wins the game!\nHuman Score - ${human.score}\nComputer Score - ${computer.score}`;
    } else if (computer.score > human.score) {
        return `Computer wins the game!\nHuman Score - ${human.score}\nComputer Score - ${computer.score}`;
    } return `Draw game!\nHuman Score - ${human.score}\nComputer Score - ${computer.score}`;
}
console.log(playGame())