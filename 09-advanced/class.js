class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}xy`;
  }
  changeUserName() {
    return `${this.name.toUpperCase()}`;
  }
}

const myUser = new User("madhav", "madhav@dds.com", "123abc");
console.log(myUser.encryptPassword());
console.log(myUser.changeUserName());
