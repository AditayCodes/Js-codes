
// This code demonstrates the use of the `call` method to set properties in a constructor function.

function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

// Output:
const aa = new createUser("Adi", "as15@code.com", "8666")
console.log(aa);
console.log(aa.username); // Output: Adi
console.log(aa.email); // Output: