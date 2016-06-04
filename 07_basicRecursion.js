// Rules:
// No for/while loops
// No Array.map() || Array.reduce()
// No helpers

//	Task:
//	Make Array.reduce() as a function with recursion.

// This is not my code, but I've grown to understand it.
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value; // Stop once you're done.

    // Run the function on the next index using its value and
    // the accumulated value.
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial); // Run the function, starting at the beginning and using the initial value first.
}

module.exports = reduce;