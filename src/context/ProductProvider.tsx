import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction
} from "react";
import { Products } from "types/Products";
import prod from "../../prod.json";

export type ProductProviderData = {
  products: Products[];
  setProducts: Dispatch<SetStateAction<Products[]>>;
};

export type ProductProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext({} as ProductProviderData);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setProducts(prod);
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
