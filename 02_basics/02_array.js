const marvel_heroes = ["Thor","Ironman","Spiderman"];
const dc_heroes = ["Superman","Flash","Batman"];

// marvel_heroes.push(dc_heroes); // it gives dc_heroes as an element of marvel_heroes // it means that 2 arrays aren't merged properly
 
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]) // Superman

// const heroes = marvel_heroes.concat(dc_heroes); // combines two arrays // returns a new array // doesnt affect the original array
// console.log(heroes);

// using spread-operator (preferred more than concat because we can add more than 2 array as well)
const allHeroes = [...marvel_heroes,...dc_heroes];
console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realAnotherArray = anotherArray.flat(Infinity); // returns new array, concat inner arrays
console.log(realAnotherArray);

console.log(Array.isArray("Prabh"));
console.log(Array.from("Prabh")); // converts to array
console.log(Array.from({name: "Prabh"})); // gives empty array [INTERESTING]

// Making array from variables
let score1 = 100;
let score2 = 200;
let score3 = 300;
const scoreBoard = Array.of(score1,score2,score3);
console.log(scoreBoard);