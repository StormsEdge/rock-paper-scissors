const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const final = document.querySelector("#final");
const human = document.querySelector("#human");
const computer = document.querySelector("#computer");

// The scores for each game
let humanScore = 0;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"]; // Possible options for the game

// Calculates the computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// Resets the game
function reset() {
    endGame(humanScore, computerScore);
    humanScore = 0;
    computerScore = 0;
    result.textContent = '';
    return;
}

// Prints win, otherwise parses input to figure out if there was a loss or a tie
function output(winner, humanChoice, computerChoice) {
    if (winner == 1) {
        result.textContent = `You win! (because ${humanChoice} beats ${computerChoice})`;
        humanScore++;
    } else {
            if (humanChoice != computerChoice) {
                result.textContent = `You lose! (because ${computerChoice} beats ${humanChoice})`;
                computerScore++;
        } else {
            result.textContent = "It's a tie!";
        }
    }
    human.textContent = humanScore;
    computer.textContent = computerScore;
    if (humanScore >= 5) {
        reset();
        return;
    } else if (computerScore >= 5) {
        reset();
        return;
    } else {
        final.textContent = '';
    }
    return;
}

// Plays a round of the game, and checks if the player won or not
function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissors')
    || (humanChoice == 'paper' && computerChoice == 'rock')
    || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        output(1, humanChoice, computerChoice);
    } else {
        output(0, humanChoice, computerChoice);
    }
    return;
}

// a final message
function endGame(humanScore, computerScore) {
    if (humanScore > computerScore) {
        final.textContent = 'Good job, you won!';
    } else {
        final.textContent = "You didn't win...";
    }
    return;
}