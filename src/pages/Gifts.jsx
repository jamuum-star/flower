
import React from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const flowers = [
  {
    id: 28,
    img1: "/images/gifts/a1.jpg",
    img2: "/images/gifts/a2.jpg",
    title: "Winter Wonderland",
    review: "40 Reviews",
    price: 110.0,
    rating: 4.5,
    description:
      "A delightful collection of winter-themed goodies, perfect for bringing warmth and cheer to the cold season.",
  },
  {
    id: 29,
    img1: "/images/gifts/b1.jpg",
    img2: "/images/gifts/b2.jpg",
    title: "Rose Reverie",
    review: "1225 Reviews",
    price: 325.0,
    rating: 4.8,
    description:
      "A luxurious set of rose-scented bath products, designed to provide a spa-like experience at home.",
  },
  {
    id: 30,
    img1: "/images/gifts/c1.jpg",
    img2: "/images/gifts/c2.jpg",
    title: "Rustic Romance",
    review: "180 Reviews",
    price: 235.0,
    rating: 4.7,
    description:
      "A charming set of rustic-themed home decor items, perfect for adding a cozy touch to any room.",
  },
  {
    id: 31,
    img1: "/images/gifts/d1.jpg",
    img2: "/images/gifts/d2.jpg",
    title: "Floral Symphony",
    review: "950 Reviews",
    price: 180.0,
    rating: 4.6,
    description:
      "A vibrant collection of artisanal candles, each inspired by different floral scents to bring the garden indoors.",
  },
  {
    id: 32,
    img1: "/images/gifts/e1.jpg",
    img2: "/images/gifts/e2.jpg",
    title: "Festive Cheer",
    review: "410 Reviews",
    price: 285.0,
    rating: 4.4,
    description:
      "A lively gift basket filled with festive treats and goodies, perfect for celebrating special occasions.",
  },
  {
    id: 33,
    img1: "/images/gifts/f1.jpg",
    img2: "/images/gifts/f2.jpg",
    title: "Passionate Embrace",
    review: "305 Reviews",
    price: 255.0,
    rating: 4.7,
    description:
      "A romantic gift set featuring premium chocolates and a plush teddy bear, ideal for expressing heartfelt emotions.",
  },
  {
    id: 34,
    img1: "/images/gifts/g1.jpg",
    img2: "/images/gifts/g2.jpg",
    title: "Timeless Charm",
    review: "480 Reviews",
    price: 240.0,
    rating: 4.8,
    description:
      "An elegant collection of vintage-inspired jewelry, perfect for adding a touch of classic charm to any outfit.",
  },
  {
    id: 35,
    img1: "/images/gifts/h1.jpg",
    img2: "/images/gifts/h2.jpg",
    title: "Magenta Splendor",
    review: "820 Reviews",
    price: 200.0,
    rating: 4.7,
    description:
      "A splendid set of magenta-themed stationery, designed to brighten up your desk and inspire creativity.",
  },
  {
    id: 36,
    img1: "/images/gifts/i1.jpg",
    img2: "/images/gifts/i2.jpg",
    title: "Sunny Blossoms",
    review: "275 Reviews",
    price: 215.0,
    rating: 4.5,
    description:
      "A cheerful gift box filled with sunflower-themed kitchen accessories, perfect for adding a touch of sunshine to your home.",
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
      <div className="bg-custom-blue min-s-screen flex flex-col items-center justify-center p-0">
        <div className="bg-custom-blue p-8 rounded-lg  text-center max-w-3xl">
          <p className="text-gray-600 mb-2">★★★★★ 4.50 from 4,959 reviews</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explosion Boxes
          </h1>
          <p className="text-gray-600">
            Looking for a totally unique way to surprise someone you love? Our
            new explosion boxes are the perfect way to do just that! Make them
            laugh, shout, and squeal with an explosion of colourful
            eco-confetti. Our team are out delivering boxes of joy 7-days a
            week.
          </p>
        </div>
      </div>
      <div className="relative pt-0">
        <div className="w-full">
          <video
            className="w-full object-cover md:h-100 h-[428px]"
            src="/video/giftbg.mp4"
            alt="home-video"
            autoPlay
            loop
            
            controls
          />
        </div>
      </div>
      <section className="section">
        <div className="container px-4 mx-auto">
          <h1 className="p-4 text-[#383c4f] font-semibold text-center scroll-m-20 text-3xl md:text-4xl">
            Shop All Gifts
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
            src="/images/giftsbg.jpg"
            alt="home-img"
          />
        </div>
        <div className="py-5 w-full md:bg-slate-700  md:w-2/6 absolute h-[220px] md:right-20 md:top-44 md:bottom-40 ml-72 text-center xs:rounded xs:w-64 xs:right-7 xs:bg-slate-600 xs:bottom-0 xs:top-42 max-auto">
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

export default Gifts;
