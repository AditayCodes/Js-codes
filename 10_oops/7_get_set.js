// Getters and Setters in JavaScript


//Type-1
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
        //this.email = value        // This would cause a stack overflow
    }

    get password(){
        return `${this._password}adicode`
    }

    set password(value){
        this._password = value
    }
}

const val = new User("adi@sharma.com", "adicode123");
console.log(val.password);
console.log(val.email);



//Properties based on getters and setters
// This is a way to create properties that are not directly stored in the object
// but are derived from other properties or values.

//Type-2
function User1(email, password){
    this._email = email;
    this._password = password

    // Using Object.defineProperty to create getters and setters
    // This allows us to define properties with custom behavior
    // without using the class syntax.

    Object.defineProperty(this, 'email', {  
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const ch = new User1("adisharma@adi.com", "adisharma123")

console.log(ch.password);
console.log(ch.email);