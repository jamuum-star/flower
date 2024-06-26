import React, { useState } from "react";
import Product from "../components/Product";
import ShoppingCart from "../components/ShoppingCart";
import CartPage from "../components/CartPage";

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log("Adding to cart:", item);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
          <div className="border-t border-black my-4"></div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Product
              img1="/public/images/Classic-BAU-Posy-Thumbnail_400x.png"
              img2="/public/images/lvly-personalised-plant-teal_400.png"
              title="Personalised Plant + Pot Lucky Dip"
              review="15 Reviews"
              price="$234.99"
              addToCart={addToCart}
            />
            <Product
              img1="/public/images/product-img-3.png"
              img2="/public/images/product-img-4.png"
              title="Flower Jars"
              review="1265 Reviews"
              price="$304.99"
              addToCart={addToCart}
            />
            <Product
              img1="/public/images/product-img-3.png"
              img2="/public/images/product-img-4.png"
              title="Flower Jars"
              review="1265 Reviews"
              price="$304.99"
              addToCart={addToCart}
            />
            <Product
              img1="/public/images/product-img-3.png"
              img2="/public/images/product-img-4.png"
              title="Flower Jars"
              review="1265 Reviews"
              price="$304.99"
              addToCart={addToCart}
            />
            <Product
              img1="/public/images/product-img-3.png"
              img2="/public/images/product-img-4.png"
              title="Flower Jars"
              review="1265 Reviews"
              price="$304.99"
              addToCart={addToCart}
            />
            <Product
              img1="/public/images/product-img-3.png"
              img2="/public/images/product-img-4.png"
              title="Flower Jars"
              review="1265 Reviews"
              price="$304.99"
              addToCart={addToCart}
            />
          </div>
          <div className="text-center my-4">
            <button className="py-2 px-4 bg-[#ee4382] hover:bg-[#ee4493] text-sm font-bold text-white">
              SHOW ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>

      <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />

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
              <h1 className="text-white scroll-m-20 text-xl lg:text-5xl font-light tracking-tight drop-shadow-md">
                Open For A Surprise
              </h1>
              <p className="leading-5 px-3 text-sm mt-4 text-white drop-shadow-md">
                Surprise them in the most fun-filled way with our range of{" "}
                <br />
                explosion boxes
              </p>
              <button className="px-4 py-2 font-bold bg-white text-slate-700 rounded mt-4 hover:shadow-md">
                EXPLOSION BOXES
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="relative">
            <div className="w-full pt-9">
              <img
                src="/public/images/BIRTHDAY_471dc0ae-9a5b-433e-804d1.png"
                alt="home-img"
                className="w-full object-cover md:h-250 h-[380px]"
              />
            </div>
            <div className="py-5 md:bg-slate-700 w-full md:w-2/6 absolute h-[220px] md:right-20 md:top-24 md:bottom-44 ml-72 text-center  xs:rounded xs:w-2/3 xs:right-7 xs:bg-slate-600 xs:bottom-0 xs:top-32 max-auto">
              <h1 className="text-white scroll-m-20 text-xl lg:text-5xl font-light tracking-tight">
                Build Your Own
              </h1>
              <p className="leading-5 px-3 text-sm mt-4 text-white">
                Looking for a gift that's as unique as they are? Mix and match{" "}
                <br />
                from our range of gifts to create your own bespoke gift bundle.
              </p>
              <button className="px-4 py-2 font-bold bg-white text-slate-700 rounded mt-4 hover:shadow-md">
                BUILD YOUR OWN
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-10 mx-auto">
          <h1 className="p-4 text-[#383c4f] font-semibold text-center scroll-m-20 text-xl font-ligh">
            We’re re-inventing the flower industry by doing things the LVLY way
          </h1>
          <div className="border-t border-black my-4"></div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="w-64 text-center">
              <img
                className="w-24 mx-auto"
                src="/public/images/LVLYPrinciplesIcons_FA_zero_wast.png"
                alt="Zero waste promise"
              />
              <div className="text-center mt-4">
                <p className="font-bold text-sm text-[#383c4f]">
                  Zero waste promise
                </p>
                <p className="text-sm mt-2">
                  We believe in paying it forward, that's why we donate all
                  unsold flower posies to local aged care homes and hospices.
                  That means no wasted flowers.
                </p>
              </div>
            </div>

            <div className="w-64 text-center">
              <img
                className="w-24 mx-auto"
                src="/public/images/LVLYPrinciplesIcons_FA_locally_s.png"
                alt="Locally sourced = longer lasting"
              />
              <div className="text-center mt-4">
                <p className="font-bold text-sm text-[#383c4f]">
                  Locally sourced = longer lasting
                </p>
                <p className="text-sm mt-2">
                  Did you know 40% of flowers sold in Australia are imported? We
                  strive to source locally which means lower flower miles, less
                  pesticides and longer lasting flowers.
                </p>
              </div>
            </div>

            <div className="w-64 text-center">
              <img
                className="w-24 mx-auto"
                src="/public/images/LVLYPrinciplesIcons_FA_happiness.png"
                alt="100% happiness guarantee"
              />
              <div className="text-center mt-4">
                <p className="font-bold text-sm text-[#383c4f]">
                  100% happiness guarantee
                </p>
                <p className="text-sm mt-2">
                  We exist to make people's day. That's why if you're not 100%
                  satisfied we promise to make it right. We're a persistent
                  bunch and won't stop until you're happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="relative">
            <div className="w-full ">
              <img
                className="w-full object-cover md:h-250 h-[380px]"
                src="/public/images/lastfooterbg.jpg"
                alt="home-img"
              />
            </div>
            <div className="py-7 md:bg-red-300 w-full md:w-2/6 absolute h-[240px] md:right-20 md:top-24 md:bottom-44 xs:w-2/3 text-center xs:rounded xs:w- xs:h-68 xs:right-7 xs:bg-red-300 xs:botto-34 xs:top-32 max-auto">
              <h1 className="text-white scroll-m-20 text-xl lg:text-5xl font-bold tracking-tight drop-shadow-md">
                Paddock to Posy
              </h1>
              <p className="leading-5 px-3 text-sm mt-4 text-white drop-shadow-md">
                We strive to buy Australian grown flowers for our arrangements.
                <br />
                That means less flower miles, longer-lasting flowers and <br />
                it's better for the environment
              </p>
              <button className="px-4 py-2 text-white font-bold border-2 border-white mt-4 hover:bg-white hover:text-black">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
