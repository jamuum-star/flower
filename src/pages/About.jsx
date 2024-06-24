import React from "react";
import flowerBackground from "./bg.png"; // Import the background image

function About() {
  return (
    <section
      className="about-section py-12 relative"
      style={{
        background: `url(${flowerBackground}) no-repeat left`,
        backgroundSize: "50%",
        backgroundColor: "#12172b",
        overflow: "hidden",
        padding: "90px 30px",
        paddingTop: "150px",
      }}
    >
      <div className="container flex mx-auto px-5 ">
        <div className="inner-container w-full lg:w-1/2 lg:ml-6  ">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">
            About EVE Flowers
          </h2>
          <p className="text-lg text-yellow-600 mb-8">
            At EVE Flowers, we believe in the power of flowers to bring joy,
            beauty, and positivity into people's lives. Our journey began with a
            simple passion for nature's most exquisite creations, and it has
            evolved into a mission to share that passion with the world.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our team of dedicated florists handcraft each arrangement with care
            and creativity, ensuring that every bouquet is a masterpiece of
            color, texture, and fragrance. Whether you're celebrating a special
            occasion, expressing love and gratitude, or simply brightening
            someone's day, EVE Flowers is here to help you make moments
            unforgettable.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Beyond providing stunning floral arrangements, we are committed to
            sustainability and ethical sourcing practices. We partner with local
            growers whenever possible, prioritize eco-friendly packaging, and
            strive to minimize our environmental footprint.
          </p>
          <p className="text-lg text-gray-600">
            Thank you for choosing EVE Flowers. Let's spread happiness, one
            bloom at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
