import React, { useContext } from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import styles from "@styles/ProductList.module.scss";
import AppContext from "@context/AppContext";

const API = "https://api.escuelajs.co/api/v1/products";

function filterReplaceImgUrl(products) {
  return products.map((product) => {
    const firstImageUrl = product.images[0];
    if (
      !firstImageUrl.startsWith("http://") &&
      !firstImageUrl.startsWith("https://")
    ) {
      product.images[0] =
        "https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg";
    }
    return product;
  });
}

const ProductList = () => {
  const { state } = useContext(AppContext);

  const products = useGetProducts(API).filter((item) => {
    const regxFilteredByCategories =
      /^(?!changetitle$|shoes$|zapatinho$|clothes$|electronics$)/;

    if (state.category.toLowerCase() === "all") return item;
    if (state.category.toLowerCase() === "others") {
      if (
        regxFilteredByCategories.test(
          item.category.name.toLowerCase().replace(" ", "")
        )
      )
        return item;
    }

    return (
      item.category.name.toLowerCase().replace(" ", "") ===
      state.category.toLowerCase()
    );
  });

  const filteredProducts = filterReplaceImgUrl(products);

  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        {products.length > 0 && filteredProducts.length > 0 ? (
          products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        ) : (
          <h3>No hay productos para esta categoria :(</h3>
        )}
      </div>
    </section>
  );
};

export default ProductList;
