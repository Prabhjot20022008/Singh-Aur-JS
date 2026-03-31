function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

export {add,subtract,multiply,divide};

console.log("INSIDE MODULE1:",divide(5,4)); // we can continue writing code even after export statement

const calculator = (a,b) => {
    console.log(`Addition: ${add(a,b)}`)
    console.log(`Subtract: ${subtract(a,b)}`)
    console.log(`Multiplication: ${multiply(a,b)}`)
    console.log(`Division: ${divide(a,b)}`)
}

export default calculator; // we can have only one default export in a module. We can export a function, class, variable etc. as default export. We can import the default export using any name we want. We don't need to use curly braces while importing the default export.

const a = 5;
const b = 4;
export {a,b}; // we can also export variables, functions, classes etc. using named exports. We can have multiple named exports in a module