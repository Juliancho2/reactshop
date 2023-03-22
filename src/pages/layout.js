import Header from "@components/Header";

const Layout = ({ children }) => {
  console.log("H0la");
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
