import { useContext, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Combobox } from "@headlessui/react";
import styled from "./styles.module.scss";
import { ProductContext } from "context/ProductProvider";
import { ProductSearchCard } from "components/ProductSearchCard";

export type SearchBarProps = {
  type: "name" | "categorie";
  // eslint-disable-next-line no-unused-vars
  handleSearch: (search: string, target?: "name" | "categorie") => void;
};

export const SearchBar = ({ handleSearch, type = "name" }: SearchBarProps) => {
  const { products } = useContext(ProductContext);
  const [searchProduct, setSearchProduct] = useState<string>("");

  return (
    <Combobox value={searchProduct} onChange={setSearchProduct}>
      <div className={styled.searchContent}>
        <div className={styled.searchBar}>
          <Combobox.Input
            type="text"
            placeholder="Busque aqui"
            onChange={(e) => {
              setSearchProduct(e.target.value);
              handleSearch(e.target.value, type);
            }}
          />
          <Combobox.Button
            type="button"
            onClick={() => handleSearch(searchProduct, type)}
          >
            <RiSearch2Line />
          </Combobox.Button>
        </div>

        <Combobox.Options className={styled.papper}>
          <div className={styled.resultItems}>
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
