// Rules:
// No counter/accumulator variables.
// No for/while loops or Arr.prototype.forEach()
// No unnecessary functions

// Task:
// Write a function duckCount that returns the number of arguments passed to it which have a property 'quack'
// defined directly on them. Do not match values inherited from prototypes.


function duckCount() {
	return Array.prototype.slice.call(arguments)
	.filter(function(val) {
		return Object.prototype.hasOwnProperty.call(val, "quack");
	}).length;
}

module.exports = duckCount;