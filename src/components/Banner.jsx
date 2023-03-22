import React, { useContext } from "react";
import stylesBanner from "@styles/Banner.module.scss";
import shoes from "@icons/shoes.png";
import Image from "next/image";
import AppContext from "@context/AppContext";

const Banner = () => {
  const { toggleCategory, state } = useContext(AppContext);
  const handleCategory = (value) => {
    toggleCategory(value);
  };
  return (
    <div className={stylesBanner.Banner}>
      <h1>Yard Sale Store</h1>
      <Image src={shoes} alt="chair" />
      <ul>
        <li>
          <button
            className={state.category === "all" ? stylesBanner.disabled : null}
            onClick={() => handleCategory("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={
              state.category === "clothes" ? stylesBanner.disabled : null
            }
            onClick={() => handleCategory("clothes")}
          >
            Clotches
          </button>
        </li>
        <li>
          <button
            className={
              state.category === "electronics" ? stylesBanner.disabled : null
            }
            onClick={() => handleCategory("electronics")}
          >
            Electronics
          </button>
        </li>
        <li>
          <button
            className={
              state.category === "zapatinho" ? stylesBanner.disabled : null
            }
            onClick={() => handleCategory("zapatinho")}
          >
            Shoes
          </button>
        </li>
        <li>
          <button
            className={
              state.category === "changetitle" ? stylesBanner.disabled : null
            }
            onClick={() => handleCategory("changetitle")}
          >
            Furnitures
          </button>
        </li>
        <li>
          <button
            className={
              state.category === "others" ? stylesBanner.disabled : null
            }
            onClick={() => handleCategory("others")}
          >
            Others
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
