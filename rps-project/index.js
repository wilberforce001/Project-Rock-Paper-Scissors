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
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const ComputerSelection = getComputerChoice();
        console.log(playRound(playerSelection, ComputerSelection));
     }
}
game();