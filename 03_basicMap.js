// Rules:
// Use Array.prototype.map()
// Do not use for/while loops or Array.prototype.forEach()
// No unnecessary functions

function doubleArr(numArr) {
	return numArr.map(function(n) {
		return n * 2;
	});
}

module.exports = doubleArr;