/* Primitive data types
    1. number
    2. string
    3. boolean
    4. undefined
    5. null
    6. symbol
    7. bigint
*/

let id = 123;
let Name = "Madhav";
const bigNumber = 7895123124654n;

const symbolId = Symbol("123");
const anotherSymbolId = Symbol("123");

/* Non-primitive data types
    1. array
    2. object
    3. function
*/

let userArray = {
  name: "Madhav",
  age: 22,
  email: "madhav@test.com",
};

let userObject = ["Madhav", "Karan"];

let userFunction = function () {
  console.log("Hello World");
};

//Check data type
console.log("data types");
console.log("id : " + typeof id);
console.log("Name : " + typeof Name);
console.log("bigNumber : " + typeof bigNumber);
console.log("symbolId : " + typeof symbolId);
console.log("anotherSymbolId : " + typeof anotherSymbolId);
console.log("userArray : " + typeof userArray);
console.log("userObject : " + typeof userObject);
console.log("userFunction : " + typeof userFunction);
