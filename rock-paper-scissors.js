

function getComputerChoice() {
    computerOptions = ['Rock', 'Paper', 'Scissors'];

    const computerChoice = Math.floor(Math.random() * 3); // Generates an integer between 0-2
    return computerOptions[computerChoice];
}

