// services/giftService.js


export const fetchGifts = async () => {
  const apiUrl = "https://www.lvly.com.au/collections/gifts";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return { products: localGiftsData }; // Assuming the API returns an array of products
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
