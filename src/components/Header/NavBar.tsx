import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className= {styles.NavbarContainer}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="logo" />
      </div>
      <Link className= {styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/about">
        About
      </Link>
      <Link className={styles.link} to="/menu">
        Menu
      </Link>
      <Link className={styles.link} to="/rewards">
        Rewards
      </Link>
      <Link className={styles.link}to="/deals">
        Deals
      </Link>
      <Link className={styles.link}to="/brands">
        Brands
      </Link>
      <div className={styles.icon}>
        <img src="./images/search.png" alt="search" />
      </div>
      <div className={styles.login}>
        <a href="/login">Login</a>
      </div>
      <div>
        <a href="/signup">
          <button className={styles.signup}>Sign up</button>
        </a>
      </div>
      <div className={styles.line}></div>
      <button className={styles.cart}>
        <img src="./images/cart.png" alt="cart" />
      </button>
    </nav>
  );
}

export default NavBar;
