let computerScore = 0;
let playerScore = 0;

console.log('Best of 5 wins!');

while (playerScore < 3 || computerScore < 3) {
    function getComputerChoice() {
        const randomDecimal = Math.random();
        const randomNumber = Math.floor(randomDecimal * 3) + 1;

        let rpc;

        if (randomNumber === 1) {
            rpc = 'rock';
        } else if (randomNumber === 2) {
            rpc = 'paper';
        } else if (randomNumber === 3) {
            rpc = 'scissors';
        }

        return rpc;
    }

    const playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = getComputerChoice();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "You Lose";
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You Win";
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You Win";
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return "You Lose";
        }// Your playRound function implementation here
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You Win";
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You Lose";
        }
        else if(playerSelection === computerSelection) {
            return "Tie";
        }
    }

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult === "You Lose") {
        computerScore++;
    } else if (roundResult === "You Win") {
        playerScore++;
    }
}

if (playerScore === 3) {
    console.log('You win out of 5');
} else if (computerScore === 3) {
    console.log('You lose out of 5');
}