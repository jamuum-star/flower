import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

function CartPage({ cartItems, removeFromCart }) {
    
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Link to="/" className="text-blue-500 underline">
        Continue Shopping
      </Link>
    </div>
  );
}

export default CartPage;
