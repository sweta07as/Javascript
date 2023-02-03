// Time Events:-
// i) setTimeout(function, milliseconds);
//once the given time (in ms) is over, function occurs
// ii) setInterval(function, milliseconds);
//infinitely calls a function at specified intervals (in milliseconds) 

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers on Instagram !";
}, 5000);