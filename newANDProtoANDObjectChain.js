//In Javascript, everything is object. For ex: array

//functional object aka function object (i.e., f)
//recommended to use UpperCase letter for prototype

//prototype (similar as classes) //functional approach of defining the object
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };
};

//add properties/functions
//injecting from outside without touching actual definition
//new keyword find these definitions and injects it in the user object
User.prototype.getFirstName = function(){
    //firstName has to be available otherwise it gives undefined
    console.log(`Your firstname is : ${this.firstName}`);
}

//whenever there is a construtor involved, there is NEW keyword involved
//new invokes constructor and creates new instance every time

//new makes the function call as non-regular i.e., why 
// this keyword points the (inside of the) User instead of the global/window object

var sweta = new User("sweta", 2); //creating object //unique
console.log(sweta); //without new, output is undefined
sweta.getCourseCount();

//OBJECT CHAIN //PROTOTYPE CHAINING
//access the properties of the __proto__  
if(sweta.hasOwnProperty("firstname")){ //for precaution
    sweta.getFirstName();
}

var ananya = new User("ananya", 4); //instance/copy of the prototype
console.log(ananya);
ananya.getCourseCount();
ananya.getFirstName();

// __proto__ or [[Prototype]] is the super super constructor (of the object)
// and you can override its properties or inject own properties into it

// Access/override the properties of the __proto__ as they are directly available to you
var arr = [2,3,4];
arr.length = 7;
console.log(arr.length); //its not arr.prototype.length