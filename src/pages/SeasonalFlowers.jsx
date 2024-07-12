import React from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const flowers = [
  {
    id: 1,
    img1: "/images/seasional/a1.jpg",
    img2: "/images/seasional/a2.jpg",
    title: "White Posy",
    review: "15 Reviews",
    price: 70,
    rating: 5,
    description:
      "Freshly picked, locally grown blooms in whites and creams hand arranged by our skilful florists.",
  },
  {
    id: 2,
    img1: "/images/seasional/b1.jpg",
    img2: "/images/seasional/b2.jpg",
    title: "Coral Cutie",
    review: "1265 Reviews",
    price: 290,
    rating: 4.5,
    description:
      " this beautiful Coral Cutie bouquet would be pictured alongside it. With a stunning orchid flower stem.",
  },
  {
    id: 3,
    img1: "/images/seasional/c1.jpg",
    img2: "/images/seasional/c2.jpg",
    title: "Personal - Flower Jar + Picture",
    review: "120 Reviews",
    price: 219.99,
    rating: 4.6,
    description: "This double personalised bundle ticks all the boxes.",
  },
  {
    id: 4,
    img1: "/images/seasional/d1.jpg",
    img2: "/images/seasional/d2.jpg",
    title: "Flowers + Vase",
    review: "980 Reviews",
    price: 140,
    rating: 4.7,
    description:
      " Beautiful, locally-grown flowers arranged by our talented florists .",
  },
  {
    id: 5,
    img1: "/images/seasional/e1.jpg",
    img2: "/images/seasional/e2.jpg",
    title: "B'day Vibes",
    review: "450 Reviews",
    price: 249.99,
    rating: 4.5,
    description:
      "Celebrate your besties big day with this party poppin bundle.",
  },
  {
    id: 6,
    img1: "/images/seasional/f1.jpg",
    img2: "/images/seasional/f2.jpg",
    title: "Love Story",
    review: "320 Reviews",
    price: 229.99,
    rating: 4.6,
    description:
      "peach pastel bouquet to that special someone in your life. With premium rose stems.",
  },
  {
    id: 7,
    img1: "/images/seasional/g1.jpg",
    img2: "/images/seasional/g2.jpg",
    title: "Timeless Classic",
    review: "500 Reviews",
    price: 200.99,
    rating: 4.8,
    description: "A stunning and generous collection of locally grown flowers.",
  },
  {
    id: 8,
    img1: "/images/seasional/h1.jpg",
    img2: "/images/seasional/h2.jpg",
    title: "Strike a Rose",
    review: "750 Reviews",
    price: 170.5,
    rating: 4.9,
    description:
      "this stunning bunch of magenta and pink flowers, filled with roses, disbuds.",
  },
  {
    id: 9,
    img1: "/images/seasional/i1.jpg",
    img2: "/images/seasional/i2.jpg",
    title: "Sunflowers",
    review: "200 Reviews",
    price: 179.99,
    rating: 4.4,
    description:
      "always looking on the bright side of life with a same-day delivery of iconic Sunflowers..",
  },
];

function SeasonalFlowers() {
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
            Seasonal Flowers
          </h1>
          <p className="text-gray-600">
            Enjoy{" "}
            <span className="font-semibold">same day flower delivery</span> if
            you place your order
            <span className="font-semibold"> before 5PM AEDT</span> for metro
            areas. National next day delivery for all other locations. Our team
            of skilled florists are here for you 7-days a week.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container px-4 mx-auto">
          <h1 className="p-4 text-[#383c4f] font-semibold text-center scroll-m-20 text-3xl md:text-4xl">
            MOST WANTED SEASONAL FLOWERS
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
      <div className="relative">
        <div className="w-full">
          <img
            className="w-full object-cover md:h-240 h-[540px]"
            src="/images/seasionalbanner.jpg"
            alt="home-img"
          />
        </div>
        <div className="py-5 md:bg-slate-700 w-full md:w-2/6 absolute h-[220px] md:right-20 md:top-24 md:bottom-40 ml-72 text-center xs:rounded xs:w-64 xs:right-7 xs:bg-slate-600 xs:bottom-0 xs:top-32 max-auto">
          <h1 className="text-white scroll-m-20 md:text-3xl font-light tracking-tight xs:text-xs">
            Make It Personal
          </h1>
          <p className="leading-5 md:text-sm [&:not(:first-child)]:mt-4 text-white xs:text-xs xs:leading-5">
            Locally-sourced plants, flowers, and personalized gifts to make them
            smile.
          </p>
          <p className="leading-5 md:text-sm [&:not(:first-child)]:mt-4 text-white xs:text-xs">
            Same day delivery available, 7 days a week.
          </p>
          <button className="px-4 py-2 font-bold bg-white text-slate-700 rounded mt-4 hover:shadow-md">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeasonalFlowers;
