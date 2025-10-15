//  Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Number
const score = 100
const scoreValue = 100.3 

// String
const name = "Prabhjot"

// Boolean
const isLoggedIn = false

// null
const outsideTemp = null

// undefined
let userEmail;
let userMobile = undefined;

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false

// BigInt 
const bigNumber = 35326743578701023526n


// Reference (Non-Primitive) [return type is Object]
// Array, Object, Function

// Array
const heroes = ["Shaktimaan","Naagraj","Doga"];

// Object
let myObj = {
    name:"prabh",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Hello World");
}

console.log("PRIMITIVE DATATYPES");
console.log(typeof score); // number
console.log(typeof name); // string
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint

console.log("NON-PRIMITIVE DATATYPES");
console.log(typeof myFunction); // function (function-object)
console.log(typeof myObj); // object