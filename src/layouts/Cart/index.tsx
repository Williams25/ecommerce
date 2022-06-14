import { Header } from "components/Header";
import { ProductInCart } from "components/ProductInCart";
import { CartContext } from "context/CartProvider";
import { useContext } from "react";
import styled from "./styles.module.scss";

export const Cart = () => {
  const { productsCart } = useContext(CartContext);
  return (
    <div className={styled.containerCart}>
      <Header />

      <section className={styled.contentCart}>
        <div className={styled.products}>
          {productsCart &&
            productsCart.map((product) => (
              <ProductInCart
                key={product.id}
                product={{ ...product }}
                type="cart"
              />
            ))}
        </div>
      </section>
    </div>
  );
};
