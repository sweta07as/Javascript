//To access the class in Javascript:-
const User = require("./classes");

//creating object
const sweta = new User("sweta", "sweta@gmail.com");
console.log(sweta.getInfo());

sweta.enrollCourses("React");
sweta.enrollCourses("Angular");

console.log(sweta.getCourseList());
let courses = sweta.getCourseList();
courses.forEach((c) => console.log(c));
