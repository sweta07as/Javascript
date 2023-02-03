// Once the value is returned, rest of the code(of function block) after return statement never actually executes.

// Both works same :-
// function getUserRole(name, role){ } is function
// var getuserRole= function(name, role){ } is a function in variable

var getuserRole = function(name, role) {
    switch (role) {
        case "admin":   
            return `${name} is admin with all access`;
            break; 
        case "subadmin":   
            return `${name} is subadmin with access to create and delete courses`;
            break;
        case "testprep":   
            return `${name} is a testprep with access to create and delete tests`;
            break;
        case "user":   
            return `${name} is a user to consume content`;
            break;
        
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getuserRole("sweta", "testprep"));

var getRole = getuserRole("aditya","user");
console.log(getRole);