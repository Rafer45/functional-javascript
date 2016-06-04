// Counts the amounc of times a word is in an array
// Rules:
// Need to use array.reduce()
// No for/while loops or Arr.prototype.forEach()
// No unnecessary functions

function countWords(input) {
	return input.reduce(function(counter, word) {
		counter[word] = ++counter[word] || 1;
		return counter;
	}, {});
}

module.exports = countWords;