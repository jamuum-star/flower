

import React from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const flowers = [
  {
    id: 37,
    img1: "/images/native/a1.jpg",
    img2: "/images/native/a2.jpg",
    title: "Desert Bloom",
    review: "40 Reviews",
    price: 85.0,
    rating: 4.5,
    description:
      "A vibrant mix of desert flowers that thrive in arid climates, bringing a touch of wild beauty to your home.",
  },
  {
    id: 38,
    img1: "/images/native/b1.jpg",
    img2: "/images/native/b2.jpg",
    title: "Savannah Splendor",
    review: "1225 Reviews",
    price: 150.0,
    rating: 4.8,
    description:
      "An exotic collection of flowers native to the African savannah, perfect for adding a unique touch to any space.",
  },
  {
    id: 39,
    img1: "/images/native/c1.jpg",
    img2: "/images/native/c2.jpg",
    title: "Prairie Beauty",
    review: "180 Reviews",
    price: 120.0,
    rating: 4.7,
    description:
      "A charming set of wildflowers native to the prairies, bringing the simplicity and beauty of the grasslands indoors.",
  },
  {
    id: 40,
    img1: "/images/native/d1.jpg",
    img2: "/images/native/d2.jpg",
    title: "Tropical Paradise",
    review: "950 Reviews",
    price: 130.0,
    rating: 4.6,
    description:
      "A vibrant assortment of tropical flowers, ideal for creating a lush, exotic atmosphere in your home.",
  },
  {
    id: 41,
    img1: "/images/native/e2.jpg",
    img2: "/images/native/e1.jpg",
    title: "Mountain Majesty",
    review: "410 Reviews",
    price: 175.0,
    rating: 4.4,
    description:
      "A stunning array of mountain wildflowers, capturing the essence of high-altitude beauty and resilience.",
  },
  {
    id: 42,
    img1: "/images/native/f1.jpg",
    img2: "/images/native/f2.jpg",
    title: "Meadow Bliss",
    review: "305 Reviews",
    price: 95.0,
    rating: 4.7,
    description:
      "A delightful mix of meadow flowers, perfect for adding a touch of countryside charm to any setting.",
  },
  {
    id: 43,
    img1: "/images/native/g1.jpg",
    img2: "/images/native/g2.jpg",
    title: "Woodland Whimsy",
    review: "480 Reviews",
    price: 110.0,
    rating: 4.8,
    description:
      "An enchanting collection of woodland flowers, ideal for bringing a bit of forest magic into your home.",
  },
  {
    id: 44,
    img1: "/images/native/h1.jpg",
    img2: "/images/native/h2.jpg",
    title: "Seaside Serenity",
    review: "820 Reviews",
    price: 105.0,
    rating: 4.7,
    description:
      "A serene assortment of flowers native to coastal areas, perfect for evoking the calm and beauty of the seaside.",
  },
  {
    id: 45,
    img1: "/images/native/i1.jpg",
    img2: "/images/native/i2.jpg",
    title: "Forest Foliage",
    review: "275 Reviews",
    price: 125.0,
    rating: 4.5,
    description:
      "A rich collection of flowers and foliage from forested regions, perfect for creating a natural and tranquil environment.",
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
            MOST  Native Flowers
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
            src="/images/nativebg.jpg"
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
