const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myTotal = myNum.reduce(function (acc, currval) {
  //   console.log(`Accumulator : ${acc} and Current Value : ${currval}`);

  return acc + currval;
});

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2499,
  },
  {
    itemName: "Angular course",
    price: 1999,
  },
  {
    itemName: "React course",
    price: 1499,
  },
  {
    itemName: "HTML course",
    price: 999,
  },
  {
    itemName: "CSS course",
    price: 799,
  },
];

const totalBill = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Cart bill yo pay : ${totalBill}`);
