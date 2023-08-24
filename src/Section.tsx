import "./index.css";

const Section = () => {
  return (
    <div className="section-wrapper">
      <div className="section1">
        <img src="./images/img1.png" alt="" />
        <h1>Kiva Confections</h1>
        <div className="view-all">View All 9 items</div>
        <button className="section-btn">SHOP KIVA CONFECTIONS</button>
      </div>

      <div className="section-2">
        <img src="./images/img2.png" alt="" />
        <h1>Bloom Farms</h1>
        <div className="view-all">View All 9 items</div>
        <button className="section-btn">SHOP BLOOM FARMS</button>
      </div>

      <div className="section-3">
        <img src="./images/img3.png" alt="" />
        <h1>Korova</h1>
        <div className="view-all">View All 9 items</div>
        <button className="section-btn">SHOP KOROVA</button>
      </div>
    </div>
  );
};

export default Section;
