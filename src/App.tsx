// import "reset-css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Menu } from "./components/pages/Menu";
import { Deals } from "./components/pages/Deals";
import { Brands } from "./components/pages/Brands";
import { Rewards } from "./components/pages/Rewards";
import { Footer } from "./Footer";
import NavBar from "./NavBar";
import Slider from "./Slider";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Slider/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
