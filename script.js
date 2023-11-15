let playerScore = 0;
let computerScore = 0;
let playerSelection = "choice";

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () =>
{
    playerSelection = "rock";
    game();
});
paper.addEventListener('click', () =>
{
    playerSelection = "paper";
    game();
});
scissors.addEventListener('click', () =>
{
    playerSelection = "scissors";
    game();
});

function game()
{
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    if (playerScore > computerScore)
    {
        console.log("Player Wins!");
    }
    else if (computerScore > playerScore)
    {
        console.log("Computer Wins!");
    }
    else
        console.log("It's a tie :O");

    console.log(`Player scored ${playerScore} out of 5`);
    console.log(`Computer scored ${computerScore} out of 5`);


    if (playerScore === 5 || computerScore === 5)
    {
        if (playerScore > computerScore)
        {
            console.log("Player Wins the Game with 5!");
        }
        else if (computerScore > playerScore)
        {
            console.log("Computer Wins the Game with 5!");
        }
        else
            console.log("The Game is a tie with 5 points each!");

        playerScore = 0;
        computerScore = 0;

    }

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
            computerScore++;
        } else
            if (computerSelection === "scissors")
            {
                result = "You win! Rock beats Scissors";
                playerScore++;
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
            computerScore++;
        } else
            if (computerSelection === "rock")
            {
                result = "You win! Paper beats Rock";
                playerScore++;
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
            computerScore++;
        } else
            if (computerSelection === "paper")
            {
                result = "You win! Scissors beats Paper";
                playerScore++;
            } else
                if (computerSelection === "scissors")
                {
                    result = "It's a tie!";
                }
    }
    return result;
}



