// import "reset-css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Menu } from "./components/pages/Menu";
import { Deal } from "./components/pages/Deals";
import { Brands } from "./components/pages/Brands";
import { Reward } from "./components/pages/Rewards";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Swiper from "./Swiper";
import Deals from "./Deals";
import Section from "./Section";
import Flower from "./Flower";
import Edibles from "./Edibles";
import Blog from "./Blog";
import Rewards from "./Rewards";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Slider />
        <Swiper />
        <Deals />
        <Section />
        <Rewards />
        <Edibles />
        <Flower />
        <Blog />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Reward />} />
          <Route path="/deals" element={<Deal />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
