document.addEventListener("DOMContentLoaded", function() {
    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");
    const playerWinText = document.querySelector("#playerWin");
    const computerWinText = document.querySelector("#computerWin");
    const choices = document.querySelectorAll(".buttonclass");
    

    let player;
    let computer;
    let computerWins = 0, playerWins = 0;
    

    choices.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerChoice();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
        playerWinText.textContent = `Player wins: ${playerWins}`;
        computerWinText.textContent = `Computer wins: ${computerWins}`;
        if (computerWins === 5){
            alert("You lose! Try again!")
            window.location.reload();
        }
        else if (playerWins === 5){
            alert("You win! Good job!")
            window.location.reload();
        }
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
            if (player === "Paper") {
                playerWins++;
                return "You win! Paper beats rock.";
            } else {
                computerWins++;
                return "You lose! Rock beats scissors.";
            }
        } 
        else if (computer === "Paper") {
            if (player === "Scissors") {
                playerWins++;
                return "You win! Scissors beats paper.";
            } else {
                computerWins++;
                return "You lose! Paper beats rock.";
            }
        } 
        else if (computer === "Scissors") {
            if (player === "Rock") {
                playerWins++;
                return "You win! Rock beats scissors.";
            } else {
                computerWins++;
                return "You lose! Scissors beats paper.";
            }
        }
    }
})