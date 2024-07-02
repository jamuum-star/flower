
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useCart } from "./CartContext";

const flowers = [
  {
    id: 1,
    img1: "/images/Classic-BAU-Posy-Thumbnail_400x.png",
    img2: "/images/lvly-personalised-plant-teal_400.png",
    title: "Personalised Plant + Pot Lucky Dip",
    review: "15 Reviews",
    price: 234.99,
    rating: 4.5,
    description: "A unique combination of personalized plant and pot.",
  },
  {
    id: 2,
    img1: "/images/product-img-3.png",
    img2: "/images/product-img-4.png",
    title: "Flower Jars",
    review: "1265 Reviews",
    price: 304.99,
    rating: 4.5,
    description: "Beautifully arranged flower jars.",
  },

  {
    id: 3,
    img1: "/images/seasional/m1.jpg",
    img2: "/images/seasional/m2.jpg",
    title: "Blossoming Spring Mix",
    review: "120 Reviews",
    price: 219.99,
    rating: 4.6,
    description:
      "A vibrant mix of spring blossoms to bring fresh energy to your space.",
  },
  {
    id: 4,
    img1: "/images/seasional/l1.jpg",
    img2: "/images/seasional/l2.jpg",
    title: "Autumn Harvest Bouquet",
    review: "980 Reviews",
    price: 269.99,
    rating: 4.7,
    description: "A beautiful bouquet capturing the rich colors of autumn.",
  },
  {
    id: 5,
    img1: "/images/seasional/d1.jpg",
    img2: "/images/seasional/d2.jpg",
    title: "Winter Wonderland Arrangement",
    review: "450 Reviews",
    price: 249.99,
    rating: 4.5,
    description: "An elegant arrangement perfect for the winter season.",
  },
  {
    id: 6,
    img1: "/images/seasional/j1.jpg",
    img2: "/images/seasional/j2.jpg",
    title: "Summer Sunshine Bundle",
    review: "320 Reviews",
    price: 229.99,
    rating: 4.6,
    description: "A cheerful bundle of summer flowers to brighten your day.",
  },
  {
    id: 7,
    img1: "/images/seasional/s1.jpg",
    img2: "/images/seasional/s2.jpg",
    title: "Valentine's Day Roses",
    review: "500 Reviews",
    price: 299.99,
    rating: 4.8,
    description: "A classic bouquet of red roses, perfect for Valentine's Day.",
  },
  {
    id: 8,
    img1: "/images/seasional/w1.jpg",
    img2: "/images/seasional/w2.jpg",
    title: "Mother's Day Special",
    review: "750 Reviews",
    price: 289.99,
    rating: 4.9,
    description: "A beautiful arrangement to celebrate Mother's Day.",
  },
  {
    id: 9,
    img1: "/images/seasional/g1.jpg",
    img2: "/images/seasional/g2.jpg",
    title: "Easter Floral Basket",
    review: "200 Reviews",
    price: 179.99,
    rating: 4.4,
    description:
      "A delightful basket of flowers perfect for Easter celebrations.",
  },
  {
    id: 10,
    img1: "/images/seasional/h1.jpg",
    img2: "/images/seasional/h2.jpg",
    title: "Thanksgiving Centerpiece",
    review: "650 Reviews",
    price: 259.99,
    rating: 4.7,
    description: "A stunning centerpiece to adorn your Thanksgiving table.",
  },

  // Add other flower data here
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = flowers.find((flower) => flower.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product.img1);
  const [quantity, setQuantity] = useState(1);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const totalPrice = product.price * quantity;

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-white font-bold">
        <img
          className="w-[300px] h-[300px] object-cover rounded-3xl"
          src="/images/logo.jpg"
          alt="jacar"
        />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // You can optionally show a confirmation message here
    // or perform other actions after adding to cart.
  };

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
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;




