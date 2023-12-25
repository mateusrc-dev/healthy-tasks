import { FaHeartPulse } from "react-icons/fa6";
import { Menu } from "../components/menu";
import {
  BodyFavoritesTasks,
  Container,
  ContentContainer,
  FavoriteTasksContainer,
  Header,
} from "../styles/pages/favoriteTasks";
import { Footer } from "../styles/pages/home";
import { FavoriteTask } from "../components/favoriteTask";
import { useAuth } from "../hooks/auth";
import { api } from "../lib/axios";
import { useEffect, useState } from "react";

interface DataFavoritesTasks {
  id: string;
  task: {
    title: string;
    description: string;
    user: {
      username: string;
      specialization: string;
      photoUrl: string;
    };
  };
}

export default function FavoriteTasks() {
  const [dataFavoritesTasks, setDataFavoritesTasks] = useState<
    DataFavoritesTasks[]
  >([]);
  const [state, setState] = useState<boolean>(false);
  const { user } = useAuth();

  async function handleDeleteFavoriteTask(id: string) {
    try {
      await api.delete(`/favoritesTasks/delete/${id}`);

      setState(!state);
    } catch (error) {
      alert(`Não foi possível excluir o favorito. ${error}`);
    }
  }

  useEffect(() => {
    async function handleGetTasks() {
      try {
        const response = await api.get(
          `/favoritesTasks/getManyFavoriteTasks/${user?.id}`
        );

        setDataFavoritesTasks(response?.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades favoritas. ${error}`);
        return;
      }
    }

    handleGetTasks();
  }, [user, state]);
  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyFavoritesTasks>
        <Menu pageSelected={"favoriteTasks"} />
        <ContentContainer>
          <h3
            style={{
              color: "#0b0cca",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "25px",
            }}
          >
            Atividades favoritas
          </h3>
          <FavoriteTasksContainer>
            {dataFavoritesTasks?.map((item) => (
              <FavoriteTask
                favoriteId={item.id}
                onEvent={handleDeleteFavoriteTask}
                key={item?.id}
                description={item?.task.description}
                professionalName={item?.task.user.username}
                title={item?.task.title}
                professionalPhoto={`${api.defaults.baseURL}/files/${item?.task.user.photoUrl}`}
                professionalSpecialization={item?.task.user.specialization}
              />
            ))}
          </FavoriteTasksContainer>
        </ContentContainer>
      </BodyFavoritesTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
