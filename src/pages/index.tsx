import { Home } from "layouts/Home";
import type { GetStaticProps } from "next";
import { Products } from "types/Products";
import { productService } from "services/products";

export type HomePageProps = {
  products: Products[];
};

const HomePage = ({ products }: HomePageProps) => {
  return <Home products={products} />;
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const { data } = await productService.getAll();

  return {
    props: {
      products: data
    },
    revalidate: 200
  };
};

export default HomePage;
