let computerWins = 0;
let playerWins = 0;

const buttons = document.querySelectorAll('button');

function computerMove(){
    let random = Math.random();
    if(random < .33){
        return("rock");
    }else if(random < .66){
        return("paper");
    }else{
        return("scissors");
    }
}

function getPlayerMove(){
    return "rock";
}

function playRound(playerMove, computerMove){
    if(playerMove == "rock"){
        if(computerMove == "rock"){
            return("Tie! Rock doesn't hurt rock.");
        }else if(computerMove == "paper"){
            computerWins++;
            return("Loss! Computer's paper covers your rock");
        }else{ //computerMove == "scissors"
            playerWins++;
            return("Win! Your rock beats the computers scissors.");
        }
    }else if(playerMove == "paper"){
        if(computerMove == "rock"){
            playerWins++;
            return("Win! Your paper covers the computers rock.");
        }else if(computerMove == "paper"){
            return("Tie! Paper doesn't do anything to paper.");
        }else{ //computerMove == "scissors"
            computerWins++;
            return("Loss! The computers scissors cut your paper.");
        }
    }else { //playerMove == "scissors"
        if(computerMove == "rock"){
            computerWins++;
            return("Loss! The computers rock beats your scissors.");
        }else if(computerMove == "paper"){
            playerWins++;
            return("Win! Your Scissors cut the computers paper.");
        }else{ //computerMove == "scissors"
            return("Tie! Your scissors do nothing to the computers.")
        }
    }
}

function handleButton() {
    console.log(playRound(this.className, computerMove()));
    console.log("The verdict? Computer: " + computerWins + " Player:" + playerWins);
}

buttons.forEach(button => button.addEventListener('click', handleButton));