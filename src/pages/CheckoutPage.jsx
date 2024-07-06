import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const addresses = [
  "Mogadishu",
  "Hargeisa",
  "Kismayo",
  "Baidoa",
  "Berbera",
  "Jamaame",
  "Garoowe",
  "Marka",
  "Bosaso",
  "Afgoye"
];

function CheckoutPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    evcNumber: "",
    edahabNumber: "",
    cardNumber: "",
    cardCvv: "",
  });

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    mobileContact: "",
    destrict:"",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^\d{9}$/;

    if (!customerDetails.name) {
      newErrors.name = "Name is required.";
    } else if (!nameRegex.test(customerDetails.name)) {
      newErrors.name = "Name must contain only letters and spaces.";
    }

    if (!customerDetails.address) {
      newErrors.address = "Address is required.";
    }
    if (!customerDetails.destrict) {
      newErrors.destrict = "Address is required.";
    }

    if (!customerDetails.mobileContact) {
      newErrors.mobileContact = "Mobile contact is required.";
    } else if (!mobileRegex.test(customerDetails.mobileContact)) {
      newErrors.mobileContact = "Mobile contact must be 9 digits.";
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    if (
      paymentMethod === "evc" &&
      (!paymentDetails.evcNumber ||
        !/^\d{9}$/.test(paymentDetails.evcNumber) ||
        !paymentDetails.evcNumber.startsWith("61"))
    ) {
      newErrors.evcNumber = "EVC number must be 9 digits starting with '61'.";
    }

    if (
      paymentMethod === "edahab" &&
      (!paymentDetails.edahabNumber ||
        !/^\d{9}$/.test(paymentDetails.edahabNumber) ||
        (!paymentDetails.edahabNumber.startsWith("62") &&
          !paymentDetails.edahabNumber.startsWith("65")))
    ) {
      newErrors.edahabNumber =
        "Edahab number must be 9 digits starting with '62' or '65'.";
    }

    if (
      (paymentMethod === "mrcard" || paymentMethod === "visa") &&
      (!paymentDetails.cardNumber ||
        !/^\d{16}$/.test(paymentDetails.cardNumber))
    ) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }

    if (
      (paymentMethod === "mrcard" || paymentMethod === "visa") &&
      (!paymentDetails.cardCvv || !/^\d{3}$/.test(paymentDetails.cardCvv))
    ) {
      newErrors.cardCvv = "CVV must be 3 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle order confirmation
  const handleOrderConfirmation = () => {
    if (validateForm()) {
      // Simulate order processing
      const formattedItems = cartItems.map(
        (item) => `${item.title} x ${item.quantity}`
      );

      const message = `Order confirmed!\n\nThank you for your purchase, ${
        customerDetails.name
      }.\n\nShipping to: ${
        customerDetails.address
      }\n\nProducts:\n${formattedItems.join(
        "\n"
      )}\n\nTotal: $${totalPrice.toFixed(2)}`;

      setConfirmationMessage(message);
      setShowModal(true); // Show modal upon successful validation

      // Clear the cart
      cartItems.forEach((item) => removeFromCart(item.id));

      // Redirect to the purchased products page with state
      navigate("/purchased-products", {
        state: { cartItems, customerDetails },
      });
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">
        Checkout
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Customer Details</h2>

        <div className="mb-4">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={customerDetails.name}
              onChange={(e) =>
                setCustomerDetails({ ...customerDetails, name: e.target.value })
              }
              placeholder="Your Name"
              className="block w-full mt-2 p-2 border rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </label>

          <label className="block mb-2">
            City:
            <select
              value={customerDetails.address}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  address: e.target.value,
                })
              }
              className="block w-full mt-2 p-2 border rounded"
            >
              <option value="">Select City</option>
              {addresses.map((address) => (
                <option key={address} value={address}>
                  {address}
                </option>
              ))}
            </select>
            {errors.address && <p className="text-red-500">{errors.address}</p>}
          </label>
          <label className="block mb-2">
            Destrict:
            <input
              type="text"
              value={customerDetails.destrict}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  destrict: e.target.value,
                })
              }
              placeholder="your Address"
              className="block w-full mt-2 p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Mobile Contact:
            <input
              type="text"
              value={customerDetails.mobileContact}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  mobileContact: e.target.value,
                })
              }
              placeholder="your Mobile Number"
              className="block w-full mt-2 p-2 border rounded"
            />
            {errors.mobileContact && (
              <p className="text-red-500">{errors.mobileContact}</p>
            )}
          </label>
        </div>

        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <ul className="space-y-4">
          {cartItems.map((item) => (
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

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-6">Payment Method</h2>

        <div className="space-y-4">
          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="evc"
              checked={paymentMethod === "evc"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            EVC (Mobile Money)
          </label>

          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="edahab"
              checked={paymentMethod === "edahab"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Edahab (Mobile Money)
          </label>

          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="mrcard"
              checked={paymentMethod === "mrcard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            MasterCard
          </label>

          <label className="block">
            <input
              type="radio"
              name="paymentMethod"
              value="visa"
              checked={paymentMethod === "visa"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Visa Card
          </label>

          {errors.paymentMethod && (
            <p className="text-red-500 mb-4">{errors.paymentMethod}</p>
          )}

          {paymentMethod && (
            <div>
              <label className="block mb-2">
                {paymentMethod === "evc" && "EVC Number:"}
                {paymentMethod === "edahab" && "Edahab Number:"}
                {(paymentMethod === "mrcard" || paymentMethod === "visa") &&
                  "Card Number:"}
                <input
                  type="text"
                  value={
                    paymentMethod === "evc"
                      ? paymentDetails.evcNumber
                      : paymentMethod === "edahab"
                      ? paymentDetails.edahabNumber
                      : paymentDetails.cardNumber
                  }
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      [paymentMethod === "evc"
                        ? "evcNumber"
                        : paymentMethod === "edahab"
                        ? "edahabNumber"
                        : "cardNumber"]: e.target.value,
                    })
                  }
                  placeholder="xxxxxxxxxxx"
                  className="block w-full mt-2 p-2 border rounded"
                />
                {errors.evcNumber && (
                  <p className="text-red-500">{errors.evcNumber}</p>
                )}
                {errors.edahabNumber && (
                  <p className="text-red-500">{errors.edahabNumber}</p>
                )}
                {errors.cardNumber && (
                  <p className="text-red-500">{errors.cardNumber}</p>
                )}
              </label>

              {(paymentMethod === "mrcard" || paymentMethod === "visa") && (
                <label className="block mb-2">
                  CVV:
                  <input
                    type="text"
                    value={paymentDetails.cardCvv}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cardCvv: e.target.value,
                      })
                    }
                    placeholder="xxx"
                    className="block w-full mt-2 p-2 border rounded"
                  />
                  {errors.cardCvv && (
                    <p className="text-red-500">{errors.cardCvv}</p>
                  )}
                </label>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleOrderConfirmation}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirm Order
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
            <p>{confirmationMessage}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;

