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
        //compScore = compScore + 1, compScore--, compScore = CompScore -1 
        compScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return "You won! Scissors cuts paper"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! Rock crushes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost! Scissors cuts paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won! Paper covers rock'
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log('1 ', playRound(playerSelection, computerSelection))

    }

    if (playerSelection > compScore) {
        return 'You beat the computer! You are a genius!'
    } else if (playerScore < compScore) {
        return 'You got beat by the computer! Practice your throws!'
    } else {
        return 'You tied with the computer! Not too shabby'
    }
}

console.log(game())


