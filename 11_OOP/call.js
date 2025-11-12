function setUserName(username){
    // complex DB calls
    this.username = username;
    console.log(this.username) // now it prints "chai" // bcoz now it has the context of createUser
    console.log("called");
}


function createUser(username,email,password){
    setUserName.call(this,username) // now the function is called // explicitally calling with reference // this gives current context to setUserName
    
    this.email = email;
    this.password = password;
}


const chai = new createUser("chai","chai@fb.com","1234");

// console.log(chai); // object doesn't have username without this and call
console.log(chai) // now done with using THIS and CALL
console.log(chai.username); // gives undefined