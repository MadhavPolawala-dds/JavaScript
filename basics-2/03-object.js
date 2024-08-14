const userObj = {
  name: "Madhav",
  age: 22,
  email: "madhav@test.com",
  city: "surat",
  isLoggedIn: false,
  skills: ["HTML", "CSS", "JS"],
};

console.log(userObj);
console.log(
  `User name is ${userObj.name} and age is ${userObj.age} and email is ${userObj.email}. He lives in ${userObj.city}.`
);

userObj.mobileNo = "1234567890";
console.log(userObj);

userObj.greet = function () {
  console.log("Hello World");
};

userObj.greet2 = function () {
  console.log(`Hello ${this.name} bhai.`);
};

console.log(userObj.greet());
console.log(userObj.greet2());
