const myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let createdDate = new Date(2002, 6, 13, 8, 15);

console.log(createdDate.toLocaleString());

let customizedDate = myDate.toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
  hour12: true,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

console.log(customizedDate);
