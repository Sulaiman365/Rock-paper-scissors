let playerScore = 0;
let computerScore = 0;
function getComputerChoice(computerChoice){
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
    return "Rock";
    }
    else if (computerChoice == 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function playRound (playerSelection,computerSelection)
{
if (computerSelection==='Scissors' && playerSelection.toUpperCase() === 'ROCK')
{
playerScore ++;
}
else if (computerSelection==='Scissors' && playerSelection.toUpperCase() === 'PAPER')
{
computerScore ++;
}
else if (computerSelection==='Scissors' && playerSelection.toUpperCase() === 'SCISSORS')
{
playerScore = playerScore;
computerScore = computerScore;
}
else if (computerSelection==='Paper' && playerSelection.toUpperCase() === 'PAPER')
{
playerScore = playerScore;
computerScore = computerScore;
}
else if (computerSelection==='Paper' && playerSelection.toUpperCase() === 'SCISSORS')
{
playerScore++;
}
else if (computerSelection==='Paper' && playerSelection.toUpperCase() === 'ROCK')
{
computerScore++;
}
else if (computerSelection==='Rock' && playerSelection.toUpperCase() === 'ROCK')
{
playerScore = playerScore;
computerScore = computerScore;
}
else if (computerSelection==='Rock' && playerSelection.toUpperCase() === 'SCISSORS')
{
computerScore++;
}
else if (computerSelection==='Rock' && playerSelection.toUpperCase() === 'PAPER')
{
playerScore++;
}

}

    //for(i=1;i<=5;i++)
    //{
    
       let playerSelection;
       const compText = document.querySelector('.compText');
       const humanText = document.querySelector('.humanText');
       const btnRock = document.querySelector('.rock');
       const winner = document.querySelector('#winner');

        btnRock.addEventListener('click',() => {
        playerSelection = "rock";
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        humanText.textContent = `Player:\n${playerScore}`;
        compText.textContent = `Computer: ${computerScore}`;
        if (computerSelection ==="Rock")
        {
            winner.textContent = `Draw!`; 
        }
        else if (computerSelection ==="Paper")
        {
            winner.textContent = `You lose: Paper beats Rock`; 
        }
        else if (computerSelection ==="Scissors")
        {
            winner.textContent = `You win: Rock beats Scissors`; 
        }
        if (playerScore==5 || computerScore==5)
        {
            if (playerScore>computerScore)
            {
                winner.textContent = `👨 WINS`;
                playerScore = 0;
                computerScore=0;
                
            }
            else if (computerScore>playerScore)
            {
                winner.textContent = `🤖 WINS`;
                playerScore = 0;
                computerScore=0;
               
            }
            
        }
        })
        
        const btnPaper = document.querySelector('.paper');
        begin: btnPaper.addEventListener('click',() => {
        playerSelection = "paper";
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        humanText.textContent = `Player:\n${playerScore}`;
        compText.textContent = `Computer: ${computerScore}`;
        if (computerSelection ==="Paper")
        {
            winner.textContent = `Draw!`; 
        }
        else if (computerSelection ==="Scissors")
        {
            winner.textContent = `You lose: Scissors beats Paper`; 
        }
        else if (computerSelection ==="Rock")
        {
            winner.textContent = `You win: Paper beats Rock`; 
        }
        if (playerScore==5 || computerScore==5)
        {
            if (playerScore>computerScore)
            {
                winner.textContent = `👨 WINS`;
                 
                playerScore = 0;
                computerScore=0;
                
            }
            else if (computerScore>playerScore)
            {
                winner.textContent = `🤖 WINS`;
                
                playerScore = 0;
                computerScore=0;
                
            }
            
        }
        })
        const btnScissors = document.querySelector('.scissors');
        btnScissors.addEventListener('click',() => {
        playerSelection = "scissors";
        computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        humanText.textContent = `Player:\n${playerScore}`;
        compText.textContent = `Computer: ${computerScore}`;
        if (computerSelection ==="Scissors")
        {
            winner.textContent = `Draw!`; 
        }
        else if (computerSelection ==="Rock")
        {
            winner.textContent = `You lose: Rock beats Scissors`; 
        }
        else if (computerSelection ==="Paper")
        {
            winner.textContent = `You win: Scissors beats Paper`; 
        }
        if (playerScore==5 || computerScore==5)
        {
            if (playerScore>computerScore)
            {
                winner.textContent = `👨 WINS`;
                
                playerScore = 0;
                computerScore=0;
                
            }
            else if (computerScore>playerScore)
            {
                winner.textContent = `🤖 WINS`;
                
                playerScore = 0;
                computerScore=0;
                
            }
            
        }
        })

        //playRound(playerSelection,computerSelection)
    //}


//const computerSelection = getComputerChoice ();
//const playerSelection = prompt("Please enter your choice.");
//if (playerSelection.toUpperCase() ==='PAPER' || playerSelection.toUpperCase() === 'SCISSORS' || playerSelection.toUpperCase() === 'ROCK')
//{
//playRound(playerSelection,computerSelection);
//}
//else
//{
//    console.log("Please enter Rock, Paper or Scissors only.");
//    alert("Please enter Rock, Paper or Scissors only.");
//    i--;
//}


//if (playerScore > computerScore)
//{
//console.log("Humanity has been saved");
//alert("Humanity has been saved");
//}
//else if (playerScore == computerScore)
//{
//    console.log("Draw! You live to fight another day!");
//    alert("Draw! You live to fight another day!");
//}
//else{
//    console.log("Machines have colonized the world!");
//    alert("Machines have colonized the world!");
//}