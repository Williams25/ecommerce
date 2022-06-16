import { CheckOrder } from "components/CheckOrder";
import { Coupons } from "components/Coupons";
import { Header } from "components/Header";
import { ProductInCart } from "components/ProductInCart";
import { CartContext } from "context/CartProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { calcPorcent } from "utils/calcPorcent";
import styled from "./styles.module.scss";

export const Cart = () => {
  const {
    productsCart,
    handleTopayOrder,
    handleTotalProducts,
    activeCoupons,
    verifyCoupon,
    handleFinishPurchase
  } = useContext(CartContext);
  return (
    <div className={styled.containerCart}>
      <Header />

      <section className={styled.contentCart}>
        {productsCart && productsCart.length > 0 && (
          <div className={styled.products}>
            {productsCart.map((product) => (
              <ProductInCart
                key={product.id}
                product={{ ...product }}
                type="cart"
              />
            ))}
          </div>
        )}

        {productsCart && productsCart.length > 0 && (
          <div className={styled.contentCheckout}>
            <Coupons />

            <CheckOrder
              order={{
                toPay: handleTopayOrder,
                totalProducts: handleTotalProducts,
                valueProducts: handleTopayOrder,
                discount: calcPorcent(
                  activeCoupons?.discount || 0,
                  handleTopayOrder
                )
              }}
              activeCoupons={activeCoupons}
              verifyCoupon={verifyCoupon}
              handleFinishPurchase={handleFinishPurchase}
            />
          </div>
        )}
      </section>

      {!productsCart ||
        (productsCart.length === 0 && (
          <div className={styled.badCart}>
            <Image
              src="/cart-bad.svg"
              alt="imagem representa um carrinho vazio"
              width={100}
              height={100}
            />

            <h1>Seu carrinho está vazio!</h1>
            <Link href="/">
              <a>volte para home e adicione produtos em seu carrinho!</a>
            </Link>
          </div>
        ))}
    </div>
  );
};
