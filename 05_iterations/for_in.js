// FOR-IN LOOP

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObj){
    // console.log(`${key} : ${myObj[key]}`);
}

const programming = ["js","ruby","Python","java","cpp"];

for(const key in programming){
    // console.log(key); // gives index
    // console.log(programming[key]); // gives value
}


const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of America");
map.set("FR", "France");
map.set("IN", "India");

// NOT POSSIBLE FOR MAP

// for(const key in map){
//     console.log(key);
// }