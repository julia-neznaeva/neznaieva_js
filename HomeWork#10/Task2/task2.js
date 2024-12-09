function identity(arr) {
    var countElements = arr.length;
    var ratingSum = 0;
    arr.forEach(function (element) { return (ratingSum += element.rating); });
    return ratingSum / countElements;
    throw new Error();
}
console.log(identity([{ name: "Anna", rating: 3 }])); // 3
console.log(identity([
    { title: "Encounter", rating: 3 },
    { title: "Dead to me", rating: 4 },
    { title: "Riverdale", rating: 5 },
]));
