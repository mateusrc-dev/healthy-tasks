import { FaHeart, FaSignOutAlt, FaTasks } from "react-icons/fa";
import { MenuContainer, MenuItem } from "../styles/components/menu";
import { FaRegEye } from "react-icons/fa6";
import { IoCreate, IoPersonCircleSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "../hooks/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { Loading } from "./loading";

type Props = {
  pageSelected: string;
  userId?: string;
};

export function Menu({ pageSelected }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [pageSelectedInMenu, setPageSelectedInMenu] = useState<string>("");
  const { signOut, user } = useAuth();
  const router = useRouter();

  async function handleChangePage(pageSelectedInClick: string) {
    if (pageSelectedInClick === pageSelected) {
      return;
    } else {
      setLoading(true);
      setPageSelectedInMenu(pageSelectedInClick);

      await router.push(`/${pageSelectedInClick}`);
    }
  }

  return (
    <MenuContainer>
      {user?.typeUser === "patient" && (
        <MenuItem
          onClick={() => handleChangePage("myRecentTasks")}
          color={pageSelected === "myRecentTasks" ? "selectColor" : null}
        >
          {loading && pageSelectedInMenu === "myRecentTasks" ? (
            <Loading />
          ) : (
            <FaTasks size="25px" />
          )}{" "}
          Minhas atividades recentes
        </MenuItem>
      )}
      <MenuItem
        onClick={() => handleChangePage("publicTasks")}
        color={pageSelected === "publicTasks" ? "selectColor" : null}
      >
        {loading && pageSelectedInMenu === "publicTasks" ? (
          <Loading />
        ) : (
          <FaRegEye size="25px" />
        )}{" "}
        Atividades públicas
      </MenuItem>
      <MenuItem
        onClick={() => handleChangePage("profile")}
        color={pageSelected === "profile" ? "selectColor" : null}
      >
        {loading && pageSelectedInMenu === "profile" ? (
          <Loading />
        ) : (
          <IoPersonCircleSharp size="25px" />
        )}{" "}
        Meu perfil
      </MenuItem>
      {user?.typeUser === "patient" && (
        <MenuItem
          onClick={() => handleChangePage("allTasks")}
          color={pageSelected === "allTasks" ? "selectColor" : null}
        >
          {loading && pageSelectedInMenu === "allTasks" ? (
            <Loading />
          ) : (
            <FaThList size="25px" />
          )}{" "}
          Meu histórico de atividades
        </MenuItem>
      )}
      {user?.typeUser === "professional" && (
        <MenuItem
          onClick={() => handleChangePage("createTask")}
          color={pageSelected === "createTask" ? "selectColor" : null}
        >
          {loading && pageSelectedInMenu === "createTask" ? (
            <Loading />
          ) : (
            <IoCreate size="25px" />
          )}{" "}
          Criar nova atividade
        </MenuItem>
      )}
      <MenuItem
        onClick={() => handleChangePage("favoriteTasks")}
        color={pageSelected === "favoriteTasks" ? "selectColor" : null}
      >
        {loading && pageSelectedInMenu === "favoriteTasks" ? (
          <Loading />
        ) : (
          <FaHeart size="25px" />
        )}{" "}
        Minhas atividades favoritas
      </MenuItem>
      <Link href={`/`} onClick={signOut}>
        <MenuItem>
          <FaSignOutAlt size="25px" /> Sair da minha conta
        </MenuItem>
      </Link>
    </MenuContainer>
  );
}
