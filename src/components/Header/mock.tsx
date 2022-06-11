import { MenuItens } from ".";
import {
  IoGameControllerOutline,
  IoHardwareChipOutline
} from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { BsPhone } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";

export const mockMenuItens: MenuItens[] = [
  {
    link: "/categories/Games",
    title: "Games",
    icone: <IoGameControllerOutline />
  },
  {
    link: "/categories/Monitores",
    title: "Monitores",
    icone: <CgScreen />
  },
  {
    link: "/categories/Hardware",
    title: "Hardware",
    icone: <IoHardwareChipOutline />
  },
  {
    link: "/categories/Celular",
    title: "Celular",
    icone: <BsPhone />
  },
  {
    link: "/categories/Áudio",
    title: "Áudio",
    icone: <AiOutlineSound />
  }
];
