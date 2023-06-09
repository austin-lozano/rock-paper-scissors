const buttons = document.querySelectorAll('button');
let playerSelection; 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        console.log(playerSelection);
        const computerSelection = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
        console.log(computerSelection);
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        document.getElementById('playerScore').textContent = playerWins;

        document.getElementById('computerScore').textContent = computerWins;

        if (playerWins >= 5) {
            alert("You win!")
        } else if (computerWins >= 5) {
            alert("You lose")
        }
    });
});

const computerSelection = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
console.log(computerSelection)

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Looks like we have a tie. You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerWins++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerWins++;
        return `You lose. ${computerSelection} beats ${playerSelection}.`;
    } else {
        return "Invalid selection.";
    }
}
