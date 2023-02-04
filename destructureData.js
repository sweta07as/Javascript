// destructure the data means to pick the data 

// const user = ["sweta", 3, "admin"];
// var role = user[2];
// var name = user[0];
// console.log(role);

//In arrays, for destructuring, data types of LHS and RHS should be similar
// var [name, courseCount, role] = user;
// console.log(role);

const myUser = {
    name: "sweta",
    courseCount: 3,
    role: "admin"
};
console.log(myUser.courseCount);

//In objects, for destructuring:-
// i) data types of LHS and RHS should be similar
// ii) names should match i.e., same as it is in the object

const {name, courseCount, role} = myUser;
console.log(courseCount);