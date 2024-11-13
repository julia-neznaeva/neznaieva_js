function checkLogin(username, password) {
  return new Promise((resolved, reject) => {
    if (username == "admin" && password == "qwerty123456") {
      resolved(`Welcome, ${username}`);
    } else {
      const reason = new Error("Invalid username or password");
      reject(reason);
    }
  });
}

checkLogin("admin", "qwerty123456")
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
