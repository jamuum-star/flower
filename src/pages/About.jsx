import React from "react";
import flowerBackground from "./aboutbg.avif"; // Import the background image

function About() {
  return (
    <section
      className="about-section py-12 relative"
      style={{
        background: `url(${flowerBackground}) no-repeat left top`,
        backgroundSize: "cover",
        backgroundColor: "#12172b",
        overflow: "hidden",
        padding: "90px 30px",
        paddingTop: "60px",
        width:"100%",
        margin:"0",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row px-5">
        <div className="w-full lg:w-1/2 lg:ml-6 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4 text-center lg:text-left">
            About EVE Flowers
          </h2>
          <p className="text-lg text-red-600 mb-8 text-center lg:text-left">
            At EVE Flowers, we believe in the power of flowers to bring joy,
            beauty, and positivity into people's lives. Our journey began with a
            simple passion for nature's most exquisite creations, and it has
            evolved into a mission to share that passion with the world.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-center lg:text-left">
            Our team of dedicated florists handcraft each arrangement with care
            and creativity, ensuring that every bouquet is a masterpiece of
            color, texture, and fragrance. Whether you're celebrating a special
            occasion, expressing love and gratitude, or simply brightening
            someone's day, EVE Flowers is here to help you make moments
            unforgettable.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-center lg:text-left">
            Beyond providing stunning floral arrangements, we are committed to
            sustainability and ethical sourcing practices. We partner with local
            growers whenever possible, prioritize eco-friendly packaging, and
            strive to minimize our environmental footprint.
          </p>
          <p className="text-lg text-gray-600 text-center lg:text-left">
            Thank you for choosing EVE Flowers. Let's spread happiness, one
            bloom at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
