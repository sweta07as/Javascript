// There are just three major things in any given language: array, objects, loop 
// For api and databases also, you need those three things


// Array is a collection of data.
// Array counting starts from zero.

// ( ) parentheses [ ] brackets { } braces

// Two ways to define and declare Array :
// i) var name = [ “Sweta”, “Aditya” ] ;
// ii) var  name = new Array( “Sweta”, “Aditya” ) ; //object oriented approach //moreover a friendly approach



// var countries = ["India","USA","Japan","Russia"];
// var states = new Array("Bihar", "Mumbai", "Assam", "Goa");
// console.log(states[0]); //accessing element of array
// console.log(states.length); //no. of elements in the array
// states[0]= "Punjab"; //replacing value in array
// console.log(states); //access array


// pop method removes/dumps the last value in the array. For ex: name.pop( );
// Similarly, push method adds value at the very end of the array. For ex: name.push(”us”);
// unshift method is used to add value at the very front and shift rest values.
// Similarly, shift method is used to remove value at the very front and shift rest values.



var user = ["sweta","sweta@gmail.com", 3, 34, true];
// console.log(user);

// user.pop();
// user.pop();
 console.log(user);
// user.push("new end");
console.log(user);
// user.unshift("new front");
console.log(user);
// user.shift();
console.log(user);

// indexOf method gives the index of the input value. And if the value is not in the array then it gives -1. 
console.log(user.indexOf("sweta"));
console.log(user.indexOf("checkit"));

// from method is used to convert into array
console.log(Array.from("sweta"));