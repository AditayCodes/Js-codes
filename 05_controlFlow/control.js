// Basic if else 

const sal = 2000

if (sal <400) {
    console.log("less than 1500");
}else if (sal < 800) {
    console.log("less than 1500");
} else if(sal <1200){
    console.log("less than 1500");
} else {
    console.log("more than 1200");
}


//Switch Case


//Syntax
/*
switch (key) {
    case value:        
        break;
    default:
        break;
}
*/

const month = 5
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    default:
        console.log("another");
        break;
}

/*
falsy values:------- false, 0, -0, BigInt 0n, "", null, undefined, NaN
truthy values:------- "0", 'false', " ", [], {}, function(){} 
*/


//How to check empty array
const mail = ""
if (mail.length === 0 ) {
    console.log("Array is empty");   
}


//How to check empty Object
const id = {}
if (Object.keys(id).length === 0) {
    console.log("Object is empty");
}


//Nullish coalescing Operator (??):null undefined

let v;
v = 5 ?? 10
console.log(v);

let v1;
v1 = null ?? 10
console.log(v1);

let v2;
v2 = undefined ?? 15
console.log(v2);

let v3;
v3 = undefined ?? null
console.log(v3);

let v4;
v4 = null ?? undefined
console.log(v4);