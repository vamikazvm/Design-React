import { FC } from "react";
import styles from "./Footer.module.css";

import iconFacebook from "./images/icon1.png";
import iconInstagram from "./images/icon2.png";
import iconTwitter from "./images/icon3.png";

export const Footer: FC = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div className={styles.Box1}>
          <ul>
            <li className={styles.Heading}>
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
        <div className={styles.Box2}>
          <ul>
            <li className={styles.Heading}>
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
        <div className={styles.Box3}>
          <h1>Newsletter Subscription</h1>
          <p>Be the first to know about exclusive deals.</p>
          <form className={styles.Form}>
            <input
              className={styles.Input}
              type="text"
              name="email"
              rel="email"
            />
            <button className={styles.Btn} type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className={styles.Box4}>
        <div className={styles.Foot}>
          © King’s Crew 2020 | License #: C10-00000026-LIC
        </div>
        <div className={styles.Icons}>
          Follow Us: <img src={iconFacebook} alt="Facebook" />
          <img src={iconInstagram} alt="Instagram" />
          <img src={iconTwitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};
