/* for 1 module

var counter = require('./module');

console.log(counter(['ah', 'bh', 'nm']));

*/

var test = require('./module');

console.log(test.adder(test.PI,3));
console.log(test.counter([2,3,4,5,6]));