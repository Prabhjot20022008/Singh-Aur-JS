// ****** TRUTHY - FALSY *******
// const userEmail = "prabh@singh.com";
const userEmail = [];

if(userEmail){
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// Falsy Values are:
// false, 0, -0, 0n (BigInt), null, undefined, NaN, ""

// Truthy Values are:
// "filled string", "0", 'false', " ", [], {}, function(){},


if(userEmail.length===0){
    console.log("Array is empty");
}


const emptyobj = {};

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): used in case of null or undefined // to handle error from databases

let val1;
val1 = 5 ?? 10; // very first correct value will be taken
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 15;
console.log(val1); // 15

val1 = null ?? 10 ?? 20; //10 // if null then very next value will be taken
console.log(val1);

// ****** TERNARY-OPERATOR ******
const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log("Expensive") : console.log("Cheap");