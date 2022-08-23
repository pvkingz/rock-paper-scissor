console.log("Hello World!")



let playerScore = 0;
let compScore = 0;

const getComputerChoice = () => {
    const arrOfChoices = ["rock", "paper", "scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `You tied! You both picked ${playerSelection}`
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        compScore++;
        return "You lost! Rock crushes scissor"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        return "You lost! Paper covers rock"
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        compScore++;
        return "You lost! Scissor cuts paper"
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore++;
        return "You won! Scissor cuts paper"
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerScore++;
        return "You won! Rock crushes scissor"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You won! Paper covers rock"
    } 
}


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock paper or scissor", "CHOOSE NOW").toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > compScore) {
        return "You won, you are cool!"
    } else if (playerScore < compScore) {
        return  "You lost, you suck!"
    } else {
        return "You tied...."
    }
}


console.log(game())
