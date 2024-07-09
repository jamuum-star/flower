import { useState, useEffect } from "react";

// Custom hook for fetching testimonials data from an API
const useTestimonialsApi = () => {
  // State to store testimonials data
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        // Check if fetch was successful
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        // Parse response data to JSON format
        const data = await response.json();
        // Set fetched data to testimonials state
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    // Invoke fetchTestimonials function when component mounts
    fetchTestimonials();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Return the fetched testimonials data
  return testimonials;
};

export default useTestimonialsApi;
