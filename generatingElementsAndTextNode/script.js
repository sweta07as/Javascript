// injecting values from JS instead of HTML(i.e.,hardcoded)

//In JS, we have:-
// tag is the element
// class is a list of classes
// text is the text node

//its recommmended to name your array as plural
const courses = [
    {
        name: "ReactJS Course",
        price: "2.3"
    },
    {
        name: "Angular Course",
        price: "2.7"
    },
    {
        name: "MERN Course",
        price: "2.4"
    },
    {
        name: "Java Course",
        price: "2.8"
    }
];

function generateList(){
    const ul = document.querySelector(".list-group"); //grabbing ul element
    
    ul.innerHTML = "" //reset the value i.e., removes all of the previous values

    courses.forEach((course) => {

    //creates <li class="list-group-item"></li>
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name); 
        li.appendChild(name); //name added

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    })
}

// generateList();

//reference is passed, method runs automatically
window.addEventListener("load", generateList); //here, it works same as above

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price); //inbuilt method
    generateList();
});