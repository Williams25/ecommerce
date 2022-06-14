import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect
} from "react";
import { productService } from "services/products";
import { Products } from "types/Products";

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

  const handleLoadProducts = useCallback(async () => {
    const { data } = await productService.getAll();
    setProducts(data);
  }, []);

  useEffect(() => {
    handleLoadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
