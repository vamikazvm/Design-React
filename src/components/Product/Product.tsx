import { FC } from "react";
import styles from "./Product.module.css";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

interface Iproducts {
  category: string;
  // productName: string;
  // minPrice: number;
  // maxPrice: number;
  // image: string;
}

export const Product: FC<Iproducts> = ({ category }) => {
  const data = [
    {
      productName: "Strawberry Banana",
      minPrice: "36",
      maxPrice: "55",
      image: image1,
    },

    {
      productName: "Milk Chocolate Bar 100mg",
      minPrice: "15",
      maxPrice: " ",
      image: image2,
    },

    {
      productName: "Relief pen - 100 doses",
      minPrice: "54",
      maxPrice: " ",
      image: image3,
    },

    {
      productName: "Hybrid Top Shelf 3.5 grams",
      minPrice: "49",
      maxPrice: " ",
      image: image4,
    },
  ];
  return (
    <div>
      <>
        <div className={styles.CategoryWrapper}>
          <div className={styles.PrerollHeader}>
            <h3>{category}</h3>
            <a href="#" className={styles.ViewCategory}>
              View All 9 items{" "}
            </a>
            <a href="#" className={styles.BtnPreroll}>
              SHOP {category}
            </a>
          </div>
          <div className={styles.ProductWrapper}>
            <div className={styles.CategoryCard}>
              {data.map((p) => (
                <>
                  <img src={p.image} alt="product" />
                  <div className={styles.ProductName}>{p.productName}</div>
                  <div className={styles.ProductPrice}>
                    {p.maxPrice
                      ? `${p.minPrice} - ${p.maxPrice}`
                      : `${p.minPrice}`}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
