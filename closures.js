function init(){
    var firstName = "sweta";
    console.log("I am init");

    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName; //returning reference to execute it later
}

var value = init(); //since we have the reference, its memory cannot be freed

value(); //closure //calling the returned reference

function doAddition(x){
    return function(y){ //returning reference
        return x+y;
    };
}

var add = doAddition(4); //holding reference
console.log(add(5));

//curring
console.log(doAddition(6)(5)); //works same as above two lines of code