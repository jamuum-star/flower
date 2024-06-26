import React, { createContext, useState, useEffect } from "react";

// Create context object
const CartContext = createContext();

// Create provider component
export const CartProvider = ({ children }) => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Item already exists in cart, update quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCart);
    } else {
      // Item does not exist in cart, add new item
      setCartItems([...cartItems, item]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Function to update quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Calculate total quantity of items in the cart
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Context value object
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalQuantity,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
