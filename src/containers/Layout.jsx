import React, { useContext, useEffect } from "react";
import Header from "@components/Header";
import AppContext from "@context/AppContext";

const Layout = ({ children }) => {
  const { state, setState } = useContext(AppContext);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cartToLocalStorage = localStorage.getItem("cart");
      setState({
        ...state,
        cart: JSON.parse(cartToLocalStorage),
      });
    }
  }, []);
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
