
function getComputerChoice() {
    computerOptions = ['rock', 'paper', 'scissors'];

    const computerChoice = Math.floor(Math.random() * 3); // Generates an integer between 0-2
    return computerOptions[computerChoice];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const gameResult = getWinner(playerSelection, computerSelection);
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. ${gameResult}`);

    return `You chose ${playerSelection} and the computer chose ${computerSelection}. ${gameResult}`
}

function getWinner(playerSelection, computerSelection) {
    const gameOutcomes = ['It\'s a draw!', 'Player wins!', 'Computer wins!'];

    if (playerSelection === computerSelection) {
        return gameOutcomes[0];
    } 

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return gameOutcomes[1];
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return gameOutcomes[2];
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return gameOutcomes[1];
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return gameOutcomes[2];
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return gameOutcomes[1];
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return gameOutcomes[2];
    }

}

/*
function game() {
    //const numRounds = parseInt(prompt('Enter the number of rounds you\'d like to play, as a whole number'));
    // above logic removed to accomodate UI design

    for (let i = 0; i < 5; i++) {
        //const playerSelection = prompt('Choose scissors, paper or rock.').toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
} */


const button = document.querySelectorAll('button');

button.forEach((b) => {
 
    b.addEventListener('click', () => {
        const playerSelection = b.textContent.toLowerCase();
        playRound(playerSelection);
    });
    // b.addEventListener('click', playRound(playerSelection, computerSelection));
});




