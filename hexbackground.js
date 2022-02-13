/* Selects elements in the html */
let body = document.querySelector("body");
let hex = document.querySelector("#hex");
let button = document.querySelector("button");
/* Array for each hex value */
let hexArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
/* Random function that generates a random index from the hexArray */
function random(){
    return Math.floor(Math.random()* 15)
}
/* Function that generates new hex */
function randomArray(){
    /* Variable declared for random position in hexArray */
    /* Generate random array of hex digits */
    let newHexArray = [hexArray[random()], hexArray[random()], hexArray[random()], hexArray[random()], hexArray[random()], hexArray[random()]];
    /* Convert newHexArray to string using a template */
    return `#${newHexArray.join("")}`
}
/* Button changes hex color span and background color to 
that hex color */
button.addEventListener("click", function(){
    let newHex = body.style.backgroundColor = randomArray();
    hex.textContent = newHex;
})