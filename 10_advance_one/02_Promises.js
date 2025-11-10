// PROMISE 

// CREATING PROMISE
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network 
    setTimeout(function(){
        console.log("Async Task is completed")
        resolve()
    },1000);
})

// CONSUMING PROMISE
promiseOne.then(() => { // it directly connects with resolve
    console.log("Promise Consumed");
})


// ANOTHER SYNTAX (DOING ALL IN ONE)
new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    },1000);
}).then(function(){
    console.log("Async Two Resolved");
})


// ACCESSING DATA FROM RESOLVE
const Promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Prabh", email: "prabh@google.com"})
    }, 1000)
})

Promise3.then(function(user){
    console.log(user);
})


// USING BOTH RESOLVE AND REJECT AND CHAINING ALSO
const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Prabh", password: "1234"});
        }
        else{
            reject("Error! Something went wrong");
        }
    }, 1000)
})

promiseFour
.then((user) => { // linked with resolve
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(err){ // linked with reject
    console.log(err);
})
.finally(() => { // always gets executed
    console.log("The promise is either resolved or rejected");
})


// PROMISE USING ASYNC-AWAIT
const promise5 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "JavaScript", password: "12345678"});
        }
        else{
            reject("Error! JS went wrong");
        }
    }, 1000)
})

// CAN'T HANDLE ERROR DIRECTLY USING ASYNC-AWAIT
// async function consumePromise5() {
//     const response = await promise5;
//     console.log(response);
// }

// HANDLING ERROR USING TRY-CATCH BLOCK
async function consumePromise5() {
    try{
        const response = await promise5;
        console.log(response);
    } catch (err){
        console.log(err);
    }
}

consumePromise5();


// LEVEL-UP

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); // await used as it takes time to fetch data
//         const data = await response.json(); // it takes time to convert to json, so used await
//         console.log(data);
//         // console.log(response);
        
//     } catch(err){
//         console.log("Error : ",err);    
//     }
// }

// getAllUsers();


// DOING THE SAME USING then-catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((res) => {
    return res.json();
})
.then((data) => console.log(data))
.catch((err) => console.log(err))