//Author Ish B//
//Created 3-2-2021//
//License: Public Domain//


var titleEl = document.getElementById("change-me");
console.log("Here's da title:", titleEl);

var buttonEl = document.getElementById("my-button");
console.log("Here's da button:", buttonEl);

var inputEl = document.getElementById("my-input");
console.log("Here's da input feild:", buttonEl);

button.addEventListener("click", function(){
  var name = inputEl.value;

}


buttonEl.addEventListener("click", function(){
  var name = prompt("What's your name?");
  var titleEl = document.getElementById("changeme");
  console.log("Title element:", titleEl);
  titleEl.innerText = "Hello, "+ name
}
