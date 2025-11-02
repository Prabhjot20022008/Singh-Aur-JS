const form = document.querySelector(".form");

const button = document.querySelector("button");
// console.log(button);

button.addEventListener("click",(e) => {
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    // console.log(height);
    // console.log(weight);

    if(height==="" || height<0 || isNaN(height)){
        results.innerHTML = "Invalid Height";
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML = "Invalid Weight";
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2);
        // results.innerHTML = `<span>BMI : ${BMI}<span><br>`; // SHOWS RESULT

        if(BMI<18.5){
            results.innerHTML = `<span>BMI : ${BMI}<span><br><span>You're Under-Weight</span>`;
        }
        else if(BMI>=18.5 && BMI<25){
            results.innerHTML = `<span>BMI : ${BMI}<span><br><span>You're Perfectly-Weight</span>`;
        }
        else if(BMI>=25){
            results.innerHTML = `<span>BMI : ${BMI}<span><br><span>You're Over-Weight</span>`;
        }
    }
})