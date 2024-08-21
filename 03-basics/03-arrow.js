const user = {
  name: "Madhav",
  price: 999,
  welcomeMessage: function () {
    console.log(`Hello ${this.name}, Welcome to our website.`);
    console.log(this);
  },
};

user.welcomeMessage();
user.name = "Karan";
user.welcomeMessage();

const arrowAdd = (num1, num2) => {
  return num1 + num2;
};

console.log(arrowAdd(3, 6));

const objectReturn = () => ({ username: "Madhav" }); //return object
console.log(objectReturn());
