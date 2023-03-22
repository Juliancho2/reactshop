import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import styles from "@styles/OrderItem.module.scss";
import close from "@icons/icon_close.png";
import Image from "next/image";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removeFromCart(product);
  };

  console.log(product);
  return (
    <>
      {product && (
        <div className={styles.OrderItem}>
          <figure>
            <Image
              width={100}
              height={100}
              src={product.images[0]}
              alt={product.title}
            />
          </figure>
          <p>{product.title}</p>
          <p>${product.price}</p>
          <Image
            className={styles["pointer more-clickable-area"]}
            src={close}
            alt="close"
            onClick={() => handleRemove(product)}
          />
        </div>
      )}
    </>
  );
};

export default OrderItem;
