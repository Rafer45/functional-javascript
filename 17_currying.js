
function curryN(fn, n) {
  n = n === undefined ? fn.length : n;
  
  // Error handling
  if (typeof n !== "number") {
    throw "Error: Second argument of curryN must be a number";
  }
  
  // 1st commandment, end of recursion.
  if (n === 0) {
    return fn();
  }
  
  return function(arg) {
    return curryN(fn.bind(undefined, arg), n - 1);
  };
}


module.exports = curryN;