//Logical Operators i.e., Logical AND (&&) and Logical OR (||) can be 
// used to combine conditions of if block.

var isLoggedIn= true;
var isEmailVerified= false;
var validCardInfo= true;

// if (isLoggedIn) {
//     console.log("logged in success");
//     if (isEmailVerified) {
//         console.log("email verified");
//         if (validCardInfo) {
//             console.log("you can make a purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && validCardInfo) {
    console.log("Allow user to make a purchase");
} else{
    console.log("Not allowed to make a purchase");
}