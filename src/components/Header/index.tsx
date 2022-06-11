import styled from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { Button } from "components/Button";
import { mockMenuItens } from "./mock";
import { Drawer } from "components/Drawer";
import { useDrawer } from "hooks/useDrawer";

export type MenuItens = {
  title: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone?: any;
};

export const Header = () => {
  const { isDrawer, toggleDrawer } = useDrawer();
  return (
    <header className={styled.header}>
      <div className={styled.contentHeader}>
        <Button
          onClick={() => toggleDrawer(true)}
          icon={<IoMenu />}
          variant="button-dark"
        />
        <h1>OSF</h1>

        <div className={styled.searchContent}>
          <div className={styled.searchBar}>
            <input type="text" placeholder="Busque aqui" />
            <button type="button">
              <RiSearch2Line />
            </button>
          </div>
          {/* fazer o painel de busca */}
        </div>
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
