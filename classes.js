//class is a blueprint used to create objects
//Uppercase letter is used in the name of a class
class User{
    // In javascript, its not necessary to declare those things
    //that are declared/used inside the constructor

    // name = "";

    //constructor is a method that runs as soon as the object is being created
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    // # is used to create private variables
    #courseList = [];

    //method
    getInfo(){
        return {name: this.name, email: this.email};
    }

    //setter is a method which is used to manipulate variables
    //setter have some parameter  
    enrollCourses(name){
        this.#courseList.push(name);
    }

    //getter is a method which helps to grab private info of the class
    //getter have no parameter  
    getCourseList(){
        return this.#courseList;
    }

    login(){
        return "logged in";
    }

    //static keyword is used to make method private i.e., cannot be inherited 
    static logout(){
        return "logged out";
    }
}

//creating object in the same file as of the class
// let sweta = new User("sweta", "sweta@gmail.com");

//keeping class seperate and using them in another file
module.exports = User;  

//PRIVATE PROPERTIES, GETTERS AND SETTERS
const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourses("Angular");

console.log(rock.getCourseList());
console.log(rock.courseList); //gives undefined because private variables cannot be accessed outside the class 

//INHERITANCE
//to inherit properties of a class, become child of that class
class SubAdmin extends User{

    //constructor overriding
    constructor(name, email){ 
        super(name, email); //super is used to call the constructor of the parent class
    }

    getAdminInfo(){
        return "subadmin";
    }
    
    //method overriding
    login(){
        return "login for admin only";
    }
}

const anana = new SubAdmin("anana", "ana@gmail.com");
console.log(anana.getAdminInfo());
console.log(anana.login()); //method overriding
// console.log(anana.logout()); //not accessible //not defined
console.log(anana.getInfo());