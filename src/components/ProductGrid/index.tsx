import styled from "./styles.module.scss";
import { ProductCard } from "components/ProductCard";
import { Products } from "types/Products";
import { motion, AnimatePresence } from "framer-motion";

export type ProductGridProps = {
  products: Products[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <section className={styled.sectionProducts}>
      <div className={styled.contentGridProduct}>
        <motion.div className={styled.products}>
          <AnimatePresence>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
