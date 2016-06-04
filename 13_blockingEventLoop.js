// Rules:
// No for/while loops or Arr.prototype.forEach()
// No unnecessary functions

// Task:
// Make nonblocking repeat
function repeat(operation, num) {
  if (num <= 0) return
  operation();
  setImmediate(function() {
  	repeat(operation, --num);
  }, 1);
}

module.exports = repeat;