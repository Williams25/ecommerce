import styled from "./styles.module.scss";
import { IoMenu } from "react-icons/io5";
import { Button } from "components/Button";
import { mockMenuItens } from "./mock";
import { Drawer } from "components/Drawer";
import { useDrawer } from "hooks/useDrawer";
import { SearchBar } from "components/SearchBar";
import { useSearch } from "hooks/useSearch";

export type MenuItens = {
  title: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone?: any;
};

export const Header = () => {
  const { isDrawer, toggleDrawer } = useDrawer();
  const searchName = useSearch();
  const searchCategorie = useSearch();

  return (
    <header className={styled.header}>
      <div className={styled.contentHeader}>
        <Button
          onClick={() => toggleDrawer(true)}
          icon={<IoMenu />}
          variant="button-dark"
        />
        <h1>OSF</h1>
        <SearchBar
          handleSearch={searchName.handleSearch}
          searchProduct={searchName.searchProduct}
          setSearchProduct={searchName.setSearchProduct}
          type="name"
        />
      </div>

      <div className={styled.itemsMenu}>
        {mockMenuItens.map((item) => (
          <Button
            key={item.link}
            title={item.title}
            variant="button-dark"
            icon={item.icone}
          />
        ))}
      </div>

      <Drawer toggleDrawer={toggleDrawer} drawer={isDrawer}>
        <div className={styled.drawerItems}>
          <SearchBar
            handleSearch={searchCategorie.handleSearch}
            searchProduct={searchCategorie.searchProduct}
            setSearchProduct={searchCategorie.setSearchProduct}
            type="categorie"
          />

          {mockMenuItens.map((item) => (
            <Button
              key={item.link}
              title={item.title}
              variant="button-dark"
              icon={item.icone}
              fullWidth
              onClick={() => toggleDrawer(false)}
            />
          ))}
        </div>
      </Drawer>
    </header>
  );
};
