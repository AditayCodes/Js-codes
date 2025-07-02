// Array 

//Method-1
const arr = [0, 1, 2, 3, 4, 5, 6, "Adi"]
console.log(arr);
console.log(arr[7]);

//Method-2
const myarr = new Array(1, 2, 3, 4, 5)
console.log(myarr);

//Methods of Array

myarr.push("code")
console.log(myarr);

myarr.push(18)
console.log(myarr);

myarr.pop()
console.log(myarr);

myarr.unshift(9)
console.log(myarr);

myarr.shift()
console.log(myarr);

console.log(myarr.includes(5));
console.log(myarr.indexOf("code"));

const newarr = myarr.join()
console.log(typeof(newarr));


// slice, splice  on of the most important

const garr = new Array(0, 1, 2, 3, 4, 5)

console.log("A ", garr);
const marr1 = garr.slice(1, 3)

console.log(marr1);
console.log("B ", garr);

const marr2 = garr.splice(1, 3)
console.log("C ",garr);
console.log(marr2);
