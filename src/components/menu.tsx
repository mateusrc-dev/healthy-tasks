import { FaHeart, FaSignOutAlt, FaTasks } from "react-icons/fa";
import { MenuContainer, MenuItem } from "../styles/components/menu";
import { FaRegEye } from "react-icons/fa6";
import { IoCreate, IoPersonCircleSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "../hooks/auth";

type Props = {
  pageSelected: string;
  userId?: string;
};

export function Menu({ pageSelected }: Props) {
  const { signOut, user } = useAuth();

  return (
    <MenuContainer>
      {user?.typeUser === "patient" && (
        <Link href={`/myRecentTasks`}>
          <MenuItem
            color={pageSelected === "myRecentTasks" ? "selectColor" : null}
          >
            <FaTasks size="25px" /> Minhas atividades recentes
          </MenuItem>
        </Link>
      )}
      <Link href={`/publicTasks`}>
        <MenuItem color={pageSelected === "publicTasks" ? "selectColor" : null}>
          <FaRegEye size="25px" /> Atividades públicas
        </MenuItem>
      </Link>
      <Link href={`/profile`}>
        <MenuItem color={pageSelected === "profile" ? "selectColor" : null}>
          <IoPersonCircleSharp size="25px" /> Meu perfil
        </MenuItem>
      </Link>
      {user?.typeUser === "patient" && (
        <Link href={`/allTasks`}>
          <MenuItem color={pageSelected === "allTasks" ? "selectColor" : null}>
            <FaThList size="25px" /> Meu histórico de atividades
          </MenuItem>
        </Link>
      )}
      {user?.typeUser === "professional" && (
        <Link href={`/createTask`}>
          <MenuItem
            color={pageSelected === "createTask" ? "selectColor" : null}
          >
            <IoCreate size="25px" /> Criar nova atividade
          </MenuItem>
        </Link>
      )}
      <Link href={`/favoriteTasks`}>
        <MenuItem
          color={pageSelected === "favoriteTasks" ? "selectColor" : null}
        >
          <FaHeart size="25px" /> Minhas atividades favoritas
        </MenuItem>
      </Link>
      <Link href={`/`} onClick={signOut}>
        <MenuItem>
          <FaSignOutAlt size="25px" /> Sair da minha conta
        </MenuItem>
      </Link>
    </MenuContainer>
  );
}
