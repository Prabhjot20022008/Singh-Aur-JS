class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username); // automatically sends to parent class
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}


const chai = new Teacher("chai","chai@teacher.com","123");
chai.addCourse();
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();
// masalaChai.addCourse(); // addCourse is not a function of masalaChai // parent doesn't take from child

console.log(chai === masalaChai); // false
console.log(chai === Teacher); // false


// CHECK IF A CLASS IS INSTANCE OF ANOTHER
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
