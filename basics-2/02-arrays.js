const assaultRifles = ["M416", "AK47", "SCARL"];
const submachineGuns = ["UMP", "P90", "UZI"];

const snipers = ["AWM", "KAR98", "M24"];
const shotguns = ["S686", "DBS", "S12K"];

const sniperShotgun = snipers.concat(shotguns);
console.log("CONCAT", sniperShotgun);

const allWeapons = [
  ...assaultRifles,
  ...submachineGuns,
  ...snipers,
  ...shotguns,
];

console.log("SPREAD", allWeapons);

const complexArray = [
  [1, 2, 3],
  5,
  8,
  5,
  [1, 2, [[5, 4, 5, [7, [4, 8, 6], 8, 9], 6, 6]]],
];

const usableArray = complexArray.flat(Infinity);

console.log("FLAT", usableArray);

console.log(Array.isArray({ Madhav: "Polawala" }));
console.log(Array.isArray(usableArray));

const score1 = 50;
const score2 = 60;
const score3 = 70;
const score4 = 80;

console.log(Array.of(score1, score2, score3, score4))