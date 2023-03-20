import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios(API);
      setProducts(response.data.filter((item) => item.id < 200));
    })();
  }, [API]);

  return products;
};

export default useGetProducts;
