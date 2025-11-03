let randomNum = parseInt(Math.random()*100 +1);

console.log(randomNum);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e) =>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess); // gives user input

        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a Valid Number");
    }
    else if(guess<1){
        alert("Please enter a Number greater than 1");
    }
    else if(guess>100){
        alert("Please enter a Number less than 100");
    }
    else{
        prevGuess.push(guess);

        if(numGuess===10){ // game over
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it Right!`);
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
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`; 
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click",(e) => {
        randomNum = parseInt(Math.random()*100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        lowOrHi.innerHTML = "";
        playGame = true;
    });
}