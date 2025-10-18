const userName = "Prabhjot";
const repoCount = 50;

// Older Syntax (AAM ZINDAGI)
// console.log(userName + repoCount + " Value");

// New Syntax (MENTOS ZINDAGI)
console.log(`My name is ${userName} and my repo-count is ${repoCount}`);

const gameName = new String("Prabh-Play"); //  gives key-value pairs
console.log(gameName);
console.log(gameName[0]); // P
console.log(gameName.__proto__); // {} // prototype

console.log(gameName.length) // 10 [length of string]
console.log(gameName.toLowerCase()) // prabh-play [lowercase] 
console.log(gameName.toUpperCase()) // PRABH-PLAY [Uppercase] 

console.log(gameName.charAt(0)); // P
console.log(gameName.indexOf('y')); // 9 [find index of character]

const newString = gameName.substring(0,4); // includes 0, but excludes 4 
console.log(newString); // Prab

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "     Prabh ";
const modifyString1 = newString1.trim();
console.log(newString1);
console.log(modifyString1);

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh')); // true
console.log(url.includes('prabh')); // false

const myId = "prabh-play-123";
console.log(myId.split('-')); // gives an array seperated by -