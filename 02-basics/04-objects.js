const appUser = {};

appUser.id = 123;
appUser.name = "Sam";
appUser.isLoggedIn = false;

console.log(appUser);

const appUser2 = {
  email: "abc@gmail.com",
  password: "123",
  fullName: {
    firstName: "Karan",
    lastName: "Polawala",
  },
};

console.log(appUser2.fullName.lastName);

const appUser3 = { ...appUser, ...appUser2 };

console.log(appUser3);

console.log(Object.keys(appUser3));

console.log(Object.values(appUser3));
