// https://api.chucknorris.io/

//Nowadays, APIs are handled in JSON format

//making web request means to take everything of the API in a variable

//cannot run on the node environment
//can run on the console

fetch("https://api.chucknorris.io/") //always returns a promise (to then() or to catch())
//if a promise is resolved then, .then() can be chained (i.e., to handle positive response)
//otherwise .catch() is used (i.e., to handle negavtive response)
.then((response) => {
    //readable stream of response needs to be converted into JSON to make it readable
    return response.json();  //gives a promise
})
.then(() => {
    // console.log("DATA: ", data);
    var joke = data.value;
    console.log("JOKE: ", joke);
})
.catch();

