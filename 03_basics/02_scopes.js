var c = 300;
let a = 100;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER: ", a); // 10
}

// console.log("OUTER: ",a); // 100 bcoz of SCOPE-dependent
// console.log(b);
// console.log(c); // 30, bcoz var isn't scope-dependent [so, AVOID VAR]

// ************ SCOPE ***********

// SCOPE x FUNCTIONS
function one(){
    const username = "Prabh";

    function two(){
        const website = "youtube";
        console.log(username); // in-scope (as two is in one)
    }

    // console.log(website); // out-of-scope

    two(); // two executed

}
one(); // one executed

// SCOPE x IF-ELSE
if(true){
    const username = "Prabh";
    if(username=="Prabh"){
    const website = " youtube";
    console.log(username+website);
    }

    // console.log(website); // out-of-scope
    
}

// console.log(username); // out-of-scope

// ******* INTERESTING ********

// NORMAL - FUNCTION

console.log(addOne(5)); // 6 // still works even before the function itself
function addOne(num){
    return num+1;
}


// EXPRESSION - FUNCTION

//addTwo(5); // ERROR // as function is hoisted in variable
const addTwo = function(num){
    return num+2;
}