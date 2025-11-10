const user = {
    username : "Prabhjot",
    loginCount : 8,
    signnedIn : true,

    getUserDetails: function(){
        console.log("Got user details from DB");
        // console.log(username); // undefined
        console.log(this.username);
        console.log(this);
    }

}

// for(const key in user){
//     console.log(`${key} : ${user[key]}`);
// }


// user.getUserDetails();
// console.log(this); // empty {} in node environment // window {} in browser



// FUNCTION --> CLASS // WITH A PROBLEM
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this; // we can get value implicitally even without returning value
}

// without using new keyword // problem occurs
// const user1 = User("prabh",4,true);
// const user2 = User("ChaiAurCode",11,false); // user2 overrides value in user1 
// console.log(user1);


// with using new keyword // it gives a new instance or copy
const user1 = new User("prabh",4,true);
const user2 = new User("ChaiAurCode",11,false); // user2 doesnot override value in user1 
// console.log(user1);
// console.log(user2);

console.log(user1.constructor); // gives the User function // gives reference of itself