import Image from "next/image";
import { Products } from "types/Products";
import { Button } from "components/Button";
import { MdShoppingCart } from "react-icons/md";
import { encoded } from "utils/base64";
import { useContext } from "react";
import { CartContext } from "context/CartProvider";
import { useRouter } from "next/router";
import styled from "./styles.module.scss";
import { formatCurrency } from "utils/currency";

export type ProductDetailsProps = {
  product: Products;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { handleAddProductInCart } = useContext(CartContext);

  const router = useRouter();

  return (
    <div className={styled.contentProductDetails}>
      <div className={styled.imageBox}>
        <Image
          src={product.image}
          alt={product.name}
          width={450}
          height={450}
        />
      </div>

      <div className={styled.contentInfo}>
        <h1>{product.name}</h1>
        <h2>Categoria - {product.categorie}</h2>
        {!!product.oldPrice && (
          <span className={styled.oldPriceCard}>
            {formatCurrency(product.oldPrice)}
          </span>
        )}
        <h2 className={styled.price}>{formatCurrency(product.price)}</h2>
        <Button
          title="Comprar"
          variant="button-dark"
          size="medium"
          icon={<MdShoppingCart />}
          positionIcon="left"
          fullWidth
          type="button"
          onClick={() => {
            handleAddProductInCart({
              ...product
            });
            router.push(`/pre-carrinho/${encoded(product.id)}`);
          }}
        />
        <p>{product.description}</p>
      </div>
    </div>
  );
};
