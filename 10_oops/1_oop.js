
// Object Oriented Programming (OOP) in JavaScript

const user = {
    username: "Aditay",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details ");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

}

const userOne = new User("Aditay", 18, true)
const userTwo = new User("AdiCode", 11, false)

console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);