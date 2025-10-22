var c = 300;
let a = 100;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER: ", a); // 10
}

console.log("OUTER: ",a); // 100 bcoz of SCOPE-dependent
// console.log(b);
console.log(c); // 30, bcoz var isn't scope-dependent [so, AVOID VAR]
