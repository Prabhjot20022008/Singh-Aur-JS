// *************  FUNCTION  *************



function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
}
// sayMyName();

// NOT USING RETURN 
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

// addTwoNumbers(); // NaN
// addTwoNumbers(3,4); // 7
// addTwoNumbers(3, "4"); // 34

// // these two require aren't good practice
// addTwoNumbers(3,"a"); // 3a
// addTwoNumbers(3,null); // 3

const result = addTwoNumbers(3,5);
// console.log("Result: ",result); // undefined bcoz nothing is returned from the addTwoNumbers

// USING RETURN 
function addTwoNum(num1,num2){
    return num1+num2;
    console.log("Prabh"); // nothing executed after return 
}
const output = addTwoNum(1,2);
// console.log("Result: ",output); // 3, bcoz return used in addTwoNum


function loginUserMessage(userName="XYZ"){
    if(!userName){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged-in`;
}

console.log(loginUserMessage("Prabhjot"));
console.log(loginUserMessage()); // undefined or XYZ if we give default-parameter