// CLASSES CAME AFTER ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    
    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai","chai@gmail.com","1234"); // object made
console.log(chai.encryptPassword()); // 1234abc
console.log(chai.changeUsername()); // CHAI


// BEHIND THE SCENES // old-school method

function User(username, email ,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea","chai@gmail.com","1234"); // object made
console.log(tea.encryptPassword()); // 1234abc
console.log(tea.changeUsername()); // TEA