// Author Ish B//
// Created 2-14-2021//
// License: Public Domain//


//Defining Variables//
var myTransport = ["bike" , "car" , "plane" , "boat"];

var myMainRide = {
    make: "GMC",
    model: "Yukon",
    color: "brown",
    year: "2016",
    age: function() {
        return 2021 - age;
    }
}

// output
document.write("My Transport: ", myTransport, "</br>");
document.write("my Main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
