
import React from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

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
  // Add other flower data here
];

function Gifts() {
  const { addToCart } = useCart();


  const handleAddToCart = (flower) => {
    addToCart({ ...flower, quantity: 1 });
    // You can optionally show a confirmation message here
    // or perform other actions after adding to cart.
  };

  return (
    <div>
      <h1>Gifts</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {flowers.map((flower) => (
          <div key={flower.id} className="product w-[280px]">
            <Link to={`/product/${flower.id}`}>
              <div className="product-img items-center">
                <img
                  className="w-[280px] h-[350px]"
                  src={flower.img1}
                  alt={flower.title}
                />
                <img
                  className="w-[280px] h-[350px]"
                  src={flower.img2}
                  alt={flower.title}
                />
              </div>
            </Link>
            <div className="contact bg-[#fbfbfb] p-2">
              <h4 className="text-sm font-normal leading-6 scroll-m-5">
                {flower.title}
              </h4>
              <div className="rating flex gap-2 items-center">
                <ReactStars
                  count={5}
                  size={24}
                  value={flower.rating}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="text-sm font-normal leading-6 scroll-m-5">
                  {flower.review}
                </p>
              </div>
              <p>{flower.price}</p>
              <button
                onClick={() => handleAddToCart(flower)}
                className="flex bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gifts;
