document.addEventListener('DOMContentLoaded', () => {

const choices = ["rock", "paper", "scissors"];
let humanChoice = "";
let buttons = 0;
let roundResult = "";
let score = "";
let winner = "";

buttons = document.querySelectorAll("button");
roundResult = document.getElementById('roundResult');
score = document.getElementById('score');
winner = document.getElementById('winner');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'gold';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
    });
    button.addEventListener('click', () => {
        getHumanChoice(button.id);
    });
});






function playGame() {
    let scores = {player: 0, computer: 0};
        while (scores.player < 5 && scores.computer < 5){
            playRound (getComputerChoice(), getHumanChoice(), scores);
        }
        if (scores.player > scores.computer){
            winner.textContent = "Player wins!";
        } else {
            winner.textContent = "Computer wins!";
        }
}

function playRound (computerSelection, humanSelection, scores) {
    if (computerSelection === humanSelection) {
        roundResult.textContent = "Try again!"; 
        return playRound (getComputerChoice(), getHumanChoice(), scores);
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

function getHumanChoice(choice) {
        return choice;
               
}

playGame();

});