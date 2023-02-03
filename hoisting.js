// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution

// A variable object is simply an object storing data related to an execution context.
// A variable object is abstract and special, it cannot be accessed in code but it is handled by JavaScript engine.

// There are two types of major contexts available to us :-
// 1) Global Context : Collects information for everything and about everything. Window object is tied majorly with the browser 
// 2) Execution Context i.e., one that is executing right now. It comes and goes away as it runs lines of code or block of code

//Three major features in execution context are : -
// 1) Variable Object 
// 2) Scope Chain
// 3) this

//Two rules are followed whenever there is an execution context:-
// 1. Function declarations are scanned and made available. (that's why no error if function is called before its coding)
// 2. Variable declarations are scanned and made undefined. (that's why function in variable gives error if called before its coding)

console.log(myName); //if variable not available, then output: error
var myName ="sweta"; //since variable is available, that's why output of above code is: undefined

function sayName(){
    var myName ="AS";
    console.log(myName);
}
sayName(); //prints AS
console.log(myName); //prints sweta

tipper(80);
function tipper(a) {
    var bill = parseInt(a); //parseInt() method parses a string argument and converts it into an integer value
    console.log(bill + 5);
}
tipper("5");
tipper("a");  

bigTipper("200");
var bigTipper=function(a) {
    var bill=parseInt(a);
    console.log(bill + 15);
}