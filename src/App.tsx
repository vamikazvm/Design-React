 import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Menu } from "./pages/Menu";
// import { Reward } from "./pages/Rewards";
// import { Deal } from "./pages/Deals";
// import { Brands } from "./pages/Brands";
import { Footer } from "./components/Footer/Footer";
import Aroutes  from "./components/Routes/Navigation";


export function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          {Aroutes.map((r,index)=> (
            <Route path={r.path}element={r.element} />
          )) } 
          
          {/* <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/rewards" element={<Reward/>} />
          <Route path="/deals" element={<Deal />} />
          <Route path="/brands" element={<Brands />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
