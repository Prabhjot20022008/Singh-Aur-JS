class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){ // prevent access of property // kind of encapsulating data from User
        return `123`
    }
}

const prabh = new User("Prabh");
// console.log(prabh.createId());


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const hitesh = new Teacher("hitesh","hitesh@chai.com");
hitesh.logMe();
console.log(hitesh.createId()) // inaccessible in derived class as well