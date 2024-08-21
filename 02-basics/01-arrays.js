const myArr = ["Madhav", 1, "Polawala", 3, true, 5];

myArr.push(6);
myArr.pop();
myArr.pop();

console.log("A", myArr);

const myna1 = myArr.slice(1, 3);
console.log("slice", myna1);
console.log("After slice", myArr);

const myna2 = myArr.splice(1, 3);

console.log("splice", myna2);
console.log("After splice", myArr);
