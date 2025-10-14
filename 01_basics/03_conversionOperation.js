// let score = undefined // NaN 
// let score = null // NaN
let score = "prabh"

console.log(typeof(score)) // string

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) // number
console.log(valueInNumber) // NaN


// "33" => 33
// "33abc" => NaN (Not a Number) // type -> Number
// true => 1; false =>0

let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);
console.log(typeof boolIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "prabh" => true

let number = 33;

let stringNumber = String(number);
console.log(stringNumber)
console.log(typeof stringNumber) // string 

// ********************** Operations ********************************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+3); // 5
console.log(2-3); // -1
console.log(2*3); // 6
console.log(2/3); // 0.6666666
console.log(2%3); // 2
console.log(2**3); // 8

// SOLVING STRING CONFUSIONS
let str1 = "Hello"
let str2 = " Prabhjot"

let str3 = str1 + str2;
console.log(str3); // Hello Prabhjot

console.log("1"+2) // 12
console.log(1+"2") // 12

console.log("1"+2+2) // 122
console.log(1+2+"2"); // 32

console.log(3+4*5%3); // 5 // it is good for problem-solving
// rather use parenthisis for better understanding 

// SOME TRICKY THINGS THAT ARE NOT PREFERRED IN REAL-WORLD CODING
console.log(-true); // -1
// console.log(true+) // gives error
console.log(+""); // 0

let num1,num2,num3
num1 = num2 = num3 = 2+2;
console.table([num1,num2,num3]) // prevent assigning useless variables

let gameCounter = 100

console.log(++gameCounter); // 101
console.log(gameCounter++); // still 101
console.log(gameCounter); // now becomes 102
console.log(--gameCounter) // 101
console.log(gameCounter--) // still 101
console.log(gameCounter) // now becomes 100