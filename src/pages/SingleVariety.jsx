import React from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const flowers = [
  {
    id: 10,
    img1: "/images/singlevarity/a1.png",
    img2: "/images/singlevarity/a2.png",
    title: "Elegant White",
    review: "25 Reviews",
    price: 85,
    rating: 4.8,
    description:
      "A sophisticated arrangement of pure white blooms, perfect for any occasion.",
  },
  {
    id: 11,
    img1: "/images/singlevarity/b1.png",
    img2: "/images/singlevarity/b2.png",
    title: "Blushing Beauty",
    review: "1350 Reviews",
    price: 310,
    rating: 4.7,
    description:
      "Delight in the delicate beauty of this blushing bouquet, featuring exquisite roses.",
  },
  {
    id: 12,
    img1: "/images/singlevarity/c1.png",
    img2: "/images/singlevarity/c2.png",
    title: "Personal Touch",
    review: "150 Reviews",
    price: 239.99,
    rating: 4.9,
    description:
      "Add a personal touch with this unique flower jar and picture combo.",
  },
  {
    id: 13,
    img1: "/images/singlevarity/d1.png",
    img2: "/images/singlevarity/d2.png",
    title: "Vase of Joy",
    review: "1050 Reviews",
    price: 155,
    rating: 4.8,
    description: "A joyful arrangement of vibrant flowers in a beautiful vase.",
  },
  {
    id: 14,
    img1: "/images/singlevarity/e1.png",
    img2: "/images/singlevarity/e2.png",
    title: "Birthday Blossoms",
    review: "470 Reviews",
    price: 259.99,
    rating: 4.6,
    description: "Celebrate birthdays with this lively and colorful bouquet.",
  },
  {
    id: 15,
    img1: "/images/singlevarity/f1.png",
    img2: "/images/singlevarity/f2.png",
    title: "Romantic Roses",
    review: "340 Reviews",
    price: 249.99,
    rating: 4.7,
    description:
      "Express your love with this stunning bouquet of premium roses.",
  },
  {
    id: 16,
    img1: "/images/singlevarity/g1.png",
    img2: "/images/singlevarity/g2.png",
    title: "Classic Elegance",
    review: "520 Reviews",
    price: 215.99,
    rating: 4.9,
    description:
      "A timeless collection of elegant flowers for any special occasion.",
  },
  {
    id: 17,
    img1: "/images/singlevarity/h1.png",
    img2: "/images/singlevarity/h2.png",
    title: "Rose Delight",
    review: "780 Reviews",
    price: 180.5,
    rating: 5.0,
    description:
      "A delightful mix of magenta and pink roses, perfect for brightening any room.",
  },
  {
    id: 18,
    img1: "/images/singlevarity/i1.png",
    img2: "/images/singlevarity/i2.png",
    title: "Sunny Sunflowers",
    review: "220 Reviews",
    price: 189.99,
    rating: 4.5,
    description:
      "Brighten your day with a stunning arrangement of iconic sunflowers.",
  },
  // Add other flower data here
];

function SingleVariety() {
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
            Single Variety Bunches
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
            MOST WANTED SINGLE VARIETY
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

export default SingleVariety;
