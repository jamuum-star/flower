import React from "react";

function ShoppingCart({ cartItems, removeFromCart, addToCart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center py-2">
              <div className="flex-1">
                <p className="text-gray-800">{item.title}</p>
                <p className="text-gray-500 text-sm">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:text-red-700 focus:outline-none"
                >
                  Remove
                </button>
                <button
                  onClick={() => addToCart(item)} // Add item to cart
                  className="text-green-500 text-sm hover:text-green-700 focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
