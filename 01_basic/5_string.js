const na = "Aditay"
const sh = "Sharma"
console.log(na + sh+ "code");   // Wrong syntax not prefaerred

console.log(`Hello my name is ${na} ${sh}`);    

// String methods *****

const name = new String('Aditaycode');
console.log(name[0]);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.indexOf('a'));


const getName = name.substring(0, 5)
console.log(getName);

const setName = name.slice(-8, 5)
console.log(setName);

const newSt = "    Adi   "
console.log(newSt);
console.log(newSt.trim());

const url = "https://Aditay.com/Aditay#20Sharma"
console.log(url.replace('#20', '-'));

console.log(url.includes('Code'));
console.log(url.includes('itay'));


const newStr=new String ('Adi-Sharma-code')
console.log(newStr.split('-'));
