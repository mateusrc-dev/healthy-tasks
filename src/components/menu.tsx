import { FaHeart, FaTasks } from "react-icons/fa";
import { MenuContainer, MenuItem } from "../styles/components/menu";
import { FaRegEye } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

type Props = {
  pageSelected: string;
};

export function Menu({ pageSelected }: Props) {
  return (
    <MenuContainer>
      <MenuItem>
        <FaTasks size="25px" /> Minhas atividades recentes
      </MenuItem>
      <MenuItem color={pageSelected === "publicTasks" ? "selectColor" : null}>
        <FaRegEye size="25px" /> Atividades públicas
      </MenuItem>
      <MenuItem>
        <IoPersonCircleSharp size="25px" /> Perfil
      </MenuItem>
      <MenuItem>
        <FaThList size="25px" /> Meu histórico de atividades
      </MenuItem>
      <MenuItem>
        <FaHeart size="25px" /> Minhas atividades favoritas
      </MenuItem>
    </MenuContainer>
  );
}
