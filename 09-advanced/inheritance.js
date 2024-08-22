class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse(subject) {
    this.subject = subject;
    console.log(`course was added by ${this.username}`);
  }
}

const teacher = new Teacher("Madhav", "madhav@dds.com", "12345");
teacher.addCourse("Javascript");
console.log(teacher);
