

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

function NativeFlowers() {
  const { addToCart } = useCart();

  const handleAddToCart = (flower) => {
    addToCart({ ...flower, quantity: 1 });
    // You can optionally show a confirmation message here
    // or perform other actions after adding to cart.
  };

  return (
    <div>
      <div className="bg-custom-blue min-s-screen flex flex-col items-center justify-center p-1">
        <div className="bg-custom-blue p-8 rounded-lg  text-center max-w-3xl">
          <p className="text-gray-600 mb-2">★★★★★ 4.50 from 4,959 reviews</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Native Flowers
          </h1>
          <p className="text-gray-600">
            Enjoy{" "}
            <span className="font-semibold">same day flower delivery</span> if
            you place your order
            <span className="font-semibold"> before 5PM EST</span> for metro
            areas. National next day delivery for all other locations. Our team
            of skilled florists are here for you 7-days a week.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container px-4 mx-auto">
          <h1 className="p-4 text-[#383c4f] font-semibold text-center scroll-m-20 text-3xl md:text-4xl">
            MOST WANTED Native
          </h1>
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
                  <p>${flower.price}</p>
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
      </section>
      <div className="relative pt-4">
        <div className="w-full">
          <img
            className="w-full object-cover md:h-240 h-[530px]"
            src="/public/images/nativebg.jpg"
            alt="home-img"
          />
        </div>
        <div className="py-5 w-full md:bg-custom-bluen  md:w-2/6 absolute h-[220px] md:right-20 md:top-44 md:bottom-40 ml-72 text-center xs:rounded xs:w-64 xs:right-7 xs:bg-slate-600 xs:bottom-0 xs:top-42 max-auto">
          <h1 className="text-white scroll-m-20 md:text-3xl font-bold tracking-tight xs:text-xs">
            Flowers & Personalised Gifts
          </h1>
          <p className="leading-5 md:text-sm [&:not(:first-child)]:mt-4 text-white xs:text-xs xs:leading-5">
            Locally-sourced plants, flowers, and personalized gifts to make them
            smile.
          </p>
          <p className="leading-5 md:text-sm [&:not(:first-child)]:mt-4 text-white xs:text-xs">
            Same day delivery available, 7 days a week.
          </p>
          <button className="px-4 py-2 font-bold bg-white text-slate-700 rounded mt-4 hover:shadow-md">
            SHOP ALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default NativeFlowers;
