let car1 = {
  brand: "Mersedes",
  model: "Benz",
  year: 1993,
};

let car2 = {
  brand: "Volovo",
  model: "XC60",
  owner: 2024,
};

console.log(car1);
console.log(car2);

let car3 = { ...car1, ...car2 };
console.log(car3);
