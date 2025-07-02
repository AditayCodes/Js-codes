// singleton
Object.create

//object literals

const myS = Symbol("k1")

const JsUser = {
    name: "Aditay",
    "full name": "Aditay Sharma",
    [myS]: "key",
    age: 20,
    location: "Kolkata",
    email: "adicode@gmail.com"
}

console.log(JsUser.age);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[myS]);

JsUser.email = "Aditaysharma@google.com"
console.log(JsUser.email);
Object.freeze(JsUser);
JsUser.email = "change@gmail.com";
console.log(JsUser.email);


//Function call


const JsUser2 = {
    name: "Aditay",
    "full name": "Aditay Sharma",
    [myS]: "key",
    age: 20,
    location: "Kolkata",
    email: "adicode@gmail.com"
}

JsUser2.greet = function () {
    console.log("Hello JavaScript ");
}
JsUser2.greet2 = function () {
    console.log(`Hello JavaScript ,${this.name}`);
}

console.log(JsUser2.greet);
console.log(JsUser2.greet());
console.log(JsUser2.greet2());

