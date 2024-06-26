// import React from "react";

// function ShoppingCart({ cartItems, removeFromCart, addToCart }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="divide-y divide-gray-200">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center py-2">
//               <div className="flex-1">
//                 <p className="text-gray-800">{item.title}</p>
//                 <p className="text-gray-500 text-sm">
//                   Quantity: {item.quantity}
//                 </p>
//               </div>
//               <div className="flex flex-col items-end">
//                 <p className="text-gray-800">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 text-sm hover:text-red-700 focus:outline-none"
//                 >
//                   Remove
//                 </button>
//                 <button
//                   onClick={() => addToCart(item)} // Add item to cart
//                   className="text-green-500 text-sm hover:text-green-700 focus:outline-none"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShoppingCart;

// import React from "react";

// function ShoppingCart({ cartItems, removeFromCart }) {
//   return (
//     <div>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li
//               key={item.id}
//               className="flex justify-between items-center my-2"
//             >
//               <div>
//                 <img src={item.img1} alt={item.title} className="w-16 h-16" />
//                 <span>{item.title}</span>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
     
//     </div>
//   );
// }

// export default ShoppingCart;
// import React from "react";

// function ShoppingCart({ cartItems, removeFromCart }) {
//   // Calculate total price of items in the cart
//   const calculateTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <div>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item) => (
              // <li
              //   key={item.id}
              //   className="flex justify-between items-center my-2"
              // >
              //   <div className="flex items-center">
              //     <img
              //       src={item.img1}
              //       alt={item.title}
              //       className="w-16 h-16 mr-2"
              //     />
              //     <div>
              //       <span className="font-semibold">{item.title}</span>
              //       <p>{item.description}</p>
              //     </div>
              //   </div>
              //   <div className="flex items-center">
              //     <span className="mr-2">
              //       {item.quantity} x ${item.price.toFixed(2)} = $
              //       {(item.quantity * item.price).toFixed(2)}
              //     </span>
              //     <button
              //       onClick={() => removeFromCart(item.id)}
              //       className="bg-red-500 text-white px-2 py-1 rounded"
              //     >
              //       Remove
              //     </button>
              //   </div>
              // </li>
//             ))}
//           </ul>
//           <div className="mt-4">
//             <hr className="border-gray-400 my-2" />
//             <div className="flex justify-between font-bold">
//               <span>Total:</span>
//               <span>${calculateTotalPrice().toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShoppingCart;

import React from "react";

function ShoppingCart({ cartItems, removeFromCart }) {
  // Calculate total price of items in the cart
    const calculateTotalPrice = () => {
      return cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center my-2"
            >
              <div>
                <img src={item.img1} alt={item.title} className="w-16 h-16" />
                <span>{item.title}</span>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;