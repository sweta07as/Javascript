// var provides leniency i.e., it gives undefined instead of throwing error
// undefined is good for frontend as it does not really block your code
// In backend, its good to have errors and to have errors we should use let keyword

// Majority of programming languages calls { } as a scope BUT Javascript considers function as a scope
// To make the variables declared inside { } not accessible outside of { } , use let keyword
// In loops, let keyword is used

console.log(name); //undefined
var name = "sweta";


if (true) {
    let lastName = "Kumari";
}
console.log(lastName); //error