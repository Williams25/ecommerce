import Image from "next/image";
import Link from "next/link";
import { Products } from "types/Products";
import { normalizeString } from "utils/normalizeString";
import styled from "./styles.module.scss";
import { encoded } from "utils/base64";

export type ProductSearchCardProps = {
  product: Products;
  search?: string;
  type: "name" | "categorie";
};

export const ProductSearchCard = ({
  product,
  search,
  type
}: ProductSearchCardProps) => {
  return (
    <Link href={`/produto/${encoded(product.id)}`}>
      <a className={styled.containerProductSearch}>
        <div className={styled.boxImageSarch}>
          <Image
            src={product.image}
            alt={product.name}
            width={64}
            height={64}
          />
        </div>

        <div className={styled.infoProductSearch}>
          <h1>
            {product.name.split("").map((item, index) => (
              <span
                key={index}
                className={
                  type === "name" &&
                  normalizeString(search?.trim().toLowerCase() || "").includes(
                    normalizeString(item.trim().toLowerCase())
                  )
                    ? styled.activeLetter
                    : ""
                }
              >
                {item}
              </span>
            ))}
          </h1>

          <h2>
            {product.categorie.split("").map((item, index) => (
              <span
                key={index}
                className={
                  type === "categorie" &&
                  normalizeString(search?.trim().toLowerCase() || "").includes(
                    normalizeString(item.trim().toLowerCase())
                  )
                    ? styled.activeLetter
                    : ""
                }
              >
                {item}
              </span>
            ))}
          </h2>
        </div>
      </a>
    </Link>
  );
};
