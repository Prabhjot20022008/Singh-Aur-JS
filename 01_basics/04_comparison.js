// **************** BASIC-COMPARISON *******************

console.log(2>1); // true
console.log(2>=1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// **************** COMPLEX PART ******************
// (try to avoid such complex unnecessary conversion in real-world)
console.log("2">1);
console.log("02">1);

console.log(null > 0); // false  (> treats null as 0)
console.log(null == 0); // false (== treats null as NaN) 
console.log(null >= 0); // true  (>= treats null as 0) 

console.log(undefined==0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false


// STRICT CHECK (checking datatypes and values both)

console.log("2"==2); // true
console.log("2"===2); // false
