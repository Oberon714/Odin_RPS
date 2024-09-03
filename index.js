

let playerScore = 0
let compScore = 0

const btns = document.getElementById("btnBox")
btns.addEventListener("click", running)

//AI choice
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


//Game Round
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

    function running(choice) {
       const playerChoice = choice.target.id;
    if (["rock", "paper", "scissors"].includes(playerChoice)) { // Ensure it's one of the valid choices
        const enemy = comp_choices();
        const result = gameRound(playerChoice, enemy); // Play a round
        
        // Display the result of the current round
        document.getElementById('result').textContent = "Result: " + result;
        
        // Track and display the score after every button press
        document.getElementById('score').textContent = "Player Score: " + playerScore + ' : ' + "Computer Score: " + compScore;
        
        // Check if either player or computer has reached 5 points
        if (playerScore >= 5) {
            document.getElementById('result').textContent = "Congratulations! You won the game!";
            // Disable buttons to prevent further play
            btns.removeEventListener("click", running);
        } else if (compScore >= 5) {
            document.getElementById('result').textContent = "The computer won the game. Better luck next time!";
            // Disable buttons to prevent further play
            btns.removeEventListener("click", running);
        }
    }
};
