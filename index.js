let playerScore = 0
let compScore = 0


const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()*3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice

}

const playRound = (playerSelection, computerSelection) => {
    console.log('1 ', playerSelection, '2 ', computerSelection)
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! Rock crushes scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You won! Scissors cuts paper"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! Rock crushes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! Scissors cuts paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won! Paper covers rock'
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

const game = () => {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))

    }
}

game()


