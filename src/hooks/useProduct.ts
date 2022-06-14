import { CartContext } from "context/CartProvider";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Products } from "types/Products";

export type useProductProps = {
  product: Products;
};

export const useProduct = ({ product }: useProductProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const { productsCart, handleAddProductInCart, removeProduct } =
    useContext(CartContext);

  const onChangeQuantity = useCallback(
    (quantity: number, op: "add" | "remove") => {
      console.log(product.stock);
      if (op === "add" && quantity < product.stock) {
        setQuantity(quantity + 1);
        handleAddProductInCart({ ...product, quantity: quantity + 1 });
      } else if (op === "remove" && quantity > 1) {
        setQuantity(quantity - 1);
        handleAddProductInCart({ ...product, quantity: quantity - 1 });
      }
    },
    [quantity, productsCart]
  );

  const handleTopay = useMemo(() => {
    return product.price * quantity;
  }, [quantity, productsCart]);

  useEffect(() => {
    const isProduct = productsCart.find((p) => p.id === product.id);
    if (isProduct) {
      setQuantity(isProduct.quantity! || 1);
    } else {
      setQuantity(0);
    }
  }, [productsCart]);

  return {
    onChangeQuantity,
    quantity,
    handleTopay,
    removeProduct
  };
};
