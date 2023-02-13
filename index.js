const getComputerChoice = () => {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random()*3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice

}

const playRound = (playerSelection, computerSelection) => {
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