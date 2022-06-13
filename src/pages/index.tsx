import { ProductContext } from "context/ProductProvider";
import { useContext } from "react";
import { Home } from "layouts/Home";

const HomePage = () => {
  const { products } = useContext(ProductContext);

  return <Home products={products} />;
};

export default HomePage;
