function valuation() {
  let ball = +prompt("Please enter your ball");
  let result = "Incorrect assessment!!";

  if (ball > -1 && ball < 50) {
    result = "Unsatisfied!";
  } else if (ball < 71) {
    result = "Satisfied!";
  } else if (ball < 88) {
    result = "Good!";
  } else if (ball < 101) {
    result = "Excellent!";
  }

  document.getElementById("result").innerHTML = result;
}

function switchValuation() {
  let ball = +prompt("Please enter your ball");
  let result;

  switch (true) {
    case ball > -1 && ball < 50:
      result = "Unsatisfied!";
      break;
    case ball < 71:
      result = "Satisfied!";
      break;
    case ball < 88:
      result = "Good!";
      break;
    case ball < 101:
      result = "Good!";
      break;
    default:
      result = "Incorrect assessment!!";
      break;
  }

  document.getElementById("result").innerHTML = result;
}
