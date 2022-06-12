import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useCallback,
  useMemo
} from "react";
import { Products } from "types/Products";
import { createSessionStorage } from "utils/session-storage";

export type CartProviderData = {
  // eslint-disable-next-line no-unused-vars
  handleAddProductInCart: (product: Products) => void;
  productsCart: Products[];
  handleTotalProducts: number;
};

export type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [productsCart, setProductsCart] = useState<Products[]>([]);

  const handleAddProductInCart = useCallback(
    (product: Products) => {
      const isProduct = productsCart.find((p) => p.id === product.id);

      if (isProduct) {
        const newCart = productsCart.filter((item) => {
          if (item.id === product.id) {
            item.quantity = product.quantity || 1;
          }

          return item;
        });

        setProductsCart([...newCart]);
      } else {
        setProductsCart([...productsCart, { ...product, quantity: 1 }]);
      }
    },
    [productsCart]
  );

  const handleTotalProducts = useMemo(() => {
    return productsCart.reduce(
      (previous, current) => previous + current.quantity!,
      0
    );
  }, [productsCart]);

  useEffect(() => {
    productsCart && createSessionStorage(JSON.stringify(productsCart), "cart");
  }, [productsCart]);

  return (
    <CartContext.Provider
      value={{
        handleAddProductInCart,
        productsCart,
        handleTotalProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
