// GENERATE A RANDOM COLOR

const randomColor  = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;
}

console.log(randomColor());
console.log(Math.floor(Math.random()*16))

let interval;

const startChangingColor = () => {
    if(!interval){
        interval = setInterval(changeBgColor,1000);
    }

    function changeBgColor () {
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor());
    }
}

const stopChangingColor = () => {
    clearInterval(interval);
    interval = null; // flushed out or dereferenced
}

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);