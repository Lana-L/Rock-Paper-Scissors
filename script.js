let playerScore = 0;
game();
game();
game();
game();
game();

console.log(`Player scored ${playerScore} out of 5`);

function game()
{    
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

function getComputerChoice()
{
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return console.log("uh oh, something's gone wrong");
    }
    
}

function getPlayerChoice()
{
    let playerSelection = prompt("Paper, Scissors, Rock?");
    return playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection)
{
    console.log(`You selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`);
    let result = "let's play";

    if (playerSelection === "rock")
    {
        if (computerSelection === "paper")
        {
            result = "You lose! Paper beats Rock";
        } else
        if (computerSelection === "scissors")
        {
            result = "You win! Rock beats Scissors";
            playerScore ++;
        } 
        if (computerSelection === "rock")
        {
            result = "It's a tie!";
        } 
    }

    else if (playerSelection === "paper")
    {
        if (computerSelection === "scissors")
        {
            result = "You lose! Scissors beats Paper";
        } else
        if (computerSelection === "rock")
        {
            result = "You win! Paper beats Rock";
            playerScore ++;
        } else
        if (computerSelection === "paper")
        {
           result = "It's a tie!";
        } 
    }

    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            result = "You lose! Rock beats Scissors";
        } else
        if (computerSelection === "paper")
        {
            result = "You win! Scissors beats Paper";
            playerScore ++;
        } else
        if (computerSelection === "scissors")
        {
           result = "It's a tie!";
        } 
    }
    return result;
}



