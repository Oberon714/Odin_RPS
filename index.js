

let playerScore = 0
let compScore = 0
function comp_choices() {
    const random_choice = Math.floor(Math.random() * 3);
    if (random_choice === 0) {
        return "rock";
    }
    else if (random_choice === 1) {
        return "paper";
    }
    else { return "scissors"; }
}


function player_choice() {
    return prompt("Please enter your choice, Rock, Paper, Scissors: ").toLowerCase()

}

function gameRound(comp, player) {
    if (
        (player === "rock" && comp === "scissors") ||
        (player === "paper" && comp === "rock") ||
        (player === "scissors" && comp === "paper")
    ) {
        playerScore++;
        return "You earn a point";
    } else if (
        (comp === "rock" && player === "scissors") ||
        (comp === "paper" && player === "rock") ||
        (comp === "scissors" && player === "paper")
    ) {
        compScore++;
        return "You lose this round";
    } else {
        return "It's a tie";
    }
}


function playGame() {
    while (playerScore < 5 && compScore < 5) {
        const enemy = comp_choices();
        const player = player_choice();
        const result = gameRound(enemy, player);

        console.log("Computer chose: " + enemy);
        console.log("Player chose: " + player);
        console.log(result);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    }

    if (playerScore === 5) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("The computer won the game. Better luck next time!");
    }
}

// Start the game
playGame();