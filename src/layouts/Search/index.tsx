import { Header } from "components/Header";
import { ProductGrid } from "components/ProductGrid";
import { Products } from "types/Products";
import styled from "./styles.module.scss";

export type SearchProps = {
  products: Products[];
};

export const Search = ({ products }: SearchProps) => {
  return (
    <>
      <Header />
      <h1 className={styled.title}>Pesquisa</h1>
      <ProductGrid products={products} />
    </>
  );
};
