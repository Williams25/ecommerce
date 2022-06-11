import { Header } from "components/Header";
import { ProductGrid } from "components/ProductGrid";
import type { GetServerSideProps } from "next";
import { productService } from "services/products";
import { Products } from "types/Products";

type HomePageProps = {
  products: Products[];
};

const Home = ({ products }: HomePageProps) => {
  console.log(products);
  return (
    <div>
      <Header />
      <ProductGrid />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: products } = await productService.getAll();

  return {
    props: {
      products
    }
  };
};

export default Home;
