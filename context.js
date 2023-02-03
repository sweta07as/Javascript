// JavaScript has a context in which everything resides 
// i.e., all the things are registered inside the context


sayHello();
// Above code doesn't give error because function is registered in global context.
function sayHello() {
    console.log("Hello");   
}

if (2==="2") {
    console.log("this is true");
}

// when code runs in the browser's console, then window is the global context that's why below code doesn't gives error.
// when code is executed by node.js in vs code, here window is not defined that's why below code gives error. 
// Here, global context differs but there is always a global context in js engine 
var myName="sweta";
if (myName===window.myName) {
    console.log("this is again a true statement");
}