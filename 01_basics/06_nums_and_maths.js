const score = 400;

const balance = new Number(100);

console.log(balance);
console.log(score);

console.log(balance.toString()); // balance becomes string
console.log(balance.toFixed(2)); // 100 => 100.00


const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // 124 (it rounds off to fix the precision)

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 10,00,000 [converts to Indian(local) System]


// *******************  MATHS  *********************

console.log(Math); // gives in-built Math object
console.log(Math.abs(-4)); //  absolute value, |-4| => 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4

// min and max used for finding min or max in a given array
console.log(Math.min(4,3,6,1)); // 1
console.log(Math.max(4,3,6,1)); // 6

// RANDOM (generates a random number between 0 to 1)
console.log(Math.random()); 

console.log(Math.floor((Math.random()*10))+1); 
console.log(Math.floor((Math.random()*10))+1); 
console.log(Math.floor((Math.random()*10))+1); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);