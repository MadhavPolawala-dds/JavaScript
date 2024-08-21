let a = 50;
var b = 100;

if (true) {
  let a = 150;
  var b = 250;
  console.log(`inner a : ${a} and inner b : ${b}`);
}

console.log(`outer a : ${a} and outer b : ${b}`);

function firstFunction() {
  const name = "Madhav";
  function secondFunction() {
    const surname = "Polawala";
    console.log(name);
  }
  //   console.log(surname);

  secondFunction();
}

firstFunction();

console.log(addOne(5)); // Direct function can be called before initialization

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5));    // Not usable before initialization because of that is store in the variable

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5)); //Usable after initialization
