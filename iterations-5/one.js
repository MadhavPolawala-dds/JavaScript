//For loop

for (let i = 0; i <= 7; i++) {
  const element = i;
  console.log(element);
}

// Loop in Loop    //Tables from 1 to 20

for (let i = 1; i <= 20; i++) {
  console.log(`Table of ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop for array

const guns = ["M416", "AKM", "SCARL"];

for (let i = 0; i < guns.length; i++) {
  const element = guns[i];
  console.log(element);
}

//Break and Continue in For loop

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`5 detected`);
    break;
  }
  console.log(`The value of i is ${i}.`);
}
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`5 detected`);
    continue;
  }
  console.log(`The value of i is ${i}.`);
}
