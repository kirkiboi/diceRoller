const dicePhoto = document.querySelectorAll(".dice-photo");
const playButton = document.querySelector(".play-button");
const diceRolledPrompt = document.querySelector(".rolled-dice-prompt");
const winnerPrompt = document.querySelector(".winner-container");
const music = document.querySelector(".winner-music");
let diceRolled = [];
playButton.addEventListener("click", ()=>{
    diceRolledPrompt.style.display  = "block";
    winnerPrompt.style.display = "none";
    let diceRolled = [];
    dicePhoto.forEach(dice =>{
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        dice.style.backgroundImage = `url(images/diceNumber${randomNumber}.png)`;
        diceRolled.push(randomNumber);
    });
    diceRolledPrompt.textContent = `you rolled ${diceRolled.join(", ")}`;
    if(diceRolled[0] === 6 && diceRolled[1] === 6 && diceRolled[2] === 6){
        diceRolledPrompt.style.display  = "none";
        winnerPrompt.style.display = "block";
        let hideContainer = document.querySelector(".component-container");
        hideContainer.style.display = "none";
        music.play();
    }
});
