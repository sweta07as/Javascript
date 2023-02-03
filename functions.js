// Javascript supports a whole lot of functional programming (treating function as variable)

// DOM: Document Object Model
// Referencing a function: sayHello; i.e., without parenthesis
// Calling/Running a function: sayHello( ); i.e., with parenthesis

// Interpolation is highly recommended to inject variables

// There is difference between console.log( ) and return

function sayHello(name){
    console.log("hello, there");
    console.log("hello there,", name);
    console.log(`hello there, ${name}. How are you?`);
}

sayHello("Sweta");
sayHello("Aditya");

function namaste() {
    return "hello in India";    
}

namaste(); //prints nothing

var greetings = namaste();

console.log(greetings);
console.log(namaste()); //result is same as above