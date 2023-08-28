import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Slider.module.css";
import image from "./img.png";

const Slider = () => {
  return (
    <div>
      <Carousel className={styles.SlideContainer}>
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
