//  Best conversion

console.log(2 > 1);
console.log(2>=1);


//      Wrong conversion

console.log("2">1);
console.log("02">1);

//      With null

console.log(null>0);        //f
console.log(null==0);       //f
console.log(null>=0);       //t

//  Undefined 

console.log(undefined == 0);
console.log(undefined> 0);
console.log(undefined >= 0);

// undefined and null

console.log(undefined == null);
console.log(undefined >= null);
console.log(undefined > null);
console.log(undefined === null);

/// === strictly check

console.log("2"===2);
