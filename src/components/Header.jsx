"use-client";

import React, { useContext } from "react";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import styles from "@styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.navbar_left}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className={styles.nav_logo} />
          </Link>
        </div>
        <div className={styles.navbar_right}>
          <ul>
            <li
              className={`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`}
            >
              <button onClick={() => toggleMenu()}>julian@example.com</button>
            </li>
            <li className={styles["navbar-shopping-cart"]}>
              <button onClick={() => toggleOrder()}>
                <Image
                  className={styles["more-clickable-area pointer"]}
                  src={shoppingCart}
                  alt="shopping cart"
                />
              </button>
              {state.cart.length > 0 ? (
                <div className={styles.number_product_cart}>
                  {state.cart.length}
                </div>
              ) : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
