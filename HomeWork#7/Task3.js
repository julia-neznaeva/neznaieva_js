function getLetterCount(text) {
  const stringArray = [...new Set(text.replace(/\s+/g, ""))];
  let result = new Map();
  stringArray.forEach((element) => {
    var re = new RegExp(element, "g");

    let count = (text.match(re) || []).length;
    result.set(element, count);
  });

  return result;
}

console.log(getLetterCount("banana"));
console.log(getLetterCount("The short text"));
