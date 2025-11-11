// let myName = "prabh     "
// let myChai = "chai        "

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

// INJECTING NEW METHOD TO OBJECT [HIGHEST HIERARCHY LEVEL IN JS]
Object.prototype.hitesh = function(){
    console.log(this); // returns current context // the varaible on which the method is used
    console.log("Hitesh is present in all objects");
}

heroPower.hitesh(); // works fine

myHeros.hitesh(); // works on array as well, bcoz array is also an object 


// INJECTING NEW METHOD IN ARRAY [LOWER IN HIERARCHY THAN OBJECT]
Array.prototype.prabh = function(){
    console.log("Prabhjot Singh");
}

myHeros.prabh(); // works fine for array only // not in same hierarchy level // BHAI BHAI SHARE NHI KARTE
// heroPower.prabh(); // object doesn't have access to method of array



// INHERITANCE
const User = {
    username: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// MODERN-SYNTAX
Object.setPrototypeOf(TeachingSupport,Teacher) // (kisko, kiski)



// MAKING A SPECIFIC METHOD FOR STRING ONLY
let anotherUsername = "ChaiAurCode      ";

String.prototype.trueLength = function(){
    console.log(`${this}`); // ChaiAurCode
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"Hitesh".trueLength();
"iceTea".trueLength();