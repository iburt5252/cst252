// Author Ish B//
//Created 3-2-2021//
//License: Public Domain//

//Task2:Put a comment block at the top of your program
//Create a new element with document.createElement("p") and assign it to a variable new1El
//Change the html attribute of new1El to say something new.
//Create another new element and assign it to a variable new2El
//Change the html attribute of new2El to say something else.
//Append both new elements one at a time using appendChild()
//Change the css attributes of at least two elements of your page//

var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

var new1El = document.createElement("p");
new1El.innerHTML = "My name is Ish";

var new2El = document.createElement("p");
new2El.innerHTML = "I am new to Javascript";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "blue";
outputEl.style.border = "solid 3px magenta";
outputEl.style.backgroundColor = "darkGrey"
outputEl.style.marginTop = "70px";
outputEl.style.paddingLeft = "20px"
