// usually const variables are used to loop through values of forof and forin loops.

// For of is majorly used with the array
const names =["youtube","facebook","google","instagram","telegram"];

for(const n of names){
    console.log(n);
}


// For in is majorly used with the objects
const symbols ={
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    lco: "learnCodeOnline.in"
}

for(const n in symbols){
    // console.log(n); //to give keys as the output
    // console.log(symbols[n]); //to give values as the output
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}