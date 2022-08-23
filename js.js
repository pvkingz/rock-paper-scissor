console.log("Hello World!")

/* 
1. create play arrays [Rock, paper, scissor]
2. Player inputs rock paper or scissor
3. Computer randomly chooses between 1-3
4. Compare answers
*/

const getComputerChoice = () => {
    const arrOfChoices = ["Rock", "Paper", "Scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You tied! You both picked rock"
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        return "You tied! You both picked scissor"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! You both picked paper"
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "You lost! Rock crushes scissor"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost! Paper covers rock"
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "You lost! Scissor cuts paper"
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "You won! Scissor cuts paper"
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "You won! Rock crushes scissor"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won! Paper covers rock"
    } 
}


