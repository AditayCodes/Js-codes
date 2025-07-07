
// This code demonstrates inheritance in JavaScript using classes.

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// The Master class inherits from User
class Master extends User{
    constructor(username, email, password){
        super(username) // Call the parent class constructor
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create instances of Master and User
const cc = new Master("Aditay", "adisharma@.com", "122")

// Call methods on the instances
cc.logMe()

// Call the method from the Master class
const ask = new User("AditayCoder")

// Call the method from the User class
ask.logMe()

console.log(cc instanceof User);// true
console.log(cc instanceof Master);// true