//promise is an event which might or might not be fulfilled in the future

const uno = () => {
    return "I am One";
};

// const dos = () => { 
//     setTimeout(() => {
//         return "I am Two";
//     }, 3000);
// };

const dos = () => { 
    return new Promise((resolve, reject) => {
    //parameter of resolve can be any data type
        setTimeout(() => {
            resolve("I am Two");
        }, 3000);
    });
};

const tres = () => {
    return "I am Three";
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo); //gives undefined if value is not filled yet

    let valThree = tres();
    console.log(valThree);
};

callMe();