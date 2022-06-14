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
  // eslint-disable-next-line no-unused-vars
  removeProduct: (id: string) => void;
  productsCart: Products[];
  handleTotalProducts: number;
  handleTopayOrder: number;
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
      console.log(isProduct);
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

  const removeProduct = useCallback(
    (id: string) => {
      const removeProduct = productsCart.filter((product) => product.id !== id);
      setProductsCart(removeProduct);
    },
    [productsCart]
  );

  const handleTotalProducts = useMemo(() => {
    return productsCart.reduce(
      (previous, current) => previous + current.quantity!,
      0
    );
  }, [productsCart]);

  const handleTopayOrder = useMemo(() => {
    return productsCart.reduce(
      (previous, current) => previous + current.quantity! * current.price,
      0
    );
  }, [productsCart]);

  useEffect(() => {
    productsCart && createSessionStorage(JSON.stringify(productsCart), "cart");
  }, [productsCart]);

  return (
    <CartContext.Provider
      value={{
        removeProduct,
        handleAddProductInCart,
        productsCart,
        handleTotalProducts,
        handleTopayOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
