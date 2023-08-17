import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/menu">
        Menu
      </Link>
      <Link className="link" to="/rewards">
        Rewards
      </Link>
      <Link className="link" to="/deals">
        Deals
      </Link>
      <Link className="link" to="/brands">
        Brands
      </Link>
      <div className="icon">
        <img src="./images/search.png" alt="search" />
      </div>
      <div className="login">
        <a href="/login">Login</a>
      </div>
      <div>
        <a href="/signup">
          <button className="signup">Sign up</button>
        </a>
      </div>
      <div className="line"></div>
      <button className="cart">
        <img src="./images/cart.png" alt="cart" />
      </button>
    </nav>
  );
}

export default NavBar;
