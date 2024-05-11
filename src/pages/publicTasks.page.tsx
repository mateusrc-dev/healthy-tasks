import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import {
  BodyOfPublicTasks,
  Container,
  ContentContainer,
  Header,
  PageContainer,
  PaginationContainer,
} from "../styles/pages/publicTasks";
import { Task } from "../components/task";
import { Menu } from "../components/menu";
import { InputComponent } from "../components/input";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { IoAlertCircle } from "react-icons/io5";
import React from "react";
import ContentLoader from "react-content-loader";

interface TaskType {
  carriedOut: boolean;
  created_at: Date;
  deadline: Date;
  description: string;
  forceTask: number | null;
  id: string;
  isTaskPublic: boolean;
  patientEmail: string;
  title: string;
  updatedAt: Date;
  user: {
    complaint: string | null;
    created_at: Date;
    description: string | null;
    email: string;
    id: string;
    password: string;
    photoUrl: string;
    profileForce: number | null;
    profilePublic: boolean | null;
    specialization: string | null;
    statisticPublic: boolean | null;
    typeUser: string;
    updatedAt: Date;
    username: string;
  };
}

export default function PublicTasks() {
  const [dataTasksState, setDataTasksState] = useState<TaskType[]>([]);
  const [dataAllTasksState, setDataAllTasksState] = useState<TaskType[]>([]);
  const [pageSelected, setPageSelected] = useState<number>(1);
  const [count, setCount] = useState(0);
  const [changeSearch, setChangeSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  console.log(dataAllTasksState);

  function handleChangePage(page: number) {
    setPageSelected(page);
  }

  useEffect(() => {
    async function handleGetTasks() {
      try {
        setLoading(true);
        const response = await api.get(
          `/tasks/getPublicTasks/${pageSelected - 1}/${changeSearch}`
        );

        const response2 = await api.get(`/tasks/getAllPublicTasks`);

        setDataAllTasksState(response2?.data);
        setDataTasksState(response?.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades. ${error}`);
        return;
      } finally {
        setLoading(false);
      }
    }

    handleGetTasks();
  }, [changeSearch, pageSelected]);

  useEffect(() => {
    function handlePages() {
      //setLoading(true);
      let num = 1;
      for (let i = 1; dataAllTasksState?.length > i; i++) {
        if (i % 5 === 0) {
          num += 1;
        }
      }
      //setLoading(false);
      return setCount(num);
    }
    handlePages();
  }, [dataAllTasksState?.length]);
  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyOfPublicTasks>
        <Menu pageSelected="publicTasks" />
        <ContentContainer>
          {loading ? null : (
            <InputComponent
              handleOnChange={setChangeSearch}
              placeholder="Clique para pesquisar por alguma atividade"
            />
          )}
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
              <rect x="8" y="0" rx="20" ry="20" width="100%" height="50" />
              <rect x="8" y="70" rx="20" ry="20" width="100%" height="150" />
              <rect x="8" y="240" rx="20" ry="20" width="100%" height="150" />
              <rect x="8" y="410" rx="20" ry="20" width="100%" height="150" />
            </ContentLoader>
          ) : dataTasksState?.length !== 0 ? (
            dataTasksState?.map((item) => (
              <Task
                key={item.id}
                professionalId={item.user.id}
                descriptionOfTask={item.description}
                professionalName={item.user.username}
                professionalPhotoUrl={`${api.defaults.baseURL}/files/${item.user.photoUrl}`}
                titleOfTask={item.title}
                checkTask={item.carriedOut}
                taskId={item.id}
                deadline={item.deadline}
                isTaskPublic={item.isTaskPublic}
                forceTask={item.forceTask}
                userEmailOfTask={item.patientEmail}
                taskIsForOtherUser={true}
                publicTasksPage={true}
              />
            ))
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <IoAlertCircle size={100} color={"#ff194b"} />
              <h3
                style={{
                  color: "#ff194b",
                  fontStyle: "italic",
                  fontSize: "30px",
                }}
              >
                Não há atividades públicas no momento!
              </h3>
            </div>
          )}

          {loading ? null : (
            <PaginationContainer>
              {Array.from(Array(count).keys()).map((day) => {
                return (
                  <PageContainer
                    onClick={() => handleChangePage(day + 1)}
                    key={day}
                    color={pageSelected === day + 1 ? "selectColor" : null}
                  >
                    {day + 1}
                  </PageContainer>
                );
              })}
            </PaginationContainer>
          )}
        </ContentContainer>
      </BodyOfPublicTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
