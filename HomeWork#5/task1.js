const user = {
  firstName: "John",

  lastName: "Doe",

  age: 30,

  contact: {
    email: "john.doe@example.com",

    phone: "123-456-7890",
  },

  address: {
    city: "New York",

    country: "USA",
  },
};

function getUserInfo(user) {
  const {
    firstName,
    lastName,
    contact: { email, phone },
    address: { city },
  } = user;

const obj = {
  firstName,
  lastName,
  email,
  phone,
  city,
};
return obj;
}
console.log(getUserInfo(user));
