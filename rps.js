document.addEventListener('DOMContentLoaded', () => {
const choices = ["rock", "paper", "scissors"];
let buttons = document.querySelectorAll("button");
let roundResult = document.getElementById('roundResult');
let score = document.getElementById('score');
let winner = document.getElementById('winner');
let scores = {player: 0, computer: 0};
let restart = document.getElementById('restart');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'gold';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
    });
    button.addEventListener('click', (e) => {
        playGame(e.target.id);
    });
});

function playGame(button_id) {
        playRound (getComputerChoice(), getHumanChoice(button_id));
        if (scores.player >= 5){
            winner.textContent = "Player wins!";
            reset(scores);
        } else if (scores.computer >= 5){
            winner.textContent = "Computer wins!";
            reset(scores);
        }
}

function playRound (computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {
        roundResult.textContent = "Try again!"; 
        return playRound (getComputerChoice(), getHumanChoice());
    }
        else if (computerSelection === "rock" && humanSelection === "paper"){
            roundResult.textContent = "Paper beats rock!";
            scores.player++;
            score.textContent = `${scores.player} - ${scores.computer}`;
        }
        else if (computerSelection === "rock" && humanSelection === "scissors"){
            roundResult.textContent = "Scissors get smashed by rock!";
            scores.computer++;
            score.textContent = `${scores.player} - ${scores.computer}`;
        }
        else if (computerSelection === "scissors" && humanSelection === "paper"){
            roundResult.textContent = "Paper loses to scissors!";
            scores.computer++;
            score.textContent = `${scores.player} - ${scores.computer}`;
        }
        else if (computerSelection === "scissors" && humanSelection === "rock"){
            roundResult.textContent = "Rock smashes scissors!";
            scores.player++;
            score.textContent = `${scores.player} - ${scores.computer}`;
        }
        else if (computerSelection === "paper" && humanSelection === "scissors"){
            roundResult.textContent = "Scissors turn paper to ribbons!";
            scores.player++;
            score.textContent = `${scores.player} - ${scores.computer}`;
        }
        else if (computerSelection === "paper" && humanSelection === "rock"){
            roundResult.textContent = "Rock gets snuffed by paper!";
            scores.computer++;
            score.textContent = `${scores.player} - ${scores.computer}`;
        }


}

function getComputerChoice () {
    let randomIndex = Math.floor (Math.random()*choices.length);
    return (choices[randomIndex]);
}

function getHumanChoice(button_id) {
        return button_id;
               
}


});

function reset(scores){
    restart.removeAttribute('hidden');
    restart.addEventListener ('click', () => {
        restart.setAttribute("hidden", "hidden");
        scores.player = 0; 
        scores.computer = 0;
        roundResult.textContent = "Rock, paper, scissors, shoot!";
        score.textContent = `${scores.player} - ${scores.computer}`;
        winner.textContent = "";
    });
}    