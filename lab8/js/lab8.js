// Author Ish B//
//Public Domain//
//Created 2-28-2021//


function isEven(x){
    return (x % 2 == 0);
}

//Test Function//
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [100, 85, 14, 56, 52, 3, 9]
console.log("My array", array);

var restults = array.map(isEven);
// should return [true, fasle, true, true, true, false, false]
consle.log("Test of evenness of array:", result);

var resylt = array.map(function(x){
   return x ** 0.5;
})
// Should return [10, 9.219544457292887, 3.7416573867739413, 7.483314773547883, 7.211102550927978, 1.7320508075688772, 3]
consle.log("Squareroot of array:", result);
