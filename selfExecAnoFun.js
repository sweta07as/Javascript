// functional programming
// i) we keep our functions and data totally seperate
// ii) try to avoid state change i.e., avoid change i.e., don't reuse
// iii) functions can be declared/stored in the variable, passed and returned in a function

// self executing anonymous function aka IIFE
// function that call itself immediately after its declaration

(function (){
    console.log("Hello");
    console.log("Hello again");
}) ();