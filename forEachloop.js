const myStates= [
    "Bihar",
    "Maharashtra", 
    "Goa", 
    1947,
    "Delhi",
    "Punjab"
];

// for each is not considered technically as a loop but actually as a method on the array
// for each takes a callback of arrow function
// It goes through automatically with each element

// myStates.forEach( (s) => (console.log(s)) );
myStates.forEach(s => console.log(s)); //gives same output