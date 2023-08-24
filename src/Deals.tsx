import "./index.css";

const Deals = () => {
  return (
    <div className="maindeal">
      <div className="deals-container">
        <div className="banner">
          <h4>Catridges</h4>
        </div>
      </div>
      <div className="deals">
        <div className="b1">
          <h1>Deals</h1> <h6>View All 9 deals</h6>
          <button className="dealsbtn">SHOP BY DEALS</button>
        </div>
        <div className="b2">
          <div className="rec1"></div>
          <div className="deal1">
            <h2>Spend $100 of Dosist and Get 20% off of Kiva Confections</h2>
            <h4>Active everyday</h4>
          </div>
          <div className="group">
            <img src="./images/Group.png" alt="" />
            <div className="bogo">
              <img src="./images/bogo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="b2">
          <div className="rec1"></div>
          <div className="deal1">
            <h2>Spend $100 of Dosist and Get 20% off of Kiva Confections</h2>
            <h4>Active everyday</h4>
          </div>
          <div className="group">
            <img src="./images/Group.png" alt="" />
            <div className="bogo">
              <img src="./images/bogo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
