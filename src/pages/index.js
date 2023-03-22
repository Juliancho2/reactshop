// import Banner from "@components/Banner";
import Banner from "@components/Banner";
import Layout from "@containers/Layout";
import ProductList from "@containers/ProductList";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <ProductList />
    </Layout>
  );
}
