
function getComputerChoice() {
    computerOptions = ['rock', 'paper', 'scissors'];

    const computerChoice = Math.floor(Math.random() * 3); // Generates an integer between 0-2
    return computerOptions[computerChoice];
}

function playRound(playerSelection) {

    if (roundCount === 5) {
        return // This ends the game, once the user has played 5 rounds
    }

    const computerSelection = getComputerChoice();
    const gameResult = getWinner(playerSelection, computerSelection);
    trackScore(gameResult);
    
    const roundResult = `Round ${roundCount}. You chose 
    ${playerSelection} and the computer chose ${computerSelection}. ${gameResult}`;

    resultOut(roundResult);
}

function trackScore(gameResult) {
    roundCount += 1;

    if (gameResult === 'Player wins!') {
        playerScore += 1; 
    } else if (gameResult === 'Computer wins!') {
            computerScore += 1;
        } else {
            return
        }
}

function resultOut(roundResult) {

    addScoring(); 
    addResult(roundResult);

    if (roundCount === 5) {
        printFinalResult();
    }
}

// Fix print final result func below so that the final result (eg player wins)
       
function addResult(roundResult) {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('round-result');

    if (roundCount === 5 && playerScore > computerScore) {
        resultDiv.textContent = roundResult + " " + 'Game over, you win!';
    } else if (roundCount === 5 && playerScore < computerScore) {
        resultDiv.textContent = roundResult + " " + 'Game over, the computer wins!';
    } else {
        resultDiv.textContent = roundResult;
    }

    const resultOutContainer = document.querySelector('.result-out');
    resultOutContainer.appendChild(resultDiv);
}

function addScoring() {

    const roundNumber = document.querySelector('.round-number');
    roundNumber.textContent = `Round Number: ${roundCount}`;

    const playerPoints = document.querySelector('.player-points');
    playerPoints.textContent = `Player Score: ${playerScore}`;

    const computerPoints = document.querySelector('.computer-points');
    computerPoints.textContent = `Computer Score: ${computerScore}`;
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


// Main script
roundCount = 0;
playerScore = 0;
computerScore = 0;

const button = document.querySelectorAll('button');

button.forEach((b) => {
    b.addEventListener('click', () => {
        const playerSelection = b.textContent.toLowerCase();
        playRound(playerSelection);
    });
});





