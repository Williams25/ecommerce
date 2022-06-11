import { Header } from "components/Header";
import { ProductGrid } from "components/ProductGrid";
import { ProductContext } from "context/ProductProvider";
import { useContext } from "react";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <Header />
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;
