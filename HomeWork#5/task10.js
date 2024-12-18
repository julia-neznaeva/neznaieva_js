function checkEmail(email) {
  return new Promise((resolve, reject) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      resolve(`${email} is valid email`);
    } else {
      reject(new Error(`${email} is invalid email format`));
    }
  });
}

checkEmail("julia.neznaeva@gmail.com")
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));

  checkEmail("julia.neznaevagmail.com")
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));