// Product.js
import React from "react";
import ReactStars from "react-rating-stars-component";

function Product(props) {
   
  return (
    <>
      <div className="product w-[280px]">
        <div className="product-img items-center">
          <img className="w-[280px] h-[350px]" src={props.img1} alt="product" />
          <img className="w-[280px] h-[350px]" src={props.img2} alt="product" />
        </div>
        <div className="contact bg-[#fbfbfb] p-2">
          <h4 className="text-sm font-normal leading-6 scroll-m-5">
            {props.title}
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
              {props.review}
            </p>
          </div>
          <p>{props.price}</p>
          <button
            onClick={() => props.addToCart(props)}
            className="flex bg-blue-500  text-white px-2 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
