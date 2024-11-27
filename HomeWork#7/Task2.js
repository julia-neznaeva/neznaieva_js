function findCapitalWords(sentence) {
  return sentence.match(/\b[A-Z][a-z]*/g);
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
console.log(findCapitalWords("no capital letter here"));
