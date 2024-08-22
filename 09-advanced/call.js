function setUser(username) {
  this.username = username;
}

function createUser(username, email, password) {
  this.email = email;
  this.password = password;
  setUser.call(this, username);
}
const myUser = new createUser("Madhav", "madhav@test.com", "12345");
console.log(myUser);
