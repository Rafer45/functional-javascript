// Rules:
// No for/while loops or Arr.prototype.forEach()
// No unnecessary functions

function getShortMsg(msgs) {
	return msgs.map(function (msgObj) {
		return msgObj.message;
	}).filter(function (msgStr) {
		return (msgStr.length < 50);
	});
}

module.exports = getShortMsg