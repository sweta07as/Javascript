// Operators are + , - , / , * , %
//var num1 = 5;
//var num2 = 8;
// console.log(num1%num2);

// variable name should not start with a number. For ex: 2num

// Other operators include > and <
// var answer = num1>num2; 
// console.log(answer);  //gives boolean value i.e., either true or false

var sellingPrice = 199;
var listingPrice = 799;
// There is no bodmas here so do use parentheses as required.
// Everything goes accord. to operator precedence and that of parenthesis is 18 which is the highest, so ( ) gets the highest priority.
var discountPercent= ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount Percentage is:" + discountPercent);

// Variables can be declared and initialized without the var keyword. 
// However, a value must be assigned to a variable declared without the var keyword. 
// The variables declared without the var keyword become global variables, irrespective of where they are declared.
displayDiscountPercentage = Math.round(discountPercent);

// console.log( ) has a property to take everything whatever is inside and dump on screen. 

// There are many modules and libraries. One such is Math. One of its methods is round
// Math.round(num); turns num rounded off to its nearest integer (where num stores a decimal number)

console.log(displayDiscountPercentage + "% off" );
// console.log("Discount Percentage is: " + Math.round(discountPercent));

var result = sellingPrice<listingPrice;
console.log(result);
// typeof is a keyword and also an operator and it gives the data type of the variable
console.log(typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence