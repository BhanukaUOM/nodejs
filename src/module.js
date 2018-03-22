/* for 1 module

var counter = function(arr){
    return "There are " + arr.length + " elements in this array";
}

module.exports = counter;

*/

/* more modules 
var counter = function(arr) {
    return `Array Length is ${arr.length}`;
}

var adder = function(a, b){
    return a+b;
}

var PI = 3.14;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.PI = PI;

*/    //    or

module.exports.counter = function(arr) {
    return `Array Length is ${arr.length}`;
}

module.exports.adder = function(a, b){
    return a+b;
}

module.exports.PI = 3.14;