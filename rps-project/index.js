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
    
}

getComputerChoice();