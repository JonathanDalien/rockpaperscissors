function computerPlay() {
    let randomnum= Math.floor(Math.random()*3)+1;
    let sign="";
    if(randomnum===1){
        sign= "Rock";
    }else if(randomnum===2){
        sign= "Scissors";
    }else{
        sign= "Paper";
    }
    console.log("Computer is "+sign);
    return sign;
    
}

function playerPlay(){
    let userInput= prompt("Rock, Paper Scissors?");
    let capitalized= userInput.trim().charAt(0).toUpperCase()+userInput.toLocaleLowerCase().slice(1);
    //  while(!(capitalized=="Rock"||userInput=="Paper"||userInput=="Scissors")){
    //  userInput= prompt("Rock, Paper Scissors?");
    //  }
    return capitalized;
}



function playRound(playerSelection, computerSelection){ 
    let msg="";
    let winner="";

    
    if(playerSelection===computerSelection) {
        msg="Its a Draw!"
    }else if(playerSelection==="Rock"&&computerSelection=="Paper"){
        msg="You lose, Paper beats Rock!"
        winner="Computer";
    }else if(playerSelection==="Rock"&&computerSelection=="Scissors"){
        msg="You win, Rock beats Scissors!"
        winner="Player";
    }else if(playerSelection==="Paper"&&computerSelection=="Rock"){
        msg="You win, Paper beats Rock!"
        winner="Player";
    }else if(playerSelection==="Paper"&&computerSelection=="Scissors"){
        msg="You lose, Scissors beats Paper!"
        winner="Computer";
    }else if(playerSelection==="Scissors"&&computerSelection=="Paper"){
        msg="You win, Scissors beats Paper!"
        winner="Player";
    }else if(playerSelection==="Scissors"&&computerSelection=="Rock"){
        msg="You lose, Rock beats Scissors!"
        winner="Computer";
    }
    console.log(msg);
    return winner;
}


function game(){
   let computerscore=0;
   let playerscore=0;
   let win="";

   for (let i = 0; i < 5; i++) {    
    let currentWinner=playRound(playerPlay(), computerPlay());

    if(currentWinner==="Player"){
        playerscore++;

    }else if(currentWinner==="Computer"){
        computerscore++;
    }
   }

    if(playerscore>computerscore){
        win="Player wins"
    }else if(playerscore<computerscore){
        win="Computer wins"
    }else{
        win="Its a draw, nobody wins"
    }
    console.log("Player has a score of "+playerscore+" and Computer has a score of "+computerscore);
    console.log(win);

     
}

game();