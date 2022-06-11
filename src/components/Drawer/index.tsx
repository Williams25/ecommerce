import styled from "./styles.module.scss";
import classnames from "classnames";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ReactNode } from "react";

export type DrawerProps = {
  // eslint-disable-next-line no-unused-vars
  toggleDrawer: (toggle: boolean) => void;
  drawer: boolean;
  children?: ReactNode;
};

export const Drawer = ({ drawer, toggleDrawer, children }: DrawerProps) => {
  return (
    <div
      className={classnames(`
        ${drawer ? styled.contentDrawer : styled.contentDrawerDisabled}
      `)}
    >
      <div className={styled.drawer}>
        <div className={styled.buttonClose}>
          <button onClick={() => toggleDrawer(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        {!!children && children}
      </div>
    </div>
  );
};
