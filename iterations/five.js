const guns = [
  { AR: "M416", SMG: "UMP", SNIPER: "AWM" },
  { AR: "SCARL", SMG: "UZI", SNIPER: "M24" },
  { AR: "AK47", SMG: "P90", SNIPER: "KAR98" },
];

guns.forEach((item) => {
  console.log(`${item.AR} is AR`);
  console.log(`${item.SMG} is SMG`);
  console.log(`${item.SNIPER} is SNIPER`);
});
