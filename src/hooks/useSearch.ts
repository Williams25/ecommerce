import { ProductContext } from "context/ProductProvider";
import { useCallback, useContext } from "react";
import { normalizeString } from "utils/normalizeString";
import prod from "../../prod.json";

export const useSearch = () => {
  const { setProducts } = useContext(ProductContext);

  const handleSearch = useCallback(
    (search: string, target: "name" | "categorie" = "name") => {
      if (search.length > 0) {
        const filter = prod.filter((product) =>
          normalizeString(product[target].trim().toLowerCase()).includes(
            normalizeString(search.trim().toLowerCase())
          )
        );
        setProducts(filter);
      } else {
        setProducts(prod);
      }
    },
    []
  );

  return {
    handleSearch
  };
};
