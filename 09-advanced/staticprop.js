class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log(`${this.username} just logged in.`);
  }
  static createId() {
    return `123`;
  }
}

const myUser = new User("Karan");
// console.log(myUser.createId());

class Teacher extends User {
  constructor(username, subject) {
    super(username);
    this.subject = subject;
  }
}

const teacherDet = new Teacher("Madhav", "Maths");
teacherDet.login();
myUser.login();
