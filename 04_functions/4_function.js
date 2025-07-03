//this keyword

const user = {
    name: "Adi",
    pass: 123,
    
    welcome: function () {
        console.log(`${this.name} , welcome to India`);
        console.log(this);
        
    }
}
user.welcome()
user.name = "Code"
user.welcome()
console.log(this);
console.log("-------------------------------------------------------------");


//Arrow function

//Tp-1
function adi() {
    let name = "sharma"
    console.log(this.name);
}
adi()


//tp-2
const ad=function () {
    let name = "sharma"
    console.log(this.name);
    //console.log(this);
}
ad()


//tp-3
const as=() => {
    let name = "sharma"
    console.log(this.name);
    console.log(this);
    
}
as()


console.log("-----------------------------------------------");



//Basic array function syntax

const sum = (n1, n2) => {
    return n1+n2
}
console.log(sum(10,8));


//Implicit return

const s = (n1, n2) => n1 + n2
console.log(s(100, 90));

//T-2
const ss = (n1, n2) => (n1 + n2)
console.log(ss(50, 90));


//IIFE

(function ass() {
    console.log(`Connect`);
})();


//TypeError: (intermediate value)(...) is not a function
//for ; 


(() => {
    console.log(`Conn 2`);
})()