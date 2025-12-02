function User(email,password){
    
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(val){
            this._email = val
        }
    })
    
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(val){
            this._password = val
        }
    })

    // in old-school classes write the getter-setter first, then store values in main variables
    this.email = email;
    this.password = password;
}

const prabh = new User("prabh@gmail.com",'chai');
const prince = new User("prince@gmail.com",'123');

console.log(prabh.email);