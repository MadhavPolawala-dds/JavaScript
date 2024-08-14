let score = "100";
let value = "true";

console.log(typeof score);
console.log(typeof value);

let convertedScore = Number(score);
let convertedValue = Boolean(value);

console.log(convertedValue);

let valueAfterConversion = Number(convertedValue);

console.log(typeof convertedScore);
console.log(convertedScore + 10);
console.log(convertedValue);
console.log(valueAfterConversion);
