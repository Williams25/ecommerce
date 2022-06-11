import styled from "./styles.module.scss";
import { ProductCard } from "components/ProductCard";
import prod from "../../../prod.json";

export const ProductGrid = () => {
  return (
    <section className={styled.sectionProducts}>
      <div className={styled.contentGridProduct}>
        <div className={styled.products}>
          {prod.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
