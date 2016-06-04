// Task:
// Use Array.reduce() to make an Array.map() clone

module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(accumulation, element, index, array) {
    return accumulation.concat(fn.call(thisArg, element, index, array));
  }, []);
}