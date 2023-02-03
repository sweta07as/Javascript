//defining method/function inside object

var user = {
    firstName : "Sweta",
    lastName : "Agrawal",
    role: "admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],

    buyCourse: function (courseName) {  
        this.courseList.push(courseName); //can't use user. since we are already inside user object //Here, this refers to the user
    },

    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    info: function() {
        return `
        first name is ${this.firstName}
        last name is ${this.lastName} 
        role is ${this.role}
        login count is ${this.loginCount} 
        facebook signedn in is ${this.facebookSignedIn}
        course number is ${this.courseList.length}`;
    }
};

var courseList = true;

console.log(user.getCourseCount());
user.buyCourse("ReactJS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());

console.log(user.info());
console.table(user);

