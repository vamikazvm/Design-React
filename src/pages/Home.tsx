import React from "react";
import NavBar from "../components/Header/NavBar";
import Slider from "../components/Sldier/Slider";
import Swiper from "../components/Swiper/Swiper";
import Deals from "../components/Deals/Deals";
import Section from "../components/Brands/Section";
import Rewards from "../components/Rewards/Rewards";
import Edibles from "../components/Edibles/Edibles";
import Flower from "../components/Flowers/Flower";
import Blog from "../components/Blog/Blog";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Swiper />
      <Deals />
      <Section />
      <Rewards />
      <Edibles />
      <Flower />
      <Blog />
    </div>
  );
};
