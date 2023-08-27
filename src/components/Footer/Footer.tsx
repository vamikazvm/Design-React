
export function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="box1">
          <ul>
            <li className="heading">
              <a href="/Address">Shop Name</a>
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/shop details">Shop Info</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="box2">
          <ul>
            <li className="heading">
              <a href="/help">Customer Service</a>
            </li>
            <li>
              <a href="/contact us">Contact Us</a>
            </li>
            <li>
              <a href="/privacy policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms of service">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="box3">
          <h1>Newsletter Subscription</h1>
          <p>Be the first to know about exclusive deals.</p>
          <form className="form">
            <input className="input" type="text" name="email" rel="email" />
            <button className="btn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="box4">
        <div className="foot">
          © King’s Crew 2020 | License #: C10-00000026-LIC{" "}
        </div>
        <div className="icons">
          Follow Us:
          <img src="./images/icon1.png" alt="Facebook" />
          <img src="./images/icon2.png" alt="Instagram" />
          <img src="./images/icon3.png" alt="Twitter" />
        </div>
      </div>
    </div>
  );
}
