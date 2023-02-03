//Falsy values (are those that are treated as false) :-
// i)  undefined : declared but not assigned a value
// ii) null : assigned empty i.e., no value
//iii) 0
// iv) " "  Empty Strings
// v)  NaN i.e., Not a Number

// Truthy values are everything apart from falsy values

// console.log(2+"2"); here 22 is printed because js assumes the left 
// operand as a string too i.e., the given statement is assumed as console.log("2"+"2");


var user = "2";

// === is used for strict checking the condition otherwise js will assume/check loosely
// by doing type coercion ( i.e., the process of automatic or implicit conversion of values from one data type to another)

if (2 === user) {
    console.log("condition is true");
}