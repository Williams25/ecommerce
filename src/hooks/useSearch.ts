import { ProductContext } from "context/ProductProvider";
import { useCallback, useContext } from "react";
import { normalizeString } from "utils/normalizeString";

export const useSearch = () => {
  const { setProducts, productsCopy } = useContext(ProductContext);

  const handleSearch = useCallback(
    (search: string, target: "name" | "categorie" = "name") => {
      if (search.length > 0) {
        const filter = productsCopy.filter((product) =>
          normalizeString(product[target].trim().toLowerCase()).includes(
            normalizeString(search.trim().toLowerCase())
          )
        );
        setProducts(filter);
      } else {
        setProducts([...productsCopy]);
      }
    },
    [productsCopy]
  );

  return {
    handleSearch
  };
};
