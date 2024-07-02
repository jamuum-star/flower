import React from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const flowers = [
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
      <div className="relative">
        <div className="w-full">
          <img
            className="w-full object-cover md:h-240 h-[380px]"
            src="/public/images/seasionalbanner.jpg"
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
      <h1>Seasonal Flowers</h1>

      <section className="section">
        <div className="container px-4 mx-auto">
          <h1 className="p-4 text-[#383c4f] font-semibold text-center scroll-m-20 text-3xl md:text-4xl">
            MOST WANTED GIFTS
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

          <div className="text-center my-4">
            <button className="py-2 px-4 bg-[#ee4382] hover:bg-[#ee4493] text-sm font-bold text-white">
              SHOW ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeasonalFlowers;
