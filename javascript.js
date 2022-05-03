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

let rockDist = 0;
let paperDist = 0;
let scissorsDist = 0;

for(let i = 0; i < 1000000; i++){
    let thisMove = computerMove();
    if(thisMove == "rock"){
        rockDist++;
    }else if(thisMove == "paper"){
        paperDist++;
    }else{
        scissorsDist++;
    }
}

console.log("Rock distribution:" + (rockDist/10000) + "%")
console.log("Paper distribution:" + (paperDist/10000) + "%")
console.log("Scissors distribution:" + (scissorsDist/10000) + "%")