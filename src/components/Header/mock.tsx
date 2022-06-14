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
    link: "/categoria/Gamer",
    title: "Gamer",
    icone: <IoGameControllerOutline />
  },
  {
    link: "/categoria/Monitores",
    title: "Monitores",
    icone: <CgScreen />
  },
  {
    link: "/categoria/Hardware",
    title: "Hardware",
    icone: <IoHardwareChipOutline />
  },
  {
    link: "/categoria/Celular",
    title: "Celular",
    icone: <BsPhone />
  },
  {
    link: "/categoria/Áudio",
    title: "Áudio",
    icone: <AiOutlineSound />
  }
];
