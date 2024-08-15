/*
syntax of IIFE
(function with parameter)(Arguments)

*/

// Direct execution of function(IIFE). (Normal Function)

(function connect() {
  console.log(`DataBase Connected Normal function`);
})();

// Direct execution of function(IIFE). (Arrow Function)

(() => {
  console.log(`DataBase Connected through Arrow function`);
})();

//With parameters and arguments

((name) => {
  console.log(`DataBase Connected by ${name} through Arrow function `);
})("Madhav");
