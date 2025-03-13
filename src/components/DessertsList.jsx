import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../app/features/cartSlice";
import desserts from "../data";

const DessertsList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="desserts-container">
      <div className="desserts-section">
        <h2 className="title">Delicious Desserts</h2>
        <div className="desserts-grid">
          {desserts.map((dessert) => {
            const cartItem = cartItems.find((item) => item.id === dessert.id);
            return (
              <div
                key={dessert.id}
                className={`dessert-card ${cartItem ? "in-cart" : ""}`}
              >
                <img
                  src={dessert.image.desktop}
                  alt={dessert.name}
                  className="dessert-image"
                />
                <h4 className="category">{dessert.category}</h4>
                <h3>{dessert.name}</h3>
                <p className="price">${dessert.price.toFixed(2)}</p>

                {cartItem ? (
                  <div className="cart-controls">
                    <button
                      onClick={() => dispatch(removeFromCart(dessert.id))}
                      className="cart-btn"
                    >
                      −
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(dessert))}
                      className="cart-btn"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-to-cart"
                    onClick={() => dispatch(addToCart(dessert))}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* YOUR CART SECTION */}
      <div className="cart-section">
        <h2>
          Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>
                  {item.quantity}x ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="remove-btn"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>
          Total: $
          {cartItems
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default DessertsList;
