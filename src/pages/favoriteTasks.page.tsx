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
import React from "react";
import ContentLoader from "react-content-loader";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingSave, setLoadingSave] = useState<boolean>(false);
  const { user } = useAuth();

  async function handleDeleteFavoriteTask(id: string) {
    try {
      setLoadingSave(true);
      await api.delete(`/favoritesTasks/delete/${id}`);

      setState(!state);
    } catch (error) {
      alert(`Não foi possível excluir o favorito. ${error}`);
    } finally {
      setLoadingSave(false);
    }
  }

  useEffect(() => {
    async function handleGetTasks() {
      try {
        setLoading(true);
        const response = await api.get(
          `/favoritesTasks/getManyFavoriteTasks/${user?.id}`
        );

        setDataFavoritesTasks(response?.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades favoritas. ${error}`);
        return;
      } finally {
        setLoading(false);
      }
    }

    handleGetTasks();
  }, [user, state]);
  return (
    <Container>
      {loadingSave && (
        <ContentLoader
          viewBox="0 0 400 160"
          height={160}
          width={400}
          backgroundColor="transparent"
          style={{
            position: "absolute",
            zIndex: 3,
            left: "calc(50% - 100px)",
            top: "calc(50% - 100px)",
          }}
          //{...props}
        >
          <circle cx="20" cy="86" r="20" />
          <circle cx="100" cy="86" r="20" />
          <circle cx="180" cy="86" r="20" />
        </ContentLoader>
      )}
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
          {loading ? (
            <ContentLoader
              speed={2}
              width={"100%"}
              height={"calc(100vh - 90px)"}
              //viewBox="0 0 400 160"
              backgroundColor="#d9d9d9"
              foregroundColor="#ededed"
              //{...props}
            >
              <rect x="0" y="0" rx="20" ry="20" width="400" height="250" />
              <rect x="450" y="0" rx="20" ry="20" width="400" height="250" />
              <rect x="0" y="270" rx="20" ry="20" width="400" height="250" />
              <rect x="450" y="270" rx="20" ry="20" width="400" height="250" />
            </ContentLoader>
          ) : (
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
          )}
        </ContentContainer>
      </BodyFavoritesTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
