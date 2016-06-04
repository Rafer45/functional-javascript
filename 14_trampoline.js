// No inclusion of loops

// Not my code. My previous code passed, but I don't know
// what the hell I'm expected to do.

// Alright, I think I've come to somewhat understand it.
// I don't understand the reason behind it, but I can ask
// later.
function repeat(operation, num) {
  return function() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  }
}

function trampoline(fn) {
  while(typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num);
  })
}