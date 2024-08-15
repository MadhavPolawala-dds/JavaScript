function userFunction(username = "Madhav") {
  if (!username) {
    console.log("Please enter a valid username");
    return;
  }
  return `${username} just logged in.`;
}

console.log(userFunction("Polawala"));
