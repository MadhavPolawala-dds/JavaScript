const userLoggedIn = true;
const marks = 47;
const debitCard = true;

if (5 == "5") {
  console.log("The function is executed");
}

if (5 === "5") {
  console.log("The function is executed"); // This will not be executed
}

if (marks >= 80) {
  console.log("You have A grade");
} else if (marks >= 60) {
  console.log("You have B grade");
} else if (marks >= 40) {
  console.log("You have C grade");
} else {
  console.log("You have failed");
}

if (userLoggedIn && debitCard) {
  console.log("You are eligible yo buy the product");
} else {
  console.log("You are not eligible to buy the product");
}

/// Switch case

const month = 7;

switch (month) {
  case 1:
    console.log("Month is January");
    break;
  case 2:
    console.log("Month is February");
    break;
  case 3:
    console.log("Month is March");
    break;
  case 4:
    console.log("Month is April");
    break;
  case 5:
    console.log("Month is May");
    break;
  case 6:
    console.log("Month is June");
    break;
  case 7:
    console.log("Month is July");
    break;
  case 8:
    console.log("Month is August");
    break;
  case 9:
    console.log("Month is September");
    break;
  case 10:
    console.log("Month is October");
    break;
  case 11:
    console.log("Month is November");
    break;
  case 12:
    console.log("Month is December");
    break;
  default:
    console.log("Invalid Match");
}
