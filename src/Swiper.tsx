import "./preroll.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Swiper = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
  };
  return (
    <>
      <div className="category-wrapper">
        <div className="pre-roll-header">
          <h3>Preroll</h3>
          <a href="#" className="view-category">
            View All 9 items{" "}
          </a>
          <a href="#" className="btn-preroll">
            SHOP PRE-ROLLS
          </a>
        </div>
        <div className="product-wrapper">
          <div className="category-card">
            <img src="./images/image1.png" alt="product" />
            <div className="product-name">Strawberry Banana</div>
            <div className="product-price">$36-$55</div>
          </div>

          <div className="category-card">
            <img src="./images/image2.png" alt="product" />
            <div className="product-name">Milk Chocolate Bar 100mg</div>
            <div className="product-price">$15</div>
          </div>

          <div className="category-card">
            <img src="./images/image3.png" alt="product" />
            <div className="product-name">Relief pen - 100 doses</div>
            <div className="product-price">$54</div>
          </div>

          <div className="category-card">
            <img src="./images/image4.png" alt="product" />
            <div className="product-name">Hybrid Top Shelf 3.5 grams</div>
            <div className="product-price">$49</div>
          </div>
        </div>
      </div>

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
