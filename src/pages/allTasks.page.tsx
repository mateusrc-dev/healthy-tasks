import { FaHeartPulse } from "react-icons/fa6";
import {
  BodyAllTasks,
  ButtonMenuBetween,
  ButtonMenuFirst,
  ButtonMenuLast,
  ButtonMenuPenultimate,
  ContainerAllTasks,
  ContainerForSpecificTasks,
  ContentContainerAllTasks,
  HeaderAllTasks,
} from "../styles/pages/allTasks";
import { Menu } from "../components/menu";
import { Footer } from "../styles/pages/home";
import { Task } from "../components/task";
import { BsCheckCircleFill, BsClockFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { StatisticContainer } from "../styles/pages/profile";
import { FcStatistics } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/auth";
import { api } from "../lib/axios";

export interface TaskType {
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

export default function AllTasks() {
  const [dataTasksState, setDataTasksState] = useState<TaskType[]>([]);
  const [deadlineState, setDeadlineState] = useState<boolean>(false);
  const [carriedOutset, setCarriedOut] = useState<number>(0);
  const { user } = useAuth();

  function handleDeadlineState(deadlineState: boolean) {
    setDeadlineState(deadlineState);
  }

  useEffect(() => {
    async function handleGetTasks() {
      try {
        const response = await api.get(
          `/tasks/getAllTasksByEmail/${user?.email}/`
        );

        setDataTasksState(response?.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades. ${error}`);
        return;
      }
    }

    handleGetTasks();
  }, [user]);

  useEffect(() => {
    function handleResultTasksCarriedOut() {
      for (let i = 0; i < dataTasksState.length; i += 1) {
        if (dataTasksState[i].carriedOut === true) {
          setCarriedOut((state) => state + 1);
        }
      }
    }
    handleResultTasksCarriedOut();
  }, [dataTasksState]);

  return (
    <ContainerAllTasks>
      <HeaderAllTasks>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </HeaderAllTasks>
      <BodyAllTasks>
        <Menu pageSelected="allTasks" />
        <scroll-container style={{ width: "100%" }}>
          <ContentContainerAllTasks>
            <nav
              style={{
                position: "fixed",
                zIndex: 4,
                top: "90px",
                background: "transparent",
                right: "calc((100% - 50%) - 430px)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                fontStyle: "italic",
              }}
            >
              <ButtonMenuFirst href="#page-1">
                Atividades por concluir
              </ButtonMenuFirst>
              <ButtonMenuBetween href="#page-2">
                Atividades concluídas
              </ButtonMenuBetween>
              <ButtonMenuPenultimate href="#page-3">
                Atividades não concluídas
              </ButtonMenuPenultimate>
              <ButtonMenuLast
                href="#page-4"
                color={
                  (carriedOutset / dataTasksState.length) * 100 > 50
                    ? "colorPositive"
                    : "colorNegative"
                }
              >
                Ver estatística
              </ButtonMenuLast>
            </nav>
            <scroll-page
              id="page-1"
              style={{
                width: "100%",
                minHeight: "calc(100vh - 250px)",
                overflow: "auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "sticky",
                  zIndex: 3,
                  top: 0,
                  background: "#138fe8",
                  width: "100%",
                  padding: "20px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontStyle: "italic",
                }}
              >
                <h3>Atividades por concluir</h3>
                <BsClockFill size={25} />
              </div>
              <ContainerForSpecificTasks>
                {dataTasksState?.map((item) => (
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
                    publicTasksPage={false}
                    marginInline={true}
                    showComments={false}
                    handleDeadlineState={handleDeadlineState}
                    onDisplay={!item.carriedOut && deadlineState} // fazer aqui a lógica para aparecer as tarefas que somente estiverem dentro do critério
                  />
                ))}
              </ContainerForSpecificTasks>
            </scroll-page>
            <scroll-page
              id="page-2"
              style={{
                width: "100%",
                minHeight: "calc(100vh - 250px)",
                overflow: "auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "sticky",
                  zIndex: 3,
                  top: 0,
                  background: "#138fe8",
                  width: "100%",
                  padding: "20px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontStyle: "italic",
                }}
              >
                <h3>Atividades concluídas</h3>
                <BsCheckCircleFill size={25} />
              </div>
              <ContainerForSpecificTasks>
                {dataTasksState?.map((item) => (
                  <Task
                    key={item.id}
                    descriptionOfTask={item.description}
                    professionalId={item.user.id}
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
                    showComments={false}
                    marginInline={true}
                    onDisplay={item.carriedOut}
                  />
                ))}
              </ContainerForSpecificTasks>
            </scroll-page>
            <scroll-page
              id="page-3"
              style={{
                width: "100%",
                minHeight: "calc(100vh - 250px)",
                overflow: "auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "sticky",
                  zIndex: 3,
                  top: 0,
                  background: "#138fe8",
                  width: "100%",
                  padding: "20px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontStyle: "italic",
                }}
              >
                <h3>Atividades não concluídas</h3>
                <RiErrorWarningFill size={25} />
              </div>
              <ContainerForSpecificTasks>
                {dataTasksState?.map((item) => (
                  <Task
                    key={item.id}
                    descriptionOfTask={item.description}
                    professionalId={item.user.id}
                    professionalName={item.user.username}
                    professionalPhotoUrl={`${api.defaults.baseURL}/files/${item.user.photoUrl}`}
                    titleOfTask={item.title}
                    checkTask={item.carriedOut}
                    taskId={item.id}
                    deadline={item.deadline}
                    isTaskPublic={item.isTaskPublic}
                    showComments={false}
                    forceTask={item.forceTask}
                    userEmailOfTask={item.patientEmail}
                    taskIsForOtherUser={true}
                    publicTasksPage={true}
                    marginInline={true}
                    onDisplay={!item.carriedOut && !deadlineState}
                  />
                ))}
              </ContainerForSpecificTasks>
            </scroll-page>
            <scroll-page
              id="page-4"
              style={{
                width: "100%",
                minHeight: "calc(100vh - 250px)",
                overflow: "auto",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "sticky",
                  zIndex: 3,
                  top: 0,
                  background: "#138fe8",
                  width: "100%",
                  padding: "20px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontStyle: "italic",
                }}
              >
                <h3>Estatística de todas as atividades</h3>
                <FcStatistics size={35} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "40px",
                  gap: "40px",
                }}
              >
                <StatisticContainer
                  color={
                    (carriedOutset / dataTasksState.length) * 100 > 50
                      ? "positiveColor"
                      : "negativeColor"
                  }
                >
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "22px",
                        marginBottom: "10px",
                      }}
                    >
                      Estatística:
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: "22px",
                      }}
                    >
                      Total de atividades: {dataTasksState?.length}
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: "22px",
                      }}
                    >
                      Atividades realizadas dentro do prazo: {carriedOutset}
                    </p>
                  </div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontStyle: "italic",
                      fontSize: "100px",
                      color: "rgba(255, 255, 255, 0.5)",
                      paddingRight: "140px",
                    }}
                  >
                    {Number(
                      (carriedOutset / dataTasksState.length) * 100
                    ).toFixed(1)}{" "}
                    %
                  </p>
                </StatisticContainer>
                <StatisticContainer
                  color={
                    (carriedOutset / dataTasksState.length) * 100 > 50
                      ? "positiveColor"
                      : "negativeColor"
                  }
                >
                  {(carriedOutset / dataTasksState.length) * 100 > 50 ? (
                    <h1>Você está indo muito bem, parabéns... 😊</h1>
                  ) : (
                    <h1>Não desanime, você vai chegar lá... 🚀</h1>
                  )}
                </StatisticContainer>
              </div>
            </scroll-page>
          </ContentContainerAllTasks>
        </scroll-container>
      </BodyAllTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </ContainerAllTasks>
  );
}
