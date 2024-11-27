async function getCity() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let name = document.getElementById("userNameInput").value;
    if (response.ok) {
      const data = await response.json();
      let result = data.filter((user) => user.username === name);
      if (result.length > 0) {
        document.getElementById("userCity").innerHTML = result[0].address.city;
      }
    } else {
      document.getElementById("userCity").innerHTML =
        `Error: ${response.status}`;
    }
  } catch (error) {
    document.getElementById("userCity").innerHTML = `Error: ${error.message}`;
  }
}

const element = document.getElementById("getUserButton");
element.addEventListener("click", getCity);
