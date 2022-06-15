import { Button } from "components/Button";
import Image from "next/image";
import styled from "./styles.module.scss";
import { MdShoppingCart } from "react-icons/md";
import { Products } from "types/Products";
import { formatCurrency } from "utils/currency";
import { CartContext } from "context/CartProvider";
import { useContext } from "react";
import { useRouter } from "next/router";
import { useProduct } from "hooks/useProduct";
import { encoded } from "utils/base64";

export type ProductCardProps = Pick<
  Products,
  | "image"
  | "name"
  | "price"
  | "oldPrice"
  | "id"
  | "categorie"
  | "description"
  | "quantity"
  | "stock"
>;

export const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  id,
  categorie,
  description,
  stock
}: ProductCardProps) => {
  const { handleAddProductInCart } = useContext(CartContext);
  const { quantity } = useProduct({
    product: {
      image,
      name,
      price,
      oldPrice,
      id,
      categorie,
      description,
      stock
    }
  });
  const router = useRouter();

  return (
    <div className={styled.cardContainer}>
      <div className={styled.boxProduct}>
        <div className={styled.imageBox}>
          <Image src={image} alt={name} width={368} height={368} />
        </div>
        <div className={styled.info}>
          <h1>{name}</h1>
          {!!oldPrice && (
            <span className={styled.oldPriceCard}>
              {formatCurrency(oldPrice)}
            </span>
          )}
          <h2>{formatCurrency(price)}</h2>
          <span className={styled.priceTextCard}>À vista no PIX</span>
        </div>
      </div>

      <Button
        title="Comprar"
        variant="button-dark"
        size="small"
        icon={<MdShoppingCart />}
        positionIcon="left"
        fullWidth
        type="button"
        onClick={() => {
          handleAddProductInCart({
            image,
            name,
            price,
            oldPrice,
            id,
            categorie,
            description,
            quantity,
            stock
          });
          router.push(`/pre-carrinho/${encoded(id)}`);
        }}
      />
    </div>
  );
};
