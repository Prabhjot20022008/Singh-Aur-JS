// IF

// const isLoggedIn = true;
// if(isLoggedIn){
//     console.log("User is logged in");
// }

// COMPARISON OPERATORS
// >, <, >=, <=, !=, ==, ===, !==,

// if(2 == "2"){ // true because == used;
//     console.log("Executed");
// }
// if(2 === "2"){ // false because === used;
//     console.log("Executed");
// }

// const temp = 41;

// if(temp<50){
//     console.log("Less than 50");
// } else {
//     console.log("Greater than 50");
// }

// console.log("Executed 100%");

// const score = 200;

// if(score>100){
//     const power = "fly";
//     console.log(`User's Power: ${power}`);
// }
// console.log(`User's Power: ${power}`); // not defined // power out-of-scope


// ***** SHORT-HAND FOR IF-ELSE ******
// const balance = 1000;

// if (balance>500) console.log("Sufficient balance"); // IMPLICIT SCOPE (ONLY FOR SINGLE-LINE) (We can use multiline in this shorthand but it will decrease readability)

// ***** NESTING ******

// if(balance < 500) {
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance <900){
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }

// ****** LOGICAL-OPERATORS ******
const userLoggedIn = true;
const debitCard = true;
const loginGoogle = false;
const loginEmail = true;

if(userLoggedIn && debitCard && 2==2){ // && true if all are true
    console.log("Allowed to buy courses");
}

if(loginGoogle || loginEmail || true){ // true if atleast one is true
    console.log("User Logged In");
}