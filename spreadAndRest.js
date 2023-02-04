//Spread Operator AND Rest Operator
// ...args 

// var maximum = Math.max(4, 7, 2, 8);
// console.log(maximum);

// var myObj = {};

// Object.assign(myObj, {a: 4, b: 7, c: 8}, {x: 9, y:1, z: 2});
// console.log(myObj);


function sumOne(a, b) {
    return a+b;
}

// when function expects individual values but your value comes as a pack/bunch
//then spread operator is used
var arr = [5, 4, 1]; //ignores extra values
console.log(sumOne(...arr)); //spread operator //takes a group and spread it into multiple values

//when you don't know the number of arguments, then rest operator is used
//and i.e., use ...args, where it is an array so we need to loop through it

function sumTwo(a, b, ...args) {
    console.log(args); //converts individual values into an array
    let prod = a*b;
    let sum = 0;
    //we can use for each too instead of for of
    for (const arg of args) {
        sum += arg;
    }
    return [sum, prod];
}

console.log(sumTwo(2, 3, 6, 7, 8)); //a is 2, b is 3, remaining is args

//spread and rest are reverse of each other