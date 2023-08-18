import "./preroll.css";

const Swiper = () => {
  return (
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
  );
};

export default Swiper;
