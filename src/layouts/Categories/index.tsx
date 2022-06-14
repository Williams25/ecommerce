import { Header } from "components/Header";
import { ProductGrid } from "components/ProductGrid";
import { Products } from "types/Products";
// import styled from "./styles.module.scss";

export type CategoriesProps = {
  products: Products[];
};

export const Categories = ({ products }: CategoriesProps) => {
  return (
    <>
      <Header />
      <ProductGrid products={products} />
    </>
  );
};
