
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../Product/Product";


const Swiper = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
  };
  return (
    <>
      <Product/>
      <Carousel responsive={responsive} className="swiper-container">
        {/* <div> */}
        <div className="swiper-products">
          <img src=".\images\product1.png" alt="product" />
          <div className="prod-name">Flower</div>
        </div>

        <div className="swiper-products">
          <img src=".\images\product2.png" alt="product" />
          <div className="prod-name">PRE-ROLLS</div>
        </div>

        <div className="swiper-products">
          <img src=".\images\product3.png" alt="product" />
          <div className="prod-name">Vaporizers</div>
        </div>

        <div className="swiper-products">
          <img src=".\images\product4.png" alt="product" />
          <div className="prod-name">CONCENTRATES</div>
        </div>

        <div className="swiper-products">
          <img src=".\images\product5.png" alt="product" />
          <div className="prod-name">EDIBLES </div>
        </div>

        <div className="swiper-products">
          <img src=".\images\product6.png" alt="product" />
          <div className="prod-name">Capsules / Tablets</div>
        </div>

        <div className="swiper-products">
          <img src=".\images\product7.png" alt="product" />
          <div className="prod-name">Tinctures</div>
        </div>
        {/* </div> */}
      </Carousel>
    </>
  );
};

export default Swiper;
