// Stack(Primitive data types) copy updated

let name = "Madhav";
let anotherName = name;

anotherName = "MadhavPolawala";

console.log(name);
console.log(anotherName);

// Heap(Non-primitive data types) original value updated

let userOne = {
  name: "Madhav",
  age: 22,
};

let userTwo = userOne;
userTwo.age = 23;

console.log(userOne);
console.log(userTwo);
