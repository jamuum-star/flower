import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PurchasedProducts() {
  const location = useLocation();
  const [orders, setOrders] = useState([]);

  // Load orders from local storage on component mount
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);

    if (location.state) {
      const { cartItems, customerDetails } = location.state;

      // Check if the new order is already in the saved orders to prevent duplication
      const isOrderAlreadySaved = savedOrders.some(
        (order) =>
          JSON.stringify(order) ===
          JSON.stringify({ cartItems, customerDetails })
      );

      if (!isOrderAlreadySaved) {
        // Save the new order to local storage
        const newOrder = { cartItems, customerDetails };
        const updatedOrders = [...savedOrders, newOrder];
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        setOrders(updatedOrders);
      }
    }
  }, [location.state]);

  const handleRemoveOrder = (index) => {
    const updatedOrders = orders.filter(
      (_, orderIndex) => orderIndex !== index
    );
    if (updatedOrders.length === 0) {
      localStorage.removeItem("orders");
    } else {
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    }
    setOrders(updatedOrders);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">
        Purchased Products
      </h1>

      {orders.map((order, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">
            Thank you, {order.customerDetails.name}!
          </h2>
          <p className="mb-4">
            Your order has been confirmed and will be shipped to:
          </p>
          <p className="mb-4">
            <strong>Address:</strong> {order.customerDetails.address}{" "}
            {order.customerDetails.destrict}
          </p>

          <h2 className="text-xl font-bold mb-4">Purchased Items</h2>
          <ul className="space-y-4">
            {order.cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-8">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">
              $
              {order.cartItems
                .reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)
                .toFixed(2)}
            </p>
          </div>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleRemoveOrder(index)}
          >
            Remove Purchased Detail
          </button>
        </div>
      ))}
    </div>
  );
}

export default PurchasedProducts;


