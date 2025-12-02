const User = {
    
    get email(){
        return this._email.toUpperCase();
    },
    
    set email(value){
        this._email = value;
    },

    _email: "prabh@gmail.com",
    _password: "abc",
}

const tea = Object.create(User);
console.log(tea.email) // it goes to email setter // works even if there is no email property