async function updateCart(cart, newItem) {
  let updatedCart = [...cart];
  let index = cart.findIndex((item) => item.id === newItem.id);
  if (index === -1) {
    updatedCart.push(newItem);
  } else {
    updatedCart[index] = {
      id: cart[index].id,
      name: cart[index].name,
      price: cart[index].price,
      quantity: cart[index].quantity + newItem.quantity,
    };
  }

  return updatedCart;
}

const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Smartphone", price: 800, quantity: 2 },
];

updateCart(cart, {
  id: 2,
  name: "Smartphone",
  price: 800,
  quantity: 1,
}).then((result) => console.log(result));

updateCart(cart, {
  id: 3,
  name: "Tablet",
  price: 600,
  quantity: 1,
}).then((result) => {
  console.log(result);
  //console.log(cart);
});
