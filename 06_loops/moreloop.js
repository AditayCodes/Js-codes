// for of loop

//array
const arr =[1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
}

console.log("-----------------------------------------------");


//string
const st ="aditay code"
for (const str of st) {
    console.log(`char are ${str}`);
}

console.log("-----------------------------------------------");

//object
/*
const myobj = {
    n1: "adi",
    n2:"code"
}
for (const [key, value] of myobj) {
    console.log(key,value);                    //TypeError: myobj is not iterable
}
*/


// for in loop
const obj ={
    js:"javascript",
    py: "python",
    cpp: "c++",
}

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
    console.log(`${key} is of ${obj[key]}`);
}


console.log("-------------------------------------------------");



// for each loop
//tp-1
const coding = ["java", "py", "js", "cpp", "kotlin"]
coding.forEach(function (value) {
    console.log(value);
})
console.log("------------------------------------------------------------");


//tp-2
coding.forEach( (value) => {
    console.log(value);
})
