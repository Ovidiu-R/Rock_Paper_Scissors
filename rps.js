const choices = ["rock", "paper", "scissors"];
playGame();

function playGame() {
    let result = 0;
    for (let i=0; i<5; i++) {
        result += playRound (getComputerChoice(), getHumanChoice());
    }
    console.log (result);
    if (result >= 3) {
        console.log ("Winner, winner, chicken dinner!");
    }   else {
        console.log ("Ooof, you got smashed bruv");
    }
}

function playRound (computerSelection, humanSelection) {
    if (computerSelection === humanSelection) {console.log("Try again!"); playRound (getComputerChoice(), getHumanChoice());}
        else if (computerSelection === "rock" && humanSelection === "paper"){console.log("You Win! Paper beats Rock"); return 1;}
        else if (computerSelection === "rock" && humanSelection === "scissors"){console.log("You Lose! Rock beats Scissors"); return 0;}
        else if (computerSelection === "scissors" && humanSelection === "paper"){console.log("You Lose! Scissors beats Paper"); return 0;}
        else if (computerSelection === "scissors" && humanSelection === "rock"){console.log("You Win! Rock beats Scissors"); return 1;}
        else if (computerSelection === "paper" && humanSelection === "scissors"){console.log("You Win! Scissors beats Paper"); return 1;}
        else if (computerSelection === "paper" && humanSelection === "rock"){console.log("You Lose! Paper beats Rock"); return 0;}


}

function getComputerChoice () {
    // const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor (Math.random()*choices.length);
    console.log(choices[randomIndex]);
    return (choices[randomIndex]);
}

function getHumanChoice() {
    let choice = prompt("Throw rock, paper or scissors!");
    let choiceFixed = choice.toLowerCase();
    if (!choices.includes(choiceFixed)) {
        console.log("What the hell is that? Make a real move!");
        getHumanChoice();
    } else {
        console.log(choiceFixed);
        return choiceFixed;
    }
}