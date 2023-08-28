import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import styles from "./Slider.module.css";
import "./carousel.css";
import image from "./img.png";

const Slider = () => {
  return (
    <div>
      <Carousel className="SlideContainer">
        <div>
          <img src={image} alt="img" />
        </div>
        <div>
          <img src={image} alt="img" />
        </div>
        <div>
          <img src={image} alt="img" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
