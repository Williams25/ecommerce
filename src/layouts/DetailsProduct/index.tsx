import { Products } from "types/Products";
import { Header } from "components/Header";
import { ProductDetails } from "components/ProductDetails";
import styled from "./styles.module.scss";

export type DetailsProductProps = {
  product: Products;
};

export const DetailsProduct = ({ product }: DetailsProductProps) => {
  return (
    <>
      <Header />

      <section className={styled.container}>
        <div className={styled.contentDetailsProducts}>
          <ProductDetails product={product} />
        </div>
      </section>
    </>
  );
};
