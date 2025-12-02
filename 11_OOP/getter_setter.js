class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    // getter and setter must be used together
    get password(){ // it gives output to the user
        return `${this._password}hitesh`; // using _password is not any keyword // it is just another name given to prevent stack overflow
    }

    set password(val){ // takes input from the user
        this._password = val;
    }

    get email(){ // using Email instead of email just to prevent stack overflow
        return this.Email.toUpperCase();
    }
    set email(val){
        this.Email = val
    }
}

const prabh = new User("prabh@gmail.com","abc");

console.log(prabh.password);
console.log(prabh.email);