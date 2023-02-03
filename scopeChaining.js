// Context and scope are referenced from memory reservation and call up the memory

// Variable object collects information about the code and have scoping systems i.e., global scoping and execution context scoping

// As we know, function is also known as method.

// { } this is a empty scope i.e., curly braces technically means scope. 
// In the world of JS, only { } tied to a function is truly considered as scope.

// Remember ice cream/popsicle story for scope chaining concept.

var myName="Sweta";
console.log("line no. 2", myName);

function sayName() {
    var myName="as";
    console.log("Line no. 6", myName);

    sayName2();
    function sayName2() {
        // var myName="agrawal";
        console.log("Line no. 10", myName);
    }
}
sayName();