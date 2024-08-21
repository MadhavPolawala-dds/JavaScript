function userFunction(username = "Madhav") {
  if (!username) {
    console.log("Please enter a valid username");
    return;
  }
  return `${username} just logged in.`;
}

// console.log(userFunction("Polawala"));

const myArr = [100, 200, 300, "Madhav", "Polawala"];

function getValue(arr) {
  return arr[4];
}
console.log(getValue(myArr));
