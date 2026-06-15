import { useEffect, useState } from "react";
import list from "../data";

function Cart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [warning, setWarning] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isAccessory = (product) => product.id >= 5;

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (existingProduct && !isAccessory(product)) {
      setWarning(
        "This subscription is already in your cart. Only one subscription may be added."
      );
      return;
    }

    if (existingProduct) {
      setCart(
        cart.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setWarning("");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart(
      cart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + amount }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const totalItems = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="page">
      <h2>StreamList+ Subscription Store</h2>

      <h3>Items in Cart: {totalItems}</h3>

      {warning && <p className="warning">{warning}</p>}

      <div className="cart-grid">
        {list.map((product) => (
          <div key={product.id} className="cart-card">
            <img src={product.img} alt={product.service} />
            <h3>{product.service}</h3>
            <p>{product.serviceInfo}</p>
            <p>
              <strong>${product.price.toFixed(2)}</strong>
            </p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-row">
              <h4>{product.service}</h4>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>

              <div className="cart-buttons">
                <button onClick={() => changeQuantity(product.id, -1)}>
                  -
                </button>

                <button onClick={() => changeQuantity(product.id, 1)}>
                  +
                </button>

                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;