//when you define a simple object, there are some properties attached to the entire object
//and when a method is defined inside the object, there are properties attached to the method
//all these properties are known as prototype properties

const sweta = {
    firstName: "sweta",
    lastName: "kumari",
    role: "admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        Her role is ${this.role}
        and she is studying ${this.courseCount} courses
        `);
    }
};

// sweta.getInfo();

const ana = {
    firstName: "anana",
    lastName: "sharan",
    role: "sub-admin",
    courseCount: 4
};

// ana.getInfo(); //error as the function is not defined in the ana object

//borrowing of the method
//bind always returns the reference of the method and you have to run/call that reference manually
var anaInfo = sweta.getInfo.bind(ana); //this now points to ana object
anaInfo();

sweta.getInfo.bind(ana)(); //works same as above two lines of code

sweta.getInfo.call(ana); //call directly calls the method unlike bind