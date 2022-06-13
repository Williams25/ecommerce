import { useState, useCallback } from "react";
import Image from "next/image";
import { Products } from "types/Products";
import { formatCurrency } from "utils/currency";
import { Button } from "components/Button";
import styled from "./styles.module.scss";
import classnames from "classnames";

export type ProductInCartProps = Pick<
  Products,
  "image" | "name" | "price" | "categorie" | "description"
>;

export const ProductInCart = ({
  categorie,
  description,
  image,
  name,
  price
}: ProductInCartProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const toggleShowDescription = useCallback(
    () => setShowDescription((desc) => !desc),
    [showDescription]
  );

  return (
    <div className={styled.productIncart}>
      <div className={styled.productCartContainer}>
        <div className={styled.boxProduct}>
          <Image src={image} alt={name} width={368} height={368} />

          <div className={styled.contentInfoCartProduct}>
            <h1>{name}</h1>
          </div>
        </div>

        <div className={styled.contentFinalPrice}>
          <span>Apenas</span>
          <h2>{formatCurrency(price)}</h2>
          <span>á vista</span>
        </div>
      </div>

      <Button
        title="Detalhes"
        variant="button-dark"
        size="small"
        onClick={toggleShowDescription}
      />

      <div
        className={classnames(
          `${styled.details} ${
            showDescription ? styled.showDescription : styled.hiddenDescription
          }`
        )}
      >
        {showDescription && (
          <>
            <h3>Categoria - {categorie}</h3>
            <p>{description}</p>
          </>
        )}
      </div>
    </div>
  );
};
