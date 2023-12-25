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
  const [pageSelected, setPageSelected] = useState<number>(1);
  const [count, setCount] = useState(0);
  const [changeSearch, setChangeSearch] = useState<string>("");
  console.log(changeSearch);

  function handleChangePage(page: number) {
    setPageSelected(page);
  }

  useEffect(() => {
    async function handleGetTasks() {
      try {
        const response = await api.get(
          `/tasks/getPublicTasks/${pageSelected - 1}/${changeSearch}`
        );

        setDataTasksState(response.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades. ${error}`);
        return;
      }
    }

    handleGetTasks();
  }, [changeSearch, pageSelected]);

  useEffect(() => {
    function handlePages() {
      let num = 1;
      for (let i = 1; dataTasksState.length > i; i++) {
        if (i % 5 === 0) {
          num += 1;
        }
      }
      return setCount(num);
    }
    handlePages();
  }, [dataTasksState.length]);
  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyOfPublicTasks>
        <Menu pageSelected="publicTasks" />
        <ContentContainer>
          <InputComponent
            handleOnChange={setChangeSearch}
            placeholder="Clique para pesquisar por alguma atividade"
          />
          {dataTasksState.map((item) => (
            <Task
              key={item.id}
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
          ))}
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
        </ContentContainer>
      </BodyOfPublicTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
