function countCars(cars) {
  let map = new Map();
  let outputArray = Array.from(new Set(cars));

  outputArray.forEach((item) => {
    map.set(item, cars.filter((x) => x == item).length);
  });
  return map;
}

function countCars2(cars) {
  let map = new Map();

  cars.forEach((car) => {
    if (map.has(car)) {
      map.set(car, map.get(car) + 1);
    } else {
      map.set(car, 1);
    }
  });
  return map;
}

const cars = [
  "BMW",
  "Opel",
  "Audi",
  "VW",
  "Toyota",
  "BMW",
  "VW",
  "Nissan",
  "BMW",
];
console.log(countCars2(cars));
