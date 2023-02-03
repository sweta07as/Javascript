// In most of the programming, whenever you are passing up a range, start range/point is inclusive and end range/point is exclusive

// In the ( ) of slice method, first argument tells the start position/index and second one tells the end position/index
var users = ["Tom", "Kim", "Sam","Pam","Sid","Ted"];
console.log(users.slice(1,4));  
console.log(users.slice(2));
console.log(users);


// In the ( ) of splice method, first argument tells the start position/index, second one tells the count value and third one 
// provides the element that is inserted only once after deletion of the values from the start position till the count, similarly 
// fourth and fifth and etc ones can also be inserted once
users.splice(1,3,"anana","sweta","anjoli","shmbhvi");
console.log(users); // splice() permanently modifies the array on which it is called

//console.log(users.splice(1,4,"anana","sweta","anjoli","shmbhvi")); //this syntax is wrong