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
console.log("You Win! Rock beats Scissors");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("You Win! Rock beats Scissors");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Scissors' && playerSelection.toUpperCase() === 'PAPER')
{
computerScore ++;
console.log("You Lose! Scissors beats Paper");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("You Lose! Scissors beats Paper");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Scissors' && playerSelection.toUpperCase() === 'SCISSORS')
{
console.log("Draw!");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("Draw!");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Paper' && playerSelection.toUpperCase() === 'PAPER')
{
console.log("Draw!");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("Draw!");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Paper' && playerSelection.toUpperCase() === 'SCISSORS')
{
playerScore++;
console.log("You Win!  Scissors beats  Paper");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("You Win!  Scissors beats  Paper");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Paper' && playerSelection.toUpperCase() === 'ROCK')
{
computerScore++;
console.log("You Lose!  Paper beats  Rock");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("You Lose!  Paper beats  Rock");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Rock' && playerSelection.toUpperCase() === 'ROCK')
{
console.log("Draw!");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("Draw!");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Rock' && playerSelection.toUpperCase() === 'SCISSORS')
{
computerScore++;
console.log("You Lose! Rock beats Scissors");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("You Lose! Rock beats Scissors");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}
else if (computerSelection==='Rock' && playerSelection.toUpperCase() === 'PAPER')
{
playerScore++;
console.log("You Win! Paper beats Rock");
console.log("You:"+playerScore+" : "+computerScore+":Computer");
alert("You Win! Paper beats Rock");
alert("You:"+playerScore+" : "+computerScore+":Computer");
}

}
function game()
{
   for (let i = 0; i < 5; i++){
const computerSelection = getComputerChoice ();
const playerSelection = prompt("Please enter your choice.");
if (playerSelection.toUpperCase() ==='PAPER' || playerSelection.toUpperCase() === 'SCISSORS' || playerSelection.toUpperCase() === 'ROCK')
{
playRound(playerSelection,computerSelection);
}
else
{
    console.log("Please enter Rock, Paper or Scissors only.");
    alert("Please enter Rock, Paper or Scissors only.");
    i--;
}
}
}
game();
if (playerScore > computerScore)
{
console.log("Humanity has been saved");
alert("Humanity has been saved");
}
else if (playerScore == computerScore)
{
    console.log("Draw! You live to fight another day!");
    alert("Draw! You live to fight another day!");
}
else{
    console.log("Machines have colonized the world!");
    alert("Machines have colonized the world!");
}