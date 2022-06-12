import styled from "./styles.module.scss";
import { ProductCard } from "components/ProductCard";
import { Products } from "types/Products";

export type ProductGridProps = {
  products: Products[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <section className={styled.sectionProducts}>
      <div className={styled.contentGridProduct}>
        <div className={styled.products}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
