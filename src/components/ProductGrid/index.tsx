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
              <motion.div
                key={product.id}
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
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
