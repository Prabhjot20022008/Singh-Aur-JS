let randomNum = parseInt(Math.random()*100 + 1);

console.log(randomNum);

const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submit");
const guessSlot = document.querySelector("#guessSlot");
const guessCounter = document.querySelector("#guessCounter");
const msg = document.querySelector("#msg");
const endBtn = document.querySelector("#endBtn");

let guessArr = [];
let guessCount = 10;
let playGame = true;


if(playGame){
    submitBtn.addEventListener("click", (e) =>{
        const guess = parseInt(input.value);
        console.log(guess);

        validateGuess(guess);
    });
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid Number`);
    }
    else if(guess<1){
        alert(`Please enter a Number greater than 1`);
    }
    else if(guess>100){
        alert(`Please enter a Number less than 100`);
    }
    else{
        guessArr.push(guess);

        if(guessCount===1){
            displayGuess(guess);
            displayMessage(`Game Over! Random Number was <span style="color: cornflowerblue; margin-left: 0.25rem;">${randomNum}</span>`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess==randomNum){
        displayMessage(`You guesses it right!`);
        endGame();
    }
    else if(guess<randomNum){
        displayMessage(`Number is too low`);
    }
    else if(guess>randomNum){
        displayMessage(`Number is too high`);
    }
}


function displayGuess(guess){
    input.value = "";
    guessSlot.innerHTML += `${guess} `;
    guessCount--;
    guessCounter.innerHTML = `${guessCount}`;
}


function displayMessage(message){
    msg.innerHTML = `${message}`; 
}


function endGame(){
    input.value = "";
    input.setAttribute("disabled","");
    // playGame = false;
    endBtn.addEventListener("click", newGame);
}


function newGame(){
    randomNum = parseInt(Math.random()*100+1);
    guessArr = [];
    guessSlot.innerHTML = "";
    guessCount = 10;
    guessCounter.innerHTML = `${guessCount}`;
    input.removeAttribute("disabled");
    msg.innerHTML = "Message will be displayed here";
    playGame = true;
}