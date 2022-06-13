import { Button } from "components/Button";
import { Header } from "components/Header";
import { ProductInCart } from "components/ProductInCart";
import { Products } from "types/Products";
import { useRouter } from "next/router";
import styled from "./styles.module.scss";

export type PreviousCartProps = {
  product: Products;
};

export const PreviousCart = ({ product }: PreviousCartProps) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <section className={styled.previousCart}>
        {product && <ProductInCart {...product} />}

        <Button
          title="Continuar comprando"
          variant="button-light"
          size="large"
          onClick={() => router.back()}
        />

        <Button title="Ir para o carrinho" variant="button-dark" size="large" />
      </section>
    </>
  );
};
