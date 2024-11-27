function removeSpaces(text) {
  return text.replace(/^\s+|\s+$/g, ""); //text.trim();
}
console.log(removeSpaces("             more text with spaces              "));
