//Signelton object
const t1 = new Object()
console.log(t1);

// Non-Singelton object
const t2 = {}
console.log(t2);



const t3 = {}
t3.id = "12a"
t3.name = "Adi"
t3.email="abc@i.com"
console.log(t3);


const user = {
    email: "abc@gooogle.com",
    fullname: {
        username: {
            firstname: "aadi",
            lastname:"sharma",
        }
    }
}

console.log(user);
console.log(user.fullname);
console.log(user.fullname.username);
console.log(user.fullname.username.firstname);



//join 

const ob1 = {1:"a",2:"b"}
const ob2 = {3:"a",4:"b"}
const ob3 = {5:"a",6:"b"}

//Wrong way
const ob4 = { ob1, ob2 }
console.log(ob4);

//Correct but not used more
const ob5 = Object.assign({}, ob1, ob2, ob3)
console.log(ob5);

//Mostly used
const ob6 = { ...ob1, ...ob2 }
console.log(ob6);

//output on array type
console.log(Object.keys(t3));
console.log(Object.values(t3));
console.log(Object.entries(t3));

console.log(t3.hasOwnProperty('email'));


// destructure

const course = {
    coursename: "100 devs",
    price: 1999,
    courseTeacher:"Harkirat"
}

//Basic call
console.log(course.courseTeacher)

//Type-1
const { courseTeacher } = course
console.log(courseTeacher);

//Destructred
const { courseTeacher:Teacher } = course
console.log(Teacher);

