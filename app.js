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

const message= document.querySelector(".message");
const resetBtn= document.querySelector(".reset");
const pscore= document.querySelector(".pscore");
const cscore= document.querySelector(".cscore");
let winner= "";
let computerScore=0;
let playerScore=0;
let winningScore=5;
let isGameOver=false;

const rock= document.querySelector(".btnrock");
rock.addEventListener("click", () =>{
    playRound("Rock", computerPlay());
    if(!isGameOver){
          if(winner==="Player"){
        playerScore++;
        if(playerScore===winningScore){
            message.innerHTML="<h3>Player Wins! Press Reset to start over!"
            isGameOver=true;
            rock.disabled="true";
            paper.disabled="true";
            scissor.disabled="true";
        }
        pscore.textContent=playerScore;
    }else if(winner==="Computer"){
        computerScore++;
        if(computerScore===winningScore){        
            message.innerHTML="<h3>Computer Wins! Press Reset to start over!"
            isGameOver=true;
            rock.disabled="true";
            paper.disabled="true";
            scissor.disabled="true";
        }
        cscore.textContent=computerScore;
    }
    }
  

})
const paper= document.querySelector(".btnpaper");
paper.addEventListener("click", () =>{
    playRound("Paper", computerPlay());
    if(!isGameOver){
        if(winner==="Player"){
      playerScore++;
      if(playerScore===winningScore){
        message.innerHTML="<h3>Player Wins! Press Reset to start over!"
          isGameOver=true;
          rock.disabled="true";
          paper.disabled="true";
          scissor.disabled="true";
      }
      pscore.textContent=playerScore;
  }else if(winner==="Computer"){
      computerScore++;
      if(computerScore===winningScore){
        message.innerHTML="<h3>Computer Wins! Press Reset to start over!"
          isGameOver=true;
          rock.disabled="true";
          paper.disabled="true";
          scissor.disabled="true";
      }
      cscore.textContent=computerScore;
  }
  }
})
const scissor= document.querySelector(".btnscissor");
scissor.addEventListener("click", () =>{
    playRound("Scissors", computerPlay());
    if(!isGameOver){
        if(winner==="Player"){
      playerScore++;
      if(playerScore===winningScore){
          message.innerHTML="<h3>Player Wins! Press Reset to start over!"
          isGameOver=true;
          rock.disabled="true";
          paper.disabled="true";
          scissor.disabled="true";
      }
      pscore.textContent=playerScore;
  }else if(winner==="Computer"){
      computerScore++;
      if(computerScore===winningScore){
        message.innerHTML="<h3>Computer Wins! Press Reset to start over!"
          isGameOver=true;
          rock.disabled="true";
          paper.disabled="true";
          scissor.disabled="true";
      }
      cscore.textContent=computerScore;
  }
  }
})



function playerPlay(){
    let userInput= prompt("Rock, Paper Scissors?");
    let capitalized= userInput.trim().charAt(0).toUpperCase()+userInput.toLocaleLowerCase().slice(1);
    //  while(!(capitalized=="Rock"||userInput=="Paper"||userInput=="Scissors")){
    //  userInput= prompt("Rock, Paper Scissors?");
    //  }
    return capitalized;
}

resetBtn.addEventListener("click", (e)=>{
    isGameOver=false;
    playerScore=0;
    computerScore=0;
    pscore.textContent=playerScore;
    cscore.textContent=computerScore;
    message.innerHTML="<h3>Press a Button</h3>";
    rock.disabled=false;
    paper.disabled=false;
    scissor.disabled=false;
})



function playRound(playerSelection, computerSelection){ 
    let msg="";
    let winnerr="";
    if(playerSelection===computerSelection) {
        msg="Its a Draw!"
    }else if(playerSelection==="Rock"&&computerSelection=="Paper"){
        msg="You lose, Paper beats Rock!"
        winnerr="Computer";
    }else if(playerSelection==="Rock"&&computerSelection=="Scissors"){
        msg="You win, Rock beats Scissors!"
        winnerr="Player";
    }else if(playerSelection==="Paper"&&computerSelection=="Rock"){
        msg="You win, Paper beats Rock!"
        winnerr="Player";
    }else if(playerSelection==="Paper"&&computerSelection=="Scissors"){
        msg="You lose, Scissors beats Paper!"
        winnerr="Computer";
    }else if(playerSelection==="Scissors"&&computerSelection=="Paper"){
        msg="You win, Scissors beats Paper!"
        winnerr="Player";
    }else if(playerSelection==="Scissors"&&computerSelection=="Rock"){
        msg="You lose, Rock beats Scissors!"
        winnerr="Computer";
    }
    message.innerHTML="<h3>"+ msg+" Press another button.</h3>";
    winner=winnerr;
    return winner;
}


function game(){

   let win="";


    let currentWinner=playRound(playerPlay(), computerPlay());

    if(currentWinner==="Player"){
        playerScore++;

    }else if(currentWinner==="Computer"){
        computerScore++;
    } if(playerScore>computerScore){
        win="Player wins"
    }else if(playerScore<computerScore){
        win="Computer wins"
    }else{
        win="Its a draw, nobody wins"
    }
    console.log("Player has a score of "+playerScore+" and Computer has a score of "+computerScore);
    console.log(win);
   }

   
