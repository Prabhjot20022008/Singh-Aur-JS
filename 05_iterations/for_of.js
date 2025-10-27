// FOR-OF  LOOP

const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!";

for(const greet of greeting){
    // console.log(greet);
}

// Maps // unique values and same order as given by you
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
map.set("IN", "India");

// console.log(map);

for(const [key,value] of map){
    console.log(key,":",value);
}


const myObj = {
    "Game1" : "NFS",
    "Game2" : "Spiderman"
}
// We can't use FOR-OF in OBJECT

// for (const [key,value] of myObj) {
//     console.log(key,":",value);
// }