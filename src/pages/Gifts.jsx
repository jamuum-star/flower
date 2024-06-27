import React from "react";
import { useCart } from "../components/CartContext.jsx"; // Import useCart from CartContext
import ReactStars from "react-rating-stars-component"; // Import ReactStars

function Gifts() {
  const { addToCart } = useCart();

  const flowers = [
    {
      id: 1,
      img1: "/images/Classic-BAU-Posy-Thumbnail_400x.png",
      img2: "/images/lvly-personalised-plant-teal_400.png",
      title: "Personalised Plant + Pot Lucky Dip",
      review: "15 Reviews",
      price: "$234.99",
    },
    {
      id: 2,
      img1: "/images/product-img-3.png",
      img2: "/images/product-img-4.png",
      title: "Flower Jars",
      review: "1265 Reviews",
      price: "$304.99",
    },
    // Add more flowers as needed
  ];

  return (
    <div>
      <h1> Gifts</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {flowers.map((flower) => (
          <div key={flower.id} className="product w-[280px]">
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
            <div className="contact bg-[#fbfbfb] p-2">
              <h4 className="text-sm font-normal leading-6 scroll-m-5">
                {flower.title}
              </h4>
              <div className="rating flex gap-2 items-center">
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="text-sm font-normal leading-6 scroll-m-5">
                  {flower.review}
                </p>
              </div>
              <p>{flower.price}</p>
              <button
                onClick={() => addToCart(flower)}
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
