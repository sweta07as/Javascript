// For all regular function calls, this points to window ( or global) object. In case of node, points to global empty object

// Access is given to (i.e., output is) the entirety of the object in case of function called through an object

// Examples to differentiate regular and not-regular function calls:
// i) regular function call: sayHello( );
// ii) object call (function call through an object) (not regular) : user.getCourseCount( );



console.log(this);

var user = {
    firstName : "Sweta",
    courseCount: 4,
    getCourseCount: function () {
        console.log("line7", this);
        function sayHello(){
            console.log("hello");   
            console.log("line10", this);
        }
        sayHello();
    }
};

user.getCourseCount();