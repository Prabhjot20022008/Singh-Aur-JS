const user = {
    username : "Prabhjot",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); //this signifies current context (values)
        console.log(this); // current context (values)
    }

}

// user.welcomeMessage();

// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);


// ****** THIS x FUNCTIONS ******

// function chai(){
//     let username = "Hitesh";
//     console.log(this.username); // undefined
// }
// chai();


// const chai = function (){
//     let username = "Hitesh";
//     console.log(this.username); // undefined
// }
// chai();


// const chai = () => {
//     let username = "Hitesh";
//     console.log(this.username); // undefined
// }
// chai();

// ******* ARROW-FUNCTION *******
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,4)); // 7

// IMPLICIT RETURN (without using return keyword)

const addTwo = (num1,num2) => (num1+num2);

// const addTwo = (num1,num2) => ({username: "hitesh"}); // example

console.log(addTwo(3,4)); // 7


const myArray = [2,4,3,6,8];
// myArray.forEach() 