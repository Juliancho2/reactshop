import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import styles from "@styles/Checkout.module.scss";
import AppContext from "@context/AppContext";
import Layout from "@containers/Layout";

const Checkout = () => {
  const { state } = useContext(AppContext);

  const date = new Date();
  return (
    <Layout>
      <div className={styles.Checkout}>
        <div className={styles["Checkout-container"]}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles["Checkout-content"]}>
            <div className={styles.order}>
              <p>
                <span>{date.toDateString()}</span> <br />
                <span>{state.cart.length} articles</span>
              </p>
              <p>
                ${state.cart.reduce((total, item) => total + item.price, 0)}
              </p>
            </div>
          </div>
          {state.cart.map((item) => (
            <OrderItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
