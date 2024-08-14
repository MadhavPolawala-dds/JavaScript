let name = "Madhav";
let age = 22;
let newName = new String("MadhavPolawala");

console.log(`Hello, My name is ${name.toUpperCase()} and my age is ${age}`);

console.log(newName[6]);
console.log(newName.length);
console.log(newName.charAt(10));
console.log(newName.indexOf("w"));
console.log(newName.toLowerCase());
console.log(newName.__proto__);
console.log(newName.slice(-11, 8));

const nameTrim = "    Madhav     ";

console.log(nameTrim);

console.log(nameTrim.trim());

const fullName = "Madhav Polawala";

console.log(fullName.replace(" ", "-"));
const separatedName = fullName.split(" ");
console.log(separatedName);
console.log(separatedName[1]);
