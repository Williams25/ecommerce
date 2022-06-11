import { Dispatch, SetStateAction } from "react";
import { RiSearch2Line } from "react-icons/ri";
import styled from "./styles.module.scss";

export type SearchBarProps = {
  type: "name" | "categorie";
  searchProduct: string;
  setSearchProduct: Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  handleSearch: (search: string, target?: "name" | "categorie") => void;
};

export const SearchBar = ({
  handleSearch,
  setSearchProduct,
  type = "name",
  searchProduct
}: SearchBarProps) => {
  return (
    <div className={styled.searchContent}>
      <div className={styled.searchBar}>
        <input
          type="text"
          placeholder="Busque aqui"
          onChange={(e) => {
            setSearchProduct(e.target.value);
            handleSearch(e.target.value, type);
          }}
        />
        <button type="button" onClick={() => handleSearch(searchProduct, type)}>
          <RiSearch2Line />
        </button>
      </div>
      {/* fazer o painel de busca */}
    </div>
  );
};
