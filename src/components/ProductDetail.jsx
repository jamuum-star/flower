import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useCart } from "./CartContext";// Import useCart from CartContext
import flowersData from "./services/giftService"; // Assuming flowersData is imported correctly

const ProductDetail = () => {
  const { id } = useParams(); // Extract id from URL parameters
  const { addToCart } = useCart(); // Access addToCart function from CartContext
  const product = flowersData.find((p) => p.id === parseInt(id)); // Find product by id from flowersData

  const [selectedImage, setSelectedImage] = useState(""); // State for selected image
  const [quantity, setQuantity] = useState(1); // State for quantity of product to add to cart

  // Set initial state based on product data when product changes
  useEffect(() => {
    if (product) {
      setSelectedImage(product.img1); // Set initial selected image
      setQuantity(1); // Reset quantity whenever product changes
    }
  }, [product]);
  // Function to handle thumbnail click and change selected image
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };
  // Function to increment quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  // Function to decrement quantity, with minimum quantity of 1
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  // Calculate total price based on product price and quantity
  const totalPrice = product ? product.price * quantity : 0;
  // Function to add product to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity }); // Add product to cart with selected quantity
    }
  };
  // Render loading state if product is not found
  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-white font-bold">
        <img
          className="w-[800px] h-[600px] object-cover rounded-2xl"
          src="/not.gif"
          alt="Product not found"
        />
      </div>
    );
  }
  // Render product details if product is found
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Main Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex justify-center">
            <img
              className="w-full md:max-w-md h-auto rounded-lg mb-4"
              src={selectedImage}
              alt={product.title}
            />
          </div>
          {/* Thumbnail Images Section */}
          <div className="small-sec flex justify-center mt-4">
            {product.img1 && (
              <img
                key={product.id + "_img1"}
                className={`small-img w-16 h-auto rounded-lg cursor-pointer ${
                  selectedImage === product.img1 ? "active-img" : ""
                }`}
                src={product.img1}
                alt={`Thumbnail 1`}
                onClick={() => handleThumbnailClick(product.img1)}
              />
            )}
            {product.img2 && (
              <img
                key={product.id + "_img2"}
                className={`small-img w-16 h-auto rounded-lg cursor-pointer ml-4 ${
                  selectedImage === product.img2 ? "active-img" : ""
                }`}
                src={product.img2}
                alt={`Thumbnail 2`}
                onClick={() => handleThumbnailClick(product.img2)}
              />
            )}
          </div>
        </div>
        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            <ReactStars
              count={5}
              size={24}
              value={product.rating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="ml-2 text-gray-600">{product.review}</p>
          </div>
          <p className="text-xl font-semibold text-gray-800 mb-2">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center mb-4">
            <button
              className="bg-gray-200 text-gray-700 px-4 py-1 rounded-l"
              onClick={decrementQuantity}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 text-center px-2 py-1 border border-gray-400 rounded"
            />
            <button
              className="bg-gray-200 text-gray-700 px-4 py-1 rounded-r"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
            <Link
              to="/checkout"
              onClick={handleAddToCart}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


