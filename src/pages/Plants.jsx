// import React from "react";
// import { useCart } from "../components/CartContext.jsx"; // Import useCart from CartContext
// import ReactStars from "react-rating-stars-component"; // Import ReactStars

// function Plants() {
//   const { addToCart } = useCart();

//   const flowers = [
//     {
//       id: 1,
//       img1: "/images/Classic-BAU-Posy-Thumbnail_400x.png",
//       img2: "/images/lvly-personalised-plant-teal_400.png",
//       title: "Personalised Plant + Pot Lucky Dip",
//       review: "15 Reviews",
//       price: "$234.99",
//     },
//     {
//       id: 2,
//       img1: "/images/product-img-3.png",
//       img2: "/images/product-img-4.png",
//       title: "Flower Jars",
//       review: "1265 Reviews",
//       price: "$304.99",
//     },
//     // Add more flowers as needed
//   ];

//   return (
//     <div>
//       <h1> Plants</h1>
//       <div className="flex flex-wrap gap-4 justify-center">
//         {flowers.map((flower) => (
//           <div key={flower.id} className="product w-[280px]">
//             <div className="product-img items-center">
//               <img
//                 className="w-[280px] h-[350px]"
//                 src={flower.img1}
//                 alt={flower.title}
//               />
//               <img
//                 className="w-[280px] h-[350px]"
//                 src={flower.img2}
//                 alt={flower.title}
//               />
//             </div>
//             <div className="contact bg-[#fbfbfb] p-2">
//               <h4 className="text-sm font-normal leading-6 scroll-m-5">
//                 {flower.title}
//               </h4>
//               <div className="rating flex gap-2 items-center">
//                 <ReactStars
//                   count={5}
//                   size={24}
//                   value={flower.rating}
//                   edit={false}
//                   activeColor="#ffd700"
//                 />
//                 <p className="text-sm font-normal leading-6 scroll-m-5">
//                   {flower.review}
//                 </p>
//               </div>
//               <p>{flower.price}</p>
//               <button
//                 onClick={() => addToCart(flower)}
//                 className="flex bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition duration-300"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Plants;
// import React from "react";
// import { useCart } from "../components/CartContext.jsx"; // Import useCart from CartContext
// import ReactStars from "react-rating-stars-component"; // Import ReactStars

// function Plants() {
//   const { addToCart } = useCart();

//   const plants = [
//     {
//       id: 1,
//       img1: "/images/seasional/d1.jpg",
//       img2: "/images/seasional/d2.jpg",
//       title: "Personalised Plant + Pot Lucky Dip",
//       review: "15 Reviews",
//       price: "$234.99",
//     },
//     {
//       id: 2,
//       img1: "/images/seasional/j1.jpg",
//       img2: "/images/seasional/j2.jpg",
//       title: "Flower Jars",
//       review: "1265 Reviews",
//       price: "$304.99",
//     },
//     {
//       id: 3,
//       img1: "/images/seasional/l1.jpg",
//       img2: "/images/seasional/l2.jpg",
//       title: "Personalised Plant + Pot Lucky Dip",
//       review: "15 Reviews",
//       price: "$234.99",
//     },
//     {
//       id: 4,
//       img1: "/images/seasional/m1.jpg",
//       img2: "/images/seasional/m2.jpg",
//       title: "Flower Jars",
//       review: "1265 Reviews",
//       price: "$304.99",
//     },
//     {
//       id: 5,
//       img1: "/images/seasional/s1.jpg",
//       img2: "/images/seasional/s2.jpg",
//       title: "Personalised Plant + Pot Lucky Dip",
//       review: "15 Reviews",
//       price: "$234.99",
//     },
//     {
//       id: 6,
//       img1: "/images/seasional/w1.jpg",
//       img2: "/images/seasional/w2.jpg",
//       title: "Flower Jars",
//       review: "1265 Reviews",
//       price: "$304.99",
//     },
//   ];

//   return (
//     <div>
//       <h1>Plants</h1>
//       <div className="flex flex-wrap gap-4 justify-center">
//         {plants.map((plant) => (
//           <div key={plant.id} className="product w-[280px]">
//             <div className="product-img items-center">
//               <img
//                 className="w-[280px] h-[350px]"
//                 src={plant.img1}
//                 alt={plant.title}
//               />
//               <img
//                 className="w-[280px] h-[350px]"
//                 src={plant.img2}
//                 alt={plant.title}
//               />
//             </div>
//             <div className="contact bg-[#fbfbfb] p-2">
//               <h4 className="text-sm font-normal leading-6 scroll-m-5">
//                 {plant.title}
//               </h4>
//               <div className="rating flex gap-2 items-center">
//                 <ReactStars
//                   count={5}
//                   size={24}
//                   value={4.5} // Example rating value
//                   edit={false}
//                   activeColor="#ffd700"
//                 />
//                 <p className="text-sm font-normal leading-6 scroll-m-5">
//                   {plant.review}
//                 </p>
//               </div>
//               <p>{plant.price}</p>
//               <button
//                 onClick={() => addToCart(plant)}
//                 className="flex bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 transition duration-300"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Plants;




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

function Plants() {
  const { addToCart } = useCart();

  const handleAddToCart = (flower) => {
    addToCart({ ...flower, quantity: 1 });
    // You can optionally show a confirmation message here
    // or perform other actions after adding to cart.
  };

  return (
    <div>
      <h1>Plants</h1>
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
    </div>
  );
}

export default Plants;
