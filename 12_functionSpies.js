// Rules:
// No for/while loops or Arr.prototype.forEach()
// No unnecessary functions

function Spy(target, method) {
  var counter = {count: 0},
    oldFunction = target[method];

  target[method] = function() {
    counter.count++;
    return oldFunction.apply(this, arguments);
  }
  return counter;
}

module.exports = Spy;