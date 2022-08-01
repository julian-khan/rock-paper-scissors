const playerSelection = prompt('Choose scissors, paper or rock');
const computerSelection = getComputerChoice();

function getComputerChoice() {
    computerOptions = ['Rock', 'Paper', 'Scissors'];

    const computerChoice = Math.floor(Math.random() * 3); // Generates an integer between 0-2
    return computerOptions[computerChoice];
}

function executeGame(playerSelection, computerSelection) {
    gameOutcomes = ['It\'s a draw!', 'Player wins!', 'Computer wins!']
    
    if (playerSelection === computerSelection) {
        return gameOutcomes[0];
    } 

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return gameOutcomes[1];
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return gameOutcomes[2];
    }

    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return gameOutcomes[1];
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return gameOutcomes[2];
    }

    if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return gameOutcomes[1];
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return gameOutcomes[2];
    }
}
