

// let myName = "Aditay     "
// let myclg = "Bcet     "

// console.log(myName.trueLength);


let myHeros = ["kohli", "sachin", "dhoni", "rohit", "virat"]

let heroPower = {
    kohki: "Chase",
    virat: "Batting",

    getviratPower: function(){
        console.log(`Virat power is ${this.virat}`);
    }
}

Object.prototype.adi = function(){
    console.log(`Adi says hello`);
}

Array.prototype.heyAdi = function(){
    console.log(`Adi says hello to array`);
}

heroPower.adi()
myHeros.adi()
myHeros.heyAdi()
//heroPower.heyAdi()      TypeError: heroPower.heyAdi is not a function

// inheritance

const User = {
    name: "Aditay",
    email: "adisharma@google.com"
}

const Content = {
    makeVideo: true
}

const Video = {
    isAvailable: false
}

// old syntax
Content.__proto__ = User

// modern syntax

Object.setPrototypeOf(Video, Content)

let anotherUsername = "AditaySharma      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"AdiCode".trueLength()
"Developer".trueLength()