/*----------------------------------------------------------------------------------------------------------------
---------------------------------------------Numbers--------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------*/

const value1 = 786;
console.log(value1);
console.log(value1.toFixed(2));

const value2 = new Number(786);
console.log(value2);

console.log(value2.toString().length);

const hundred = 10000000;

console.log(hundred.toLocaleString("en-IN"));

/*----------------------------------------------------------------------------------------------------------------
---------------------------------------------Maths--------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------*/

console.log("");
console.log(Math.abs(-100));
console.log(Math.round(5.6));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));

const min = 7;
const max = 10;

console.log(Math.round(Math.random() * (max - min + 1) + min));
