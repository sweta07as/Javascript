// var isEven = function(element){ ... } can also be written as var isEven = (element) => { .... } 
// i.e., by replacing function keyword with arrow =>

//arrow function
var isEven = (element) => { 
    // if (element%2===0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0; //without return keyword output is undefined
}
// console.log(isEven(2));


// every() method uses arrow function as the argument and it acts as an AND OPERATION (from sets theory) 
// var result= [2,3,6,8].every(isEven);  //function is referenced not called  //array is directly used without declaring variable for it 
// console.log(result);

// In callback of arrow function, return keyword is required when { } are used and not required when ( ) are used.
var result= [2,3,6,8].every((e) => (e % 2 === 0));  //here, we let element as e  
console.log(result);                               //(e) => (e%2===0) is the callback of arrow function //callback don’t have a name.
