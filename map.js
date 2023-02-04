// map() creates a new array from calling a function for every array element

//var obj = new Object(); //stores an empty object of data type Object in obj

//maps works like objects 
var myMap = new Map();
//maps are completely different from objects
//they store key value pair
//key and value can be anything i.e., numbers, strings etc

//set/insert values in the map
myMap.set(0, "one");
myMap.set(2, "two");
myMap.set(3, "three");

console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let value of myMap.values()) {
//     console.log(`Value is ${value}`);
// }

//for of loop always gives key first
for (let [key, value] of myMap) {
    console.log(`Key is ${key} and Value is ${value}`);
}

//in the maps, the keys are considered as indexes

//for each loop always gives value first
myMap.forEach((value) => console.log(`${value}`)); 
myMap.forEach((value, key) => console.log(`Value is ${value} and Key is ${key}`)); 

myMap.delete(2);
console.log(myMap);