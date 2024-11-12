const scores = {
  programming: 88,
  design: 74,
  jurisprudence: false,
  relational_DB: 92,
  computerGraphics: "submitted",
  patterns: 65,
  philosophy: "transferred",
  network: 81,
};

RemoveNanPropertyFromObject(scores);

function RemoveNanPropertyFromObject(object) {
  let props = Object.keys(object);

  props.forEach((item) => {
    if (typeof object[item] !== "number") {
      delete object[item];
    }
  });

  console.log(object);
}