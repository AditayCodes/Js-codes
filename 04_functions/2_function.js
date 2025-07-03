//calling 

function calc(n) {
    return n
}
console.log(calc(200,400,500));


//Array type all data

function cal(a,...n) {
    return n
}
console.log(cal(200,400,500,1000));


//Function call as  Object

const use = {
    name: "Adi",
    email:"adi@.xyz"
}
function handleObject(obj) {
    console.log(`name is ${obj.name} and mail id is ${obj.email}`);
}
handleObject(use)


//If object name is change then prblm 
const us = {
    name: "Adi",
    emails:"adi@.xyz"
}
function handleObj(ob) {
    console.log(`name is ${ob.name} and mail id is ${ob.email}`);   //email is undefined
}
handleObj(us)


//Function call by Array

const myArray = [100, 200, 300, 400, 500]

function returnValue(getArray) {
    return getArray[1]
}
console.log(returnValue);
console.log(returnValue(myArray));
console.log(returnValue([200,400,500]));

