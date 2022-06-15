import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Combobox } from "@headlessui/react";
import styled from "./styles.module.scss";
import { ProductContext } from "context/ProductProvider";
import { ProductSearchCard } from "components/ProductSearchCard";
import { useRouter } from "next/router";
import { encoded } from "utils/base64";

export type SearchBarProps = {
  type: "name" | "categorie";
  // eslint-disable-next-line no-unused-vars
  handleSearch: (search: string, target?: "name" | "categorie") => void;
};

export const SearchBar = ({ handleSearch, type = "name" }: SearchBarProps) => {
  const { products } = useContext(ProductContext);

  const [idProducts, setIdProducts] = useState<string[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");

  const router = useRouter();

  const sendSearch = () => {
    searchProduct.trim().length > 0 &&
      router.push(`/pesquisa/${encoded(idProducts)}?type=${type}`);
    setSearchProduct("");
  };

  const getIdsProducts = useCallback(() => {
    const ids = products.map((product) => product.id);
    setIdProducts(ids);
  }, [searchProduct]);

  useEffect(() => {
    getIdsProducts();
  }, [searchProduct]);

  return (
    <Combobox value={searchProduct} onChange={setSearchProduct}>
      <div className={styled.searchContent}>
        <div className={styled.searchBar}>
          <Combobox.Input
            type="text"
            placeholder="Busque aqui"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchProduct(e.target.value);
              handleSearch(e.target.value, type);
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onKeyUp={(e: any) => {
              e.key === "Enter" && sendSearch();
            }}
          />
          <Combobox.Button type="button" onClick={() => sendSearch()}>
            <RiSearch2Line />
          </Combobox.Button>
        </div>

        <Combobox.Options className={styled.papper}>
          <div className={styled.resultItems}>
            {products.length} - resultados encontrados
            {products.map((item) => (
              <Combobox.Option key={item.id} value={item.name}>
                <ProductSearchCard
                  product={{ ...item }}
                  search={searchProduct}
                  type={type}
                />
              </Combobox.Option>
            ))}
          </div>
        </Combobox.Options>
      </div>
    </Combobox>
  );
};
