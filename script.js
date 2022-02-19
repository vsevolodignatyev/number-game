let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let winner;

const userGuess = 6;
const secretNumber = 9;

const generateTarget = () => {
    compGuess = Math.round(Math.random() * 9);
    return compGuess;
  }
  
const compareGuesses = (userGuess, compGuess, secretNumber) => {

    let userResult = Math.abs(secretNumber - userGuess);
    let compResult = Math.abs(secretNumber - compGuess);

    if (userResult <= compResult) {
        winner = 'computer';
        return 'You win!'
    } else {
        winner = 'user';
        return 'Computer wins!'
    }

}

const updateScore = winner => {
    if (winner === 'computer') {
        computerScore = computerScore + 1;
    } else {
        humanScore = humanScore + 1;
    }
    return ('Computer: ' + computerScore + ' | User: ' + humanScore)
}

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1;
}

console.log(generateTarget());

console.log(compareGuesses(userGuess, generateTarget(), secretNumber));

console.log(updateScore(winner));

console.log(currentRoundNumber);