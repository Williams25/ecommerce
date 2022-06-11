import { ProductCard } from "components/ProductCard";
import type { GetServerSideProps } from "next";
import { productService } from "services/products";
import { Products } from "types/Products";

type HomePageProps = {
  products: Products[];
};

const Home = ({ products }: HomePageProps) => {
  return (
    <div>
      <h1>teste</h1>
      {JSON.stringify(products)}
      <ProductCard />
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
