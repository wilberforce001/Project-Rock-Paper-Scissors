console.log("Hi!")

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
    
}
function checkWinner(playerSelection, ComputerSelection) {
    if (playerSelection == ComputerSelection) {
        return"Tie!"
    } else if(
        (playerSelection == "rock" && ComputerSelection == "scissors")||
        (playerSelection == "scissors" && ComputerSelection == "paper")||
        (playerSelection == "paper" && ComputerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer"
    }
}
function playRound(playerSelection, ComputerSelection){
    const result = checkWinner(playerSelection, ComputerSelection);
    if(result == "Tie!") {
        return "It's a Tie!"
    }

    else if(result == "Player") {
        return `You Win! ${playerSelection} beats ${ComputerSelection}`
    }

    else {
        return `You Lose! ${ComputerSelection} beats ${playerSelection}`
    }
    
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const ComputerSelection = getComputerChoice();
        console.log(playRound(playerSelection, ComputerSelection));
        console.log("------")
        if(checkWinner(playerSelection, ComputerSelection) == "Player") {
            scorePlayer++;
        } else if(checkWinner(playerSelection, ComputerSelection) == "Computer"){
            scoreComputer++;
        }
     }
     console.log("Game Over!")
     if(scorePlayer > scoreComputer) {
        console.log("player was the winner!")
     }
     else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner!")
     } 
     else
     console.log("We have a tie!")
}
game()