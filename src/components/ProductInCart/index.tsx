import { useState, useCallback } from "react";
import Image from "next/image";
import { Products } from "types/Products";
import { formatCurrency } from "utils/currency";
import { Button } from "components/Button";
import styled from "./styles.module.scss";
import classnames from "classnames";
import { AddQuantityControl } from "components/AddQuantityControl";
import { useProduct } from "hooks/useProduct";
import { useRouter } from "next/router";
import { encoded } from "utils/base64";
export type ProductInCartProps = {
  type: "pre-cart" | "cart";
  product: Products;
};

export const ProductInCart = ({
  product,
  type = "pre-cart"
}: ProductInCartProps) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const router = useRouter();

  const { onChangeQuantity, quantity, handleTopay, removeProduct } = useProduct(
    {
      product: { ...product }
    }
  );

  const toggleShowDescription = useCallback(
    () => setShowDescription((desc) => !desc),
    [showDescription]
  );

  return (
    <div className={styled.productIncart}>
      <div className={styled.productCartContainer}>
        <div className={styled.boxProduct}>
          <div
            className={styled.imageBox}
            onClick={() => router.push(`/produto/${encoded(product.id)}`)}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={368}
              height={368}
            />
          </div>

          <div className={styled.contentInfoCartProduct}>
            <h1 onClick={() => router.push(`/produto/${encoded(product.id)}`)}>
              {product.name}
            </h1>
            {type === "cart" && product.stock === quantity && (
              <span>
                Máximo de produtos em estoque atingidos limite ({product.stock})
                itens
              </span>
            )}
          </div>
        </div>

        <div className={styled.contentFinalPrice}>
          <span>Apenas</span>
          <h2>
            {formatCurrency(
              quantity > 0 && type === "cart" ? handleTopay : product.price
            )}
          </h2>
          <span>á vista</span>

          {type === "cart" && (
            <AddQuantityControl
              onChangeQuantity={onChangeQuantity}
              quantity={quantity}
              removeProduct={removeProduct}
              id={product.id}
            />
          )}
        </div>
      </div>

      <div className={styled["content-button"]}>
        <Button
          title="Detalhes"
          variant="button-dark"
          size="small"
          onClick={toggleShowDescription}
        />
      </div>

      <div
        className={classnames(
          `${styled.details} ${
            showDescription ? styled.showDescription : styled.hiddenDescription
          }`
        )}
      >
        {showDescription && (
          <>
            <h3>Categoria - {product.categorie}</h3>
            <p>{product.description}</p>
          </>
        )}
      </div>
    </div>
  );
};
