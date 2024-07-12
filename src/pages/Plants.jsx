

import React from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const flowers = [
  {
    id: 19,
    img1: "/images/plants/a1.jpg",
    img2: "/images/plants/a2.jpg",
    title: "Snowy Serenity",
    review: "40 Reviews",
    price: 95.5,
    rating: 4.6,
    description:
      "A serene arrangement of delicate white blooms, perfect for creating a calming atmosphere in any space.",
  },
  {
    id: 20,
    img1: "/images/plants/b1.jpg",
    img2: "/images/plants/b2.jpg",
    title: "Pink Petal Perfection",
    review: "1225 Reviews",
    price: 299.5,
    rating: 4.9,
    description:
      "Experience the perfect harmony of pink petals with this exquisite bouquet of roses, designed to add elegance to your decor.",
  },
  {
    id: 21,
    img1: "/images/plants/c1.jpg",
    img2: "/images/plants/c2.jpg",
    title: "Charming Bouquet",
    review: "180 Reviews",
    price: 219.99,
    rating: 4.8,
    description:
      "Add a charming touch to your space with this delightful bouquet in a rustic jar, accompanied by a heartfelt picture.",
  },
  {
    id: 22,
    img1: "/images/plants/d1.jpg",
    img2: "/images/plants/d2.jpg",
    title: "Garden Symphony",
    review: "950 Reviews",
    price: 165.75,
    rating: 4.7,
    description:
      "Celebrate nature's beauty with this vibrant garden arrangement presented in a lovely vase, perfect for indoor enjoyment.",
  },
  {
    id: 23,
    img1: "/images/plants/e1.jpg",
    img2: "/images/plants/e2.jpg",
    title: "Celebration Bouquet",
    review: "410 Reviews",
    price: 269.5,
    rating: 4.5,
    description:
      "Mark every occasion with this lively and festive bouquet, crafted to spread joy and brighten any room.",
  },
  {
    id: 24,
    img1: "/images/plants/f1.jpg",
    img2: "/images/plants/f2.jpg",
    title: "Passion's Embrace",
    review: "305 Reviews",
    price: 239.5,
    rating: 4.8,
    description:
      "Express your deepest emotions with this passionate bouquet of premium roses, ideal for conveying heartfelt sentiments.",
  },
  {
    id: 25,
    img1: "/images/plants/g1.jpg",
    img2: "/images/plants/g2.jpg",
    title: "Timeless Beauty",
    review: "480 Reviews",
    price: 225.99,
    rating: 4.9,
    description:
      "Capture timeless elegance with these stunning flowers, perfect for adding a touch of grace to any special occasion.",
  },
  {
    id: 26,
    img1: "/images/plants/h1.jpg",
    img2: "/images/plants/h2.jpg",
    title: "Magenta Magic",
    review: "820 Reviews",
    price: 185.25,
    rating: 4.9,
    description:
      "Brighten your space with the enchanting mix of magenta and pink roses, designed to bring joy and charm.",
  },
  {
    id: 27,
    img1: "/images/plants/i1.jpg",
    img2: "/images/plants/i2.jpg",
    title: "Golden Radiance",
    review: "275 Reviews",
    price: 199.99,
    rating: 4.6,
    description:
      "Illuminate your day with the radiant beauty of these iconic sunflowers, symbolizing happiness and warmth with their golden hues.",
  },

  // Add other flower data here
];

function Plants() {
  const { addToCart } = useCart();

  const handleAddToCart = (flower) => {
    addToCart({ ...flower, quantity: 1 });
  };

  return (
    <div>
      <div className="bg-custom-blue min-s-screen flex flex-col items-center justify-center p-1">
        <div className="bg-custom-blue p-8 rounded-lg  text-center max-w-3xl">
          <p className="text-gray-600 mb-2">★★★★★ 4.50 from 4,959 reviews</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Indoor Plant Gifts
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
            Indoor Plants & Plant Based Gifts
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
            src="/images/plantbg.jpg"
            alt="home-img"
          />
        </div>
        <div className="py-5 w-full md:bg-slate-700  md:w-2/6 absolute h-[220px] md:right-20 md:top-44 md:bottom-40 ml-72 text-center xs:rounded xs:w-64 xs:right-7 xs:bg-slate-600 xs:bottom-0 xs:top-42 max-auto">
          <h1 className="text-white scroll-m-20 md:text-3xl font-bold tracking-tight xs:text-xs">
            Flowers & Plants
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

export default Plants;
