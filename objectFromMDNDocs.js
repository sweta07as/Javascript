// The Object type represents one of JavaScript's data types
// Nearly all objects in JavaScript are instances of Object
// A typical object inherits properties (including methods) from Object.prototype, although these 
// properties may be shadowed (a.k.a. overridden)

//formal approach of defining object
var User = {
    name : "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    }
};

var sweta = Object.create(User);
console.log(sweta);
sweta.name = "Sweta Kumari";
sweta.getUserName();

var ana = Object.create(User, {
    name: {value: "anana"},
    courseCount: {value: 3}
});

ana.getUserName();
