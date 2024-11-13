async function updateCart(cart, newItem) {
  if (cart.some((item) => item.id === newItem.id)) {
    let updatedCart = cart.map((item) => {
      if (item.id === newItem.id) {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    return updatedCart;
  } else {
    let updatedCart = [...cart];

    updatedCart.push(newItem);
    return updatedCart;
  }
}

const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Smartphone", price: 800, quantity: 2 },
];

async () => {
  console.log(
    await updateCart(cart, {
      id: 2,
      name: "Smartphone",
      price: 800,
      quantity: 1,
    })
  );
};

async () => {
  console.log(
    await updateCart(cart, {
      id: 3,
      name: "Tablet",
      price: 600,
      quantity: 1,
    })
  );
};
