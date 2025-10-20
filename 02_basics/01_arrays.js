// array

const myArr = [0,1,2,3,4,5];
const myHeroes = ["Shaktimann","Ironman","naagraj"];

const myArr2 = new Array(1,2,3,4,5);
console.log(myHeroes[0]); // 0

// Array methods

// push and pop makes change in the array 
// myArr.push(6);  // adds in end
// myArr.push(7);
// myArr.pop();  // removes in end


// myArr.unshift(9); // shift adds an element in start
// console.log(myArr);
// myArr.shift();

// console.log(myArr.includes(9)); // false

// console.log(myArr.indexOf(9)); // -1 means not in the array 
// console.log(myArr.indexOf(3)); // 3 

// const newArr = myArr.join(); // changes array to string with comma seperated // works same as toString()
// console.log(typeof newArr); // string

// console.log(myArr);


// // SLICE AND SPLICE
// console.log("A ", myArr);

// // slice doesnot manipulate change in the original array [takes copy of array]
// const myn1 = myArr.slice(1,3); // slice doesnot include the last limit
// console.log(myn1);
// console.log("B ", myArr);

// // splice does manipulate change in the original array [takes reference of array]
// const myn2 = myArr.splice(1,3); // splice includes the last limit as well 
// console.log(myn2);
// console.log("C ", myArr);

const team11 = ["Ansh","Gitansh","Raghav","Prabhjot","Tushar"];
console.log(team11.join(" "));

team11.push("Dildeep");
console.log(team11.join(" "));

team11.push("Raji","Vasu");
console.log(team11.join(" "));

team11.splice(4,3,"Manav");
console.log(team11.join(" "));

team11.splice(2,0,"Lucky","Akaljot","Vaibhav");
console.log(team11.join(" "));