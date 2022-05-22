let computerWins = 0;
let playerWins = 0;
let ties = 0;

const buttons = document.querySelectorAll('button');
const textBox = document.querySelector('.textBox');

function totalRoundsPlayed() {
    return (computerWins+playerWins+ties);
}

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
            ties++;
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
            ties++;
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
            ties++;
            return("Tie! Your scissors do nothing to the computers.")
        }
    }
}

function textBoxLog(text){
    const temp = document.createElement('p');
    temp.textContent = text;
    temp.classList.add('textBoxText');
    textBox.appendChild(temp);
}

function handleButton() {
    textBoxLog(playRound(this.className, computerMove()));
    if(totalRoundsPlayed() >= 5){
        buttons.forEach(button => button.removeEventListener('click', handleButton));
        if(computerWins > playerWins){
            textBoxLog(playerWins + ":" + computerWins + ", Computer wins!");
        }else if(playerWins > computerWins){
            textBoxLog(playerWins + ":" + computerWins + ", You Win!");
        }else{
            textBoxLog(playerWins + ":" + computerWins + ", tie!");
        }

    }
}

buttons.forEach(button => button.addEventListener('click', handleButton));

textBoxLog('Best of five?');