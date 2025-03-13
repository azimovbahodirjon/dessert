import React from "react";

const CartCounter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="cart-counter">
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default CartCounter;
