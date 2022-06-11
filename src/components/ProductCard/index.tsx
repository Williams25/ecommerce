import { Button } from "components/Button";
import Image from "next/image";
import styled from "./styles.module.scss";
import { MdShoppingCart } from "react-icons/md";
import { Products } from "types/Products";
import { formatCurrency } from "utils/currency";
import { motion } from "framer-motion";

export type ProductCardProps = Pick<
  Products,
  "image" | "name" | "price" | "oldPrice"
>;

export const ProductCard = ({
  image,
  name,
  price,
  oldPrice
}: ProductCardProps) => {
  return (
    <motion.div
      layout
      animate={{
        opacity: 1,
        scale: 1
      }}
      initial={{
        opacity: 0,
        scale: 0
      }}
      exit={{
        opacity: 0,
        scale: 0
      }}
      transition={{
        duration: 0.3
      }}
      className={styled.cardContainer}
    >
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
      />
    </motion.div>
  );
};
