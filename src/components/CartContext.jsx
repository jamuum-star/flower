// import React, { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       // Find if item already exists in cart
//       const existingItem = state.find((item) => item.id === action.item.id);
//       if (existingItem) {
//         // Increase quantity if item exists
//         return state.map((item) =>
//           item.id === action.item.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       // Add new item with quantity 1 if it doesn't exist
//       return [...state, { ...action.item, quantity: 1 }];
//     case "REMOVE_FROM_CART":
//       return state.filter((item) => item.id !== action.id);
//     case "UPDATE_CART_ITEM_QUANTITY":
//       return state.map((item) =>
//         item.id === action.id ? { ...item, quantity: action.quantity } : item
//       );
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cartItems, dispatch] = useReducer(cartReducer, []);

//   const addToCart = (item) => {
//     dispatch({ type: "ADD_TO_CART", item });
//   };

//   const removeFromCart = (id) => {
//     dispatch({ type: "REMOVE_FROM_CART", id });
//   };

//   const updateCartItemQuantity = (id, quantity) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//     } else {
//       dispatch({ type: "UPDATE_CART_ITEM_QUANTITY", id, quantity });
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Find if item already exists in cart
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        // Increase quantity if item exists
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        );
      }
      // Add new item with quantity if it doesn't exist
      return [...state, { ...action.item }];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_CART_ITEM_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const updateCartItemQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      dispatch({ type: "UPDATE_CART_ITEM_QUANTITY", id, quantity });
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
