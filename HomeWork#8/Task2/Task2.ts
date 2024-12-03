function processData(param: string | number | boolean | number[]) {
  const type = typeof param;
  switch (type) {
    case "string":
      return (param as string).toUpperCase();

    case "number":
      let n = param as number;
      return Math.pow(n, 2);

    case "boolean":
      return param ? false : true;

    case "object":
      let ns = param as number[];
      if (ns.length > 0) {
        return ns.map((element) => Math.pow(element, 2));
      } else {
        return ns;
      }
  }
}

console.log(processData("text data")); // "TEXT DATA"

console.log(processData(3)); // 9

console.log(processData(false)); // true

console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]

console.log(processData([]))
