function whatTime() {
  
  let numbers = prompt("Please enter your numbers");

  if (numbers != null) {
    let rawNumbers = Math.abs(+numbers);
    console.log(rawNumbers);

    if (Number.isNaN(rawNumbers)){
        document.getElementById("time").innerHTML ="Jeez I just need only numbers"
  }
  else
  {
    let minutes = rawNumbers%60;

    let hours =  Math.floor((rawNumbers/60)%24);

    let days = Math.floor(rawNumbers/60/24);

    document.getElementById("time").innerHTML =
    `There are ${days} days and ${hours}:${minutes}`;
  }
} 

}