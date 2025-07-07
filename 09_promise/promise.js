

//promises are used to handle asynchronous operations in JavaScript.
// A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.


//type-1

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 2000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


//type-2
/*
 Async task 2
 This is also a promise, but we are not using the promise constructor here.
 We are using the Promise constructor to create a new promise, but we are not using the
 promise object to handle the async task.
 This is just a simple async task that will resolve after 1 second.
*/

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

/*
 Async task 3
 This is a promise that will resolve after 1 second and return an object with username and email.
 We are using the promise constructor to create a new promise and we are using the resolve function
 to return the object after 1 second.
*/

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Code", email: "adicode@adi.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


/* Async task 4
This is a promise that will resolve after 1 second and return an object with username and password.
We are using the promise constructor to create a new promise and we are using the resolve function
*/

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Aditay", password: "189"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// Async task 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//type-1

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//type-2

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

