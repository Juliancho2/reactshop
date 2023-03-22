import { useState } from "react";

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  category: "all",
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload)
        ? state.cart
        : [...state.cart, payload],
    });
    localStorage.setItem("cart", JSON.stringify(state.cart.concat(payload)));
  };

  const removeFromCart = (payload) => {
    const newArr = state.cart.filter((items) => items.id !== payload.id);
    setState({
      ...state,
      cart: newArr,
    });
    localStorage.setItem("cart", JSON.stringify(newArr));
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };
  const toggleCategory = (payload) => {
    setState({
      ...state,
      category: payload,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    toggleCategory,
    setState,
  };
};

export default useInitialState;
