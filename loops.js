const myStates= [
    "Bihar",
    "Maharashtra", 
    "Goa", 
    1947,
    "Delhi",
    "Punjab"
];

// Usually let variables are used to loop through values of for AND while AND dowhile loops.
// continue keyword is to keep on continuing, where for a particular condition do not execute the rest of the code in the block
// break keyword is used to stop the whole execution as soon as it matches the condition.
// break and continue are for scope

// strict inequality operator: !==

for (let index = 0; index < myStates.length; index++) {

    // if(typeof myStates[index] !== "string") continue;
    // console.log(myStates[index]);

    if(typeof myStates[index] === "string") continue;
    console.log(myStates[index]);

    // if(typeof myStates[index] !== "string") break;
    // console.log(myStates[index]);

    // if(typeof myStates[index] === "string") break;
    // console.log(myStates[index]);
    
}