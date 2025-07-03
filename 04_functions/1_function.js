
function addTwo(num1, num2) {
    console.log(num1+ num2);
}

//Output for function call
addTwo
addTwo()
addTwo(3,4)
addTwo(3,"4")
addTwo(3, null)


//Process-1

function add(num1, num2) {
    console.log(num1+ num2);
}
const result = add(3,5)
console.log("Result", result);


//Process-2

function addTwoNum(num1, num2) {

    //type-1
    let res = num1 + num2
    return res

    //Type-2
    return num1+num2
}
const res = addTwoNum(3,2)
console.log("Result",res);


//Passing argu and para

function login(name) {
    return `${name} logged in the device`
}
console.log((login("Adi")));
console.log(login());



//Check the condition

function logg(name) {
    if (!name) {
        console.log("Please name the person");
        return
    }
    return `${name} logged  the pc`
}
console.log((logg("Adi Sharma")));
console.log(logg());
console.log(logg("Sharma"));

