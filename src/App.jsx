import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import SeasonalFlowers from "./pages/SeasonalFlowers";
import NativeFlowers from "./pages/NativeFlowers";
import SingleVariety from "./pages/SingleVariety";
import Gifts from "./pages/Gifts";
import Plants from "./pages/Plants";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/seasonal-flowers" element={<SeasonalFlowers />} />
            <Route path="/native-flowers" element={<NativeFlowers />} />
            <Route path="/single-variety" element={<SingleVariety />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;