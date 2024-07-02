
// import React from "react";
// import { useCart } from "../components/CartContext.jsx"; // Import useCart from CartContext

// function CartPage() {
//   const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

//   // Calculate the total price of items in the cart
//   const totalPrice = cartItems.reduce((total, item) => {
//     const price = parseFloat(item.price.replace("$", ""));
//     return total + price * item.quantity;
//   }, 0);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">
//         Your Cart
//       </h1>
//       {cartItems.length === 0 ? (
//         <p className="text-lg text-center">Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
//               >
//                 <div className="flex items-center mb-4 sm:mb-0">
//                   <img
//                     src={item.img1}
//                     alt={item.title}
//                     className="w-16 h-16 object-cover rounded-md mr-4"
//                   />
//                   <div>
//                     <p className="text-lg font-semibold">{item.title}</p>
//                     <p className="text-gray-600">{item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() =>
//                       updateCartItemQuantity(item.id, item.quantity - 1)
//                     }
//                     className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition duration-300"
//                   >
//                     -
//                   </button>
//                   <p className="mx-2">{item.quantity}</p>
//                   <button
//                     onClick={() =>
//                       updateCartItemQuantity(item.id, item.quantity + 1)
//                     }
//                     className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition duration-300"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ml-4"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
//             <p className="text-xl font-bold mb-4 sm:mb-0">
//               Total: ${totalPrice.toFixed(2)}
//             </p>
//             <button
//               onClick={() => alert("Proceed to checkout")}
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CartPage;














import React from "react";
import { useCart } from "../components/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4 sm:mb-0">
                  <img
                    src={item.img1}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity - 1)
                    }
                    className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition duration-300"
                  >
                    -
                  </button>
                  <p className="mx-2">{item.quantity}</p>
                  <button
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity + 1)
                    }
                    className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition duration-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ml-4"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xl font-bold mb-4 sm:mb-0">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={() => alert("Proceed to checkout")}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

