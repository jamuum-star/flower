import React, { useContext } from "react";


const Cart = () => {
  const { items, changeQuantity, toggleStatusTab } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
            {item.productId} x {item.quantity}
            <button
              onClick={() => changeQuantity(item.productId, item.quantity + 1)}
            >
              +
            </button>
            <button
              onClick={() => changeQuantity(item.productId, item.quantity - 1)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <button onClick={toggleStatusTab}>Toggle status tab</button>
    </div>
  );
};

export default Cart;
