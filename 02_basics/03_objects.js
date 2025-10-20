// singleton
// Object.create

const mySym = Symbol("key1");

// object literals
const jsUser = {
    name: "Prabhjot",
    "full name": "Prabhjot Singh",
    [mySym]: "myKey1",
    age: 17,
    location: "India",
    email: "prabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// How to access data in objects
console.log(jsUser.name);
console.log(jsUser["email"]);

// Why use second method for accessing data ?
// console.log(jsUser.full name) // not possible to access full name
console.log(jsUser["full name"]); // only way to access full name

// console.log(typeof jsUser.mySym); // use symbol as string // make symbol in [] to use as symbol
console.log(jsUser[mySym]);

// HOW TO OVERRIDE VALUES
jsUser.email = "prabh@gpt.com";
console.log(jsUser.email); // prabh@gpt.com

// Object.freeze(jsUser); // Prevents override data stored in object
jsUser.email = "prabh@ms.com"; // change doesn't occur as jsUser got freezed
console.log(jsUser.email); // still prabh@gpt.com

console.log(jsUser); // gives complete data of jsUser object

// firstly unfreeze the object to add greeting
jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

console.log(jsUser);