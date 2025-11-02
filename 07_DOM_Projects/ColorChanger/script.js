const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(buttons);
// console.log(body);

buttons.forEach((btn) =>{
    // console.log(btn);
    btn.addEventListener("click",(e) =>{
        console.log(e);
        console.log(e.target); // gives the button clicked
        body.style.backgroundColor = e.target.id;
        body.style.color = "Black";
    });
});