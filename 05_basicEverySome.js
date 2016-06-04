// Rules:
// No for/while loops or Arr.prototype.forEach()
// No unnecessary functions

function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(a) {
			return goodUsers.some(function(b) {
				return b.id === a.id;
			});
		});
	}
}

module.exports = checkUsersValid;