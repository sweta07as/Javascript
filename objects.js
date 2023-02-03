// difference: object use { } and array use [ ]

// Object is a collection of key value pairs
// Objects are more flexible and more optimized as compared to array 
// Everything in the object is accessed by keys. Inside { }, LHS are keys and RHS are values

var user = {
    firstName : "Sweta",
    lastName : "Agrawal",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true
};

console.log(user.firstName); //common way to access
console.log(user["lastName"]); //complex way to access

console.log(user.loginCount);
user.loginCount= 44; //modify
console.log(user.loginCount);

console.log(user); //most popular method is log
console.table(user); //creates table
