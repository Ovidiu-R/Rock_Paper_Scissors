
playGame();

function playGame() {
    for (let i=0; i<5; i++) {
        let result = playRound (getComputerChoice(), getHumanChoice());
        console.log(result);
        console.log("test1");
        
    }
}

function playRound (computerSelection, humanSelection) {
    console.log("test4");
    if (computerSelection === humanSelection) {return "Try again!"}
        else if (computerSelection === "rock" && humanSelection === "paper"){console.log("You Win! Paper beats Rock")}
        else if (computerSelection === "rock" && humanSelection === "scissors"){console.log("You Lose! Rock beats Scissors")}
        else if (computerSelection === "scissors" && humanSelection === "paper"){console.log("You Lose! Scissors beats Paper")}
        else if (computerSelection === "scissors" && humanSelection === "rock"){console.log("You Win! Rock beats Scissors")}
        else if (computerSelection === "paper" && humanSelection === "scissors"){console.log("You Win! Scissors beats Paper")}
        else if (computerSelection === "paper" && humanSelection === "rock"){console.log("You Lose! Paper beats Rock")}


}

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor (Math.random()*choices.length);
    console.log(choices[randomIndex]);
    return (choices[randomIndex]);
}

function getHumanChoice() {
    let choice = prompt("Throw rock, paper or scissors!");
    console.log(choice.toLowerCase());
    return choice ? choice.toLowerCase() : null;
}