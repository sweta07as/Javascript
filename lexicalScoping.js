// lexical scoping is the classical way of writing JavaScript

//init is short for initialization
function init(){
    var firstName = "sweta";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}

init();
console.log(firstName); //not defined since the context is over