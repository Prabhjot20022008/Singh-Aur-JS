// WHILE-LOOP
let i = 1;
while(i<=10){
    // console.log(`Value of i = ${i}`);
    i = i+2; 
}

let arr = ["flash","batman","Superman"];
let idx = 0;
while(idx<arr.length){
    // console.log(`Superhero : ${arr[idx]}`);
    idx++;
}

// DO-WHILE LOOP // runs atleast once, even if condition is false

let score = 11;
do {
    console.log(`Score = ${score}`);
    score++;
} while (score<=10);