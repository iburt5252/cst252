// Author Ish Burton//
//Created 3-23-2021//
//License: Public Domain//

function Vehicle(make, model, year, color, extras, name){
  this.make = make;
  this.year = year;
  this.color = color;
  this.model = model;
  this.extras = extras;
  this.name = name;
  this.info = function() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras "called" + this.name ;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Can-am"," DS " , 2021, "orange and black", "LED Lights", "ATV"));
vehicles.push(new Vehicle("GMC"," Yukon " , 2016, "choclate", "seat warmers", "Big Body Whip"));
vehicles.push(new Vehicle("GMC"," Sierra " , 2014, "silver", "bed cover", "Truck Truck"));

outputEl = document.getElementById("output")
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("p");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);


}
