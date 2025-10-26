// FOR-LOOP

for (let i = 0; i <= 10; i++) {
    if (i==5){
        // console.log(`${i} is best number`);
    }
    // console.log(i);
}
// console.log(i); // out-of-scope

for(let i=1; i<=10; i++){
    // console.log(`Outer Loop : ${i}`);
    for(let j=1; j<=10; j++){
        // console.log(`Inner Loop : ${i},${j}`);
        // console.log(`${i} X ${j} = ${i*j}`);
    }
}

// LOOP x ARRAY
let arr = ["Flash","Batman","Superman"];
// console.log(`Length : ${arr.length}`);

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(`Superhero : ${element}`);
}

// KEYWORDS

// break // terminates the loop 
for(let i=1; i<=20; i++){
    if(i==5){
        console.log("Break at 5");
        break;
    }
    console.log(`Value of i : ${i}`);
}

// continue // skips current iteration
for(let i=1; i<=20; i++){
    if(i==5){
        console.log("Continue at 5");
        continue;
    }
    console.log(`Value of i : ${i}`);
}