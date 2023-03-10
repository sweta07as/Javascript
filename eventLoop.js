//event loop
//classic way of how JS executes
//i.e., how the queue is being emptied out
//i.e., synchronous
//https://www.google.com/amp/s/www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/amp/

const uno = () => {
    console.log("I am One");
};

const dos = () => { 
    setTimeout(() => {
        console.log("Woohoooo");
    }, 3000);
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

uno();
dos();
tres();
