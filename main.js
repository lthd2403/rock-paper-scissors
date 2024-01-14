document.addEventListener("DOMContentLoaded", function() {
    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");
    const choices = document.querySelectorAll(".buttonclass");

    let player;
    let computer;

    choices.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerChoice();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    }));

    function computerChoice() {
        const randNum = Math.floor(Math.random() * 3);

        switch(randNum) {
            case 0:
                computer = "Rock";
                break;
            case 1:
                computer = "Paper";
                break;
            case 2:
                computer = "Scissors";
                break;
        }
    }

    function checkWinner() {
        if (player === computer) {
            com = computer.toLowerCase();
            return "Draw! " + player + " ties " + com;
        } 
        else if (computer === "Rock") {
            return (player === "Paper") ? "You win! Paper beats rock." : "You lose! Rock beats scissors.";
        } 
        else if (computer === "Paper") {
            return (player === "Scissors") ? "You win! Scissors beats paper." : "You lose! Paper beats rock.";
        } 
        else if (computer === "Scissors") {
            return (player === "Rock") ? "You win! Rock beats scissors." : "You lose! Scissors beats paper.";
        }
    }
});