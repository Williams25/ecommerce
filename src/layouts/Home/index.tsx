// import styled from "./styles.module.scss";
import { ProductGrid } from "components/ProductGrid";
import { Header } from "components/Header";
import { Products } from "types/Products";

export type HomeProps = {
  products: Products[];
};

export const Home = ({ products }: HomeProps) => {
  return (
    <>
      <Header />
      <ProductGrid products={products} />
    </>
  );
};
