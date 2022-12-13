import React, { useState } from "react";
import styles from "./Products.module.scss";
import Product from "../../assets/Products.png";
import { PRODUCTS } from "../../constants";
import Modal from "../Modal/Modal";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);

  const handleClick = (id) => {
    setCurrentProduct(id);
    setOpen(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>МОИ АВТОРСКИЕ</h2>
        <img src={Product} alt='Продукты' className={styles.productLogo} />
      </div>
      <div className={styles.productsBlock}>
        {PRODUCTS.map(({ logo, title, descript, id }) => (
          <div
            key={id}
            className={styles.currentProduct}
            onClick={() => handleClick(id)}
          >
            <img className={styles.currentProductLogo} src={logo} alt={title} />
            <p className={styles.productTitle}>{title.toUpperCase()}</p>
            <img className={styles.arrow} src={descript} alt='Подробнее' />
          </div>
        ))}
      </div>
      <Modal open={open} setOpen={setOpen} currentProduct={currentProduct} />
    </div>
  );
};

export default Products;
