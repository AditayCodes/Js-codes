//For loops

for (let i = 0; i < 11; i++) {
    const element = i;
    console.log(element);
}
console.log("-------------------------------------------------------------");


//Nested loops

for (let i = 0; i < 10; i++) {
    console.log(`outer value is ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop ${j} and outer loop is ${i}`);
    }
}

console.log("-------------------------------------------------------------------");

//break statement

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log(`out from loop ${index}`);
        break;
    }
    console.log(`values are ${index}`);
}

console.log("----------------------------------------------------------");


//continue statement

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log(`out from loop ${index}`);
        continue;
    }
    console.log(`values are ${index}`);
}