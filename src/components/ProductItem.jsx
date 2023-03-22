import React, { useContext } from "react";
import styles from "@styles/ProductItem.module.scss";
import AppContext from "../context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import addedToCartImage from "@icons/bt_added_to_cart.svg";
import Image from "next/image";
import swal from "sweetalert";

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
    swal("Product added successfully");
  };

  return (
    <div className={styles.ProductItem}>
      <Image
        width={300}
        height={300}
        src={`${product.images[0]}`}
        alt={product.title}
      />
      <div className={styles["product-info"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles["more-clickable-area"]}>
          <button onClick={() => handleClick(product)}>
            {state.cart.includes(product) ? (
              <Image
                className={`${(styles.disabled, styles["add-to-cart-btn"])}`}
                src={addedToCartImage}
                alt="added to cart"
              />
            ) : (
              <Image
                className="add-to-cart-btn pointer"
                src={addToCartImage}
                alt="add to cart"
              />
            )}
          </button>
        </figure>
      </div>
    </div>
  );
};
//
export default ProductItem;
