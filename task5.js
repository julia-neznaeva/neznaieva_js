function loop() {
  for (let i = 1; i < 51; i++) {
    let iterationResultString;
    iterationResultString = `${i}`;
    if (isMultiple(i, 4)) {
      iterationResultString = iterationResultString + " kratne 2 & 4!";
    } else if (isMultiple(i, 2)) {
      iterationResultString = iterationResultString + " kratne 2!";
    }
    console.log(iterationResultString);
  }
}

function isMultiple(shared, divider) {
  return shared % divider === 0;
}
