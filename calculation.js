function calculate() {
  let a = +prompt("Please enter your A number");
  let b = +prompt("Please enter your B number");

  document.getElementById("aLabel").removeAttribute("hidden");

  document.getElementById("a").innerHTML = a;
  document.getElementById("b").innerHTML = b;
  document.getElementById("sum").innerHTML = sum(a, b);
  document.getElementById("diff").innerHTML = diff(a, b);
  document.getElementById("product").innerHTML = product(a, b);
  document.getElementById("share").innerHTML = share(a, b);
}

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return Math.abs(a - b);
}

function product(a, b) {
  return a * b;
}

function share(a, b) {
  return a / b;
}
