// Immediately Invoked Function Expression (IIFE)


// IIFE // first () is for function declaration, second () is for function execution

// Named IIFE
(function chai(){
    console.log("DB CONNECTED");
})(); // use ;  to end IIFE

// ARROW x IIFE
((name) => {
    console.log(`DB CONNECTED TWO, ${name}`)
})("Prabh");