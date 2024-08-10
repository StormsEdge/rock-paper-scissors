const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

// The scores for each game
let humanScore = 0;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"]; // Possible options for the game

// Calculates the computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

// Gets the user choice and does not accept improper inputs
// function getHumanChoice() {
//     let player = prompt('rock, paper, or scissors: ');
//     while (!choices.includes(player.toLowerCase())) {
//         player = prompt('rock, paper, or scissors (pick one and type it in)');
//     }
//     return player.toLowerCase();
// }

// Prints win, otherwise parses input to figure out if there was a loss or a tie
function output(winner, humanChoice, computerChoice) {
    if (winner == 1) {
        console.log(`You win! (because ${humanChoice} beats ${computerChoice})`);
        humanScore++;
    } else {
            if (humanChoice != computerChoice) {
                console.log(`You lose! (because ${computerChoice} beats ${humanChoice})`);
                computerScore++;
        } else {
            console.log("It's a tie!");
        }
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

// Set the number of rounds
// let numRounds = parseInt(prompt('How many rounds?\n'));
// while (isNaN(numRounds)) {
//     numRounds = parseInt(prompt('How many rounds? Just give me a number!\n'));
// }

// TODO: Re-add implementation of rounds
// for (let i = 0; i < numRounds; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
// }

// a final message
// if (humanScore > computerScore) {
//     console.log('You won!');
// } else {
//     console.log("You didn't win...");
// }

// return humanScore > computerScore;