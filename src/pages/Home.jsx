import React, { useState,useEffect } from "react";
import { useCart } from "../components/CartContext"; // Adjust path based on your project structure
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import useTestimonialsApi from "../components/services/useTestimonialsApi";

function Home() {
  const { addToCart } = useCart();
  const [itemsToShow, setItemsToShow] = useState(6); // Initial number of items to show
  const testimonials = useTestimonialsApi();

  
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
      description:
        "A joyful arrangement of vibrant flowers in a beautiful vase.",
    },
    // Add more flowers as needed
  ];

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 3); // Load 3 more items when clicked
  };

  const handleAddToCart = (flower) => {
    addToCart({ ...flower, quantity: 1 });
    // You can optionally show a confirmation message here
    // or perform other actions after adding to cart.
  };

  return (
    <>
      <section>
        <div className="relative">
          <div className="w-full">
            <img
              className="w-full object-cover md:h-240 h-[380px]"
              src="/public/images/lvly-plants-desktop-banner_1800x.png"
              alt="home-img"
            />
          </div>
          <div className="py-5 md:bg-slate-700 w-full md:w-2/6 absolute h-[220px] md:right-20 md:top-24 md:bottom-40 ml-72 text-center xs:rounded xs:w-64 xs:right-7 xs:bg-slate-600 xs:bottom-0 xs:top-32 max-auto">
            <h1 className="text-white scroll-m-20 md:text-3xl font-light tracking-tight xs:text-xs">
              Make Someone's Day
            </h1>
            <p className="leading-5 md:text-sm [&:not(:first-child)]:mt-4 text-white xs:text-xs xs:leading-5">
              Locally-sourced plants, flowers, and personalized gifts to make
              them smile.
            </p>
            <p className="leading-5 md:text-sm [&:not(:first-child)]:mt-4 text-white xs:text-xs">
              Same day delivery available, 7 days a week.
            </p>
            <button className="px-4 py-2 font-bold bg-white text-slate-700 rounded mt-4 hover:shadow-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-16 mx-auto px-4">
          <h1 className="text-[#383c4f] font-semibold text-center scroll-m-20 text-3xl md:text-4xl">
            Shop By Occasion
          </h1>
          <div className="flex flex-wrap justify-center mt-4 gap-4">
            <div className="w-60">
              <img
                src="/public/images/SEASONAL_FLOWERS_cc3194f7-15a5-4.png"
                alt="Sympathy Flowers"
                className="w-full"
              />
              <div className="bg-[#D6DDB1] mt-[-1px] rounded-b-md p-4">
                <p className="font-semibold text-[#383c4f]">Sympathy Flowers</p>
              </div>
            </div>
            <div className="w-60">
              <img
                src="/public/images/BIRTHDAY_471dc0ae-9a5b-433e-804d.png"
                alt="Birthday Flowers"
                className="w-full"
              />
              <div className="bg-[#6DBDAE] mt-[-1px] rounded-b-md p-4">
                <p className="font-semibold text-[#383c4f]">Birthday Flowers</p>
              </div>
            </div>
            <div className="w-60">
              <img
                src="/public/images/WELLNESS_df16ed14-ace9-4d29-ab30.png"
                alt="Wellness"
                className="w-full"
              />
              <div className="bg-[#DECCFF] mt-[-1px] rounded-b-md p-4">
                <p className="font-semibold text-[#383c4f]">Wellness</p>
              </div>
            </div>
            <div className="w-60">
              <img
                src="/public/images/CELEBRATION_6043c184-9cd5-4a36-9.png"
                alt="Celebration"
                className="w-full"
              />
              <div className="bg-[#E7B5A6] mt-[-1px] rounded-b-md p-4">
                <p className="font-semibold text-[#383c4f]">Celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container px-4 mx-auto">
          <h1 className="p-4 text-[#383c4f] font-semibold text-center scroll-m-20 text-3xl md:text-4xl">
            MOST WANTED GIFTS
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {flowers.slice(0, itemsToShow).map((flower) => (
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
          {itemsToShow < flowers.length && (
            <div className="text-center my-4">
              <button
                onClick={handleLoadMore}
                className="py-2 px-4 bg-[#ee4382] hover:bg-[#ee4493] text-sm font-bold text-white"
              >
                SHOW ALL PRODUCTS
              </button>
            </div>
          )}
        </div>
      </section>

      <section>
        <div>
          <div className="relative">
            <div className="w-full">
              <img
                className="w-full object-cover md:h-250 h-[380px]"
                src="/public/images/Desktop_-_Sweet_Explosion_box_co.png"
                alt="home-img"
              />
            </div>
            <div className="py-5 md:bg-slate-700 w-full md:w-2/6 absolute h-[220px] md:right-20 md:top-24 md:bottom-40 ml-72 text-center xs:rounded xs:w-64 xs:right-7 xs:bg-slate-600 xs:bottom-0 xs:top-32 max-auto">
              <h1 className="text-white scroll-m-20 md:text-3xl font-light tracking-tight xs:text-xs">
                All your gift needs
              </h1>
              <p className="leading-5 md:text-sm [&:not(:first-child)]:mt-4 text-white xs:text-xs xs:leading-5">
                Fresh flowers, bespoke plant gifts, delicious nibbles & boozy
                boxes.
              </p>
              <button className="px-4 py-2 font-bold bg-white text-slate-700 rounded mt-4 hover:shadow-md">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h1 className="text-[#383c4f] font-semibold text-center scroll-m-20 text-3xl md:text-4xl">
            TESTIMONIALS
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {testimonials.slice(0, 4).map((testimonial) => (
              <div
                key={testimonial.id}
                className="border p-4 rounded-md shadow-md"
              >
                <p className="text-gray-600 mb-2">{testimonial.body}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.email}</p>
              </div>
            ))}
          </div>
          {testimonials.length > 3 && (
            <div className="flex justify-center mt-8"></div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;

