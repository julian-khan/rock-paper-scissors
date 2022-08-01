
function getComputerChoice() {
    computerOptions = ['rock', 'paper', 'scissors'];

    const computerChoice = Math.floor(Math.random() * 3); // Generates an integer between 0-2
    return computerOptions[computerChoice];
    console.log(computerOptions);
}

function executeGame(playerSelection, computerSelection) {
    const gameResult = getWinner(playerSelection, computerSelection);

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

const playerSelection = prompt('Choose scissors, paper or rock.').toLowerCase();
const computerSelection = getComputerChoice();
alert(executeGame(playerSelection, computerSelection));
