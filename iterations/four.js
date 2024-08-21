//Object iteration

const myObj = {
  js: "javascript",
  html: "hyper text markup language",
  css: "cascading style sheet",
};

for (const key in myObj) {
  console.log(`${key} is the short form of ${myObj[key]}`);
}
