// const declares variable as constant (i.e., constant variable) and it cannot be reassigned.
// Helps in keeping the data in the variable unique.
const uid = "234sj";

var fullName = "Sweta Agrawal";
var email = "swetaagrawal71099@gmail.com";
var pass = "wegh123";
var confirmpass = "wegh123";
var courseCount = 0;

//Longer variable name is good and acceptable.
var isLoggedInFromGoogle = false;

// to take input from user :- 
// i) alert: pop-up box comes up from the webpage. 
// ii) prompt: to use this, its needed to attach file with a webpage.
    //For example:- fullName = prompt("Enter your name");

// console.log( ) is used to display the information. 
console.log(uid);
console.log(email);

//Combination of custom string and variable is done in two ways:
//  console.log("Full Name is: " + fullName) OR console.log("Full Name is: " , fullName)
console.log("Full Name is: " + fullName);


// ` ` are called backticks or backquotes.
// Used in the ( ) of console.log( ) to print as it is, where variables can be inserted inside ${ } of  ` `  
// This is called interpolation.
console.log(`
With Unique ID: ${uid}
User is: ${fullName}
and her email is: ${email}
and uses this password: ${pass}
`);

