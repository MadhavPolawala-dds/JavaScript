// While Loop

let value = 0;

while (value <= 15) {
  console.log(`The value is ${value}`);
  value = value + 2;
}

//Array in While loop

const guns = ["M416", "AKM", "SCARL", "M762"];
let arr = 0;

while (arr < guns.length) {
  console.log(`The gun is ${guns[arr]}`);
  arr = arr + 1;
}

//Do while Loop

let score = 2;

do {
  console.log(`The score is ${score}`);
  score++;
} while (score < 15);
