
function getComputerChoice() {
    computerOptions = ['rock', 'paper', 'scissors'];

    const computerChoice = Math.floor(Math.random() * 3); // Generates an integer between 0-2
    return computerOptions[computerChoice];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const gameResult = getWinner(playerSelection, computerSelection);

    return `You chose ${playerSelection} and the computer chose ${computerSelection}. ${gameResult}`
}

function trackScore(gameResult) {
    gameCount += 1;
    //create playerScore and computerScore variables

    if (gameResult === 'Player wins!') {
        playerScore += 1; } else if (gameResult === 'Computer wins!') {
            computerScore += 1;
        } else {
            return
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

playerScore = 0;
computerScore = 0;

const button = document.querySelectorAll('button');

button.forEach((b) => {
    b.addEventListener('click', () => {
        const playerSelection = b.textContent.toLowerCase();
        playRound(playerSelection);
        console.log(playerScore);
        console.log(computerScore);

    });
});

const resultsDiv = document.createElement('div');
resultsDiv.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. ${gameResult}`;






