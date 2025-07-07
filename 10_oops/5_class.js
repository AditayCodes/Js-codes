// ES6
// Class is a blueprint for creating objects
// It is a syntactical sugar over the prototype-based inheritance in JavaScript

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const us = new User("Aditay", "adisharma@gmail.com", "111")

console.log(us.encryptPassword());
console.log(us.changeUsername());


// behind the scene
//Same but using prototype
// It is the same as the above class but using function and prototype

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const me = new User1("Code", "coder@gmail.com", "555")

console.log(me.encryptPassword());
console.log(me.changeUsername());

