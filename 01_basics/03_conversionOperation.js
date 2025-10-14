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