function identity<T extends { rating: number }>(arr: T[]): number {
  let countElements = arr.length;
  let ratingSum = 0;
  arr.forEach((element) => (ratingSum += element.rating));
  return ratingSum / countElements;
}

console.log(identity([{ name: "Anna", rating: 3 }])); // 3

console.log(
  identity([
    { title: "Encounter", rating: 3 },
    { title: "Dead to me", rating: 4 },
    { title: "Riverdale", rating: 5 },
  ])
);
