// Rules:
// No for/while loops
// No unnecessary functions

function loadUsers(userIds, load, done) {
  var users = userIds
  .map(function(val) {
      return load(val, function(v) {return v;});
  });
  done[users];
}

module.exports = loadUsers