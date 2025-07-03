//Normal call
/*
let a = 300
const b = 200
var c = 100
console.log(a);
console.log(b);
console.log(c);
*/


// scope

let a= 500

if (true) {
    let a = 300
    const b = 200
    var c = 100
    console.log("Inner ",a);
    
}
//console.log(a); //ReferenceError: a is not defined
//console.log(b);   //ReferenceError: b is not defined

console.log(a);
console.log(c);


//Nested scope

function first() {
    const id = "Adi"
    
    function second() {
        const media = "whatsapp"
        console.log(id);
    }
    //console.log(media);     //ReferenceError: media is not defined
    
    second()
}
first()