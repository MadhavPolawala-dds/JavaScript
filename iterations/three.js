const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const word = "Hello World!";

for (const letter of word) {
  console.log(`The letter is ${letter}`);
}

// Map

const mapName = new Map();

mapName.set("AR", "M416");
mapName.set("SMG", "UMP");
mapName.set("SNIPER", "AWM");

console.log(mapName);

for (const [key, value] of mapName) {
  console.log(`${value} is ${key}`);
}
