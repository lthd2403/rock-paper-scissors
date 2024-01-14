const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceButton = document.querySelectorAll(".buttonClass");

let player;
let computer;
let result;

choiceButton.forEach(button => button.addEventListener("click", () => {
    player = playerText.textContent;
    computerChoice();
    
}))

function ComputerChoice(){
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