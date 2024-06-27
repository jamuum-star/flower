import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SeasonalFlowers from "./pages/SeasonalFlowers";
import NativeFlowers from "./pages/NativeFlowers";
import SingleVariety from "./pages/SingleVariety";
import Gifts from "./pages/Gifts";
import Plants from "./pages/Plants";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cartItems={cartItems} />}>
            <Route index element={<Home />} />
            <Route path="/seasonal-flowers" element={<SeasonalFlowers />} />
            <Route path="/native-flowers" element={<NativeFlowers />} />
            <Route path="/single-variety" element={<SingleVariety />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

