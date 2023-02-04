//template strings
var aka = "sweta";
var naam = `sweta`;

//" " is the usual way of defining strings
// The backslash (\) escape character turns special characters into string characters
var name1 = 'sweta\'s';
var name2 = "sweta\"s";

// backticks `` are known as string literals
//no need to escape characters i.e., inject ' or " directly
 var name3 = `sweta's`;
 var name4 = `sweta"s`;

 //interpolation
var fullName = `${aka} Kumari`;

//string works like arrays
console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith('a'));
console.log(fullName.includes("sweta"));
console.log(fullName.toUpperCase());