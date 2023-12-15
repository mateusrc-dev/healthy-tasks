import { FaHeart, FaTasks } from "react-icons/fa";
import { MenuContainer, MenuItem } from "../styles/components/menu";
import { FaRegEye } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Link from "next/link";

type Props = {
  pageSelected: string;
  userId?: string;
};

export function Menu({ pageSelected, userId }: Props) {
  return (
    <MenuContainer>
      <Link href={`/myRecentTasks`}>
        <MenuItem
          color={pageSelected === "myRecentTasks" ? "selectColor" : null}
        >
          <FaTasks size="25px" /> Minhas atividades recentes
        </MenuItem>
      </Link>
      <Link href={`/publicTasks`}>
        <MenuItem color={pageSelected === "publicTasks" ? "selectColor" : null}>
          <FaRegEye size="25px" /> Atividades públicas
        </MenuItem>
      </Link>
      <Link href={`/profile`}>
        <MenuItem color={pageSelected === "profile" ? "selectColor" : null}>
          <IoPersonCircleSharp size="25px" /> Perfil
        </MenuItem>
      </Link>
      <Link href={`/allTasks`}>
        <MenuItem color={pageSelected === "allTasks" ? "selectColor" : null}>
          <FaThList size="25px" /> Meu histórico de atividades
        </MenuItem>
      </Link>
      <Link href={`favoriteTasks`}>
        <MenuItem
          color={pageSelected === "favoriteTasks" ? "selectColor" : null}
        >
          <FaHeart size="25px" /> Minhas atividades favoritas
        </MenuItem>
      </Link>
    </MenuContainer>
  );
}
