// In CSS, its background-color
//In calculating computed properties, its backgroundColor

//Below code is for console, not for node

//finding/selecting the element
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center"); 

//getComputedStyle is used to grab style properties of an element
// console.log(window.getComputedStyle(red).backgroundColor); //always gives rgb value

const getBGColor = (selectedELement) => {
    return window.getComputedStyle(selectedELement).backgroundColor;
};

// console.log(getBGColor(pink));


//EVENT LISTENER 
// style is to implemement
// getComputedStyle is to grab

// var color = getBGColor(pink);
// pink.addEventListener("mouseenter", () => {
//     center.style.backgroundColor = color;
// });

const colorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = color;
    });
};

colorChanger(red, getBGColor(red));
colorChanger(cyan, getBGColor(cyan));
colorChanger(violet, getBGColor(violet));
colorChanger(orange, getBGColor(orange));
colorChanger(pink, getBGColor(pink));