async function getEmails() {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    if (response.ok) {
      const data = await response.json();
      let result = data.map((user) => user.email);
      document.getElementById("resultH7T4").innerHTML = result.join("<br>");
    } else {
      document.getElementById("resultH7T4").innerHTML =
        `Error: ${response.status}`;
    }
  } catch (error) {
    document.getElementById("resultH7T4").innerHTML = `Error: ${error.message}`;
  }
}
