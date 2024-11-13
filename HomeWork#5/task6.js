async function updateCart(cart, newItem) {
    if (cart.some((item) => item.id === newItem.id)) {
      let updatedCart = cart.map((item) => {
        if (item.id === newItem.id) {
          item.quantity += 1;
          return item;
        } else {
          item;
          return item;
        }
      });
      console.log(cart);
      return updatedCart;
    } else {
      let updatedCart = cart.map((item) => {
        return item;
      });
      updatedCart.push(newItem);
      return updatedCart;
    }
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
  }).then((result) => console.log(result));
  
  console.log(cart);
  