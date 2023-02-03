var email=true;
var fb=false;
var google=true;

// if (email) {
//     console.log("login success");
// } else if (fb) {
//     console.log("login success");
// } else if (google) {
//     console.log("login success");
// } else{
//     console.log("Login failed");
// }

if(email || fb || google){
    console.log("Login Success");
}
