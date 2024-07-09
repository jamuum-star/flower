import React, { createContext, useContext, useReducer, useEffect } from "react";//import hooks

// Create a context for cart management
const CartContext = createContext();


// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if item already exists in cart
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        // Update quantity if item exists
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        );
      }
      // Add new item to cart
      return [...state, { ...action.item }];
    case "REMOVE_FROM_CART":
      // Remove item from cart
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_CART_ITEM_QUANTITY":
      // Update quantity of a specific item in cart
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    case "SET_CART":
      // Set cart items from external source
      return action.cart;
    default:
      return state;
  }
};
// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart state using reducer, and retrieve from localStorage if available
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cartItems");
    return localData ? JSON.parse(localData) : [];
  });

  // Store cartItems in localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add item to cart
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", item });
  };
  // Function to remove item from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };
  // Function to update quantity of item in cart
  const updateCartItemQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      dispatch({ type: "UPDATE_CART_ITEM_QUANTITY", id, quantity });
    }
  };
  // Provide cart state and functions through context
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
// Custom hook to consume cart context
export const useCart = () => useContext(CartContext);
