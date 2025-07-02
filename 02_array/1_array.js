const a1 = ["adi", "aarav", "aman"]
const a2 = ["shyaam", "aaruhi"]
a1.push(a2)

console.log(a1);
console.log(a1[3][1]);

 a1.concat(a2)
console.log(a1);


const a3 = a1.concat(a2)
console.log(a3);

const a5 = [...a1, ...a2]
console.log(a5);
