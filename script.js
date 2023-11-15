let playerScore = 0;
let computerScore = 0;
let playerSelection = "choice";
let result = "<br>";

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

    result += `Player scored ${playerScore} out of 5<br>`;
    result += `Computer scored ${computerScore} out of 5<br>`;


    if (playerScore === 5 || computerScore === 5)
    {
        if (playerScore > computerScore)
        {
            result += "<br><strong>Player Wins the Game with 5!</strong>";
        }
        else if (computerScore > playerScore)
        {
            result += "<br><strong>Computer Wins the Game with 5!</strong>";
        }
        else
            result += "<br><strong>The Game is a tie with 5 points each!</strong>";

        playerScore = 0;
        computerScore = 0;

    }

    document.getElementById('result').innerHTML = result;
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
            return alert("uh oh, something's gone wrong");
    }

}

function playRound(playerSelection, computerSelection)
{
    result = `<br>You selected ${playerSelection}<br>`;
    result += `Computer selected ${computerSelection}<br>`;

    if (playerSelection === "rock")
    {
        if (computerSelection === "paper")
        {
            result += "You lose! Paper beats Rock<br>";
            computerScore++;
        } else
            if (computerSelection === "scissors")
            {
                result += "You win! Rock beats Scissors<br>";
                playerScore++;
            }
        if (computerSelection === "rock")
        {
            result += "It's a tie!<br>";
        }
    }

    else if (playerSelection === "paper")
    {
        if (computerSelection === "scissors")
        {
            result += "You lose! Scissors beats Paper<br>";
            computerScore++;
        } else
            if (computerSelection === "rock")
            {
                result += "You win! Paper beats Rock<br>";
                playerScore++;
            } else
                if (computerSelection === "paper")
                {
                    result += "It's a tie!<br>";
                }
    }

    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            result += "You lose! Rock beats Scissors<br>";
            computerScore++;
        } else
            if (computerSelection === "paper")
            {
                result += "You win! Scissors beats Paper<br>";
                playerScore++;
            } else
                if (computerSelection === "scissors")
                {
                    result += "It's a tie!<br>";
                }
    }
    return result;
}



