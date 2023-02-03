// this is a keyword. It gives access to the global context by running the code given below
// To find out what is your global context and what is inside the global context, run it :- console.log(this);

// And as we know, global context differs in diff. situations. 
// In case of node.js , above code gives { } i.e., empty scope whereas in case of browser, it gives access to window object.

// this simply means the current context or the current reference of the global object.

console.log(this);

var game="basketball";

// function sayName() {
//     var myName="sweta";
//     console.log(this);
// }
// sayName();