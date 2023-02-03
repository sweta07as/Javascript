// fill method fills all of the values of the array with that particular element that you are passing in the ( ) of fill.
// In the ( ) of fill, first argument tells about what you want to fill, second one tells the start position/index, third one tells the end position/index.

// In most of the programming, whenever you are passing up a range, start range is inclusive and end range is exclusive.

var testArray =[2,4,6,3,1,5,9,8];
console.log(testArray.fill("h", 2, 5)); 

const myNumber = [24,25,46,55,53,62,76];

// filter method uses callback of arrow function as the argument and is used to build new/another array from a given array where everything that is filtered 
// out (i.e., not deleted) satisfies the condition given in ( ) of filter. Callback is passed in the ( ) of filter
const result= myNumber.filter((num) => num < 55);
console.log(result);