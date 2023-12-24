import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import {
  BodyOfPublicTasks,
  Container,
  ContentContainer,
  Header,
  PageContainer,
  PaginationContainer,
} from "../styles/pages/myRecentTasks";
import { Task } from "../components/task";
import { Menu } from "../components/menu";
import { InputComponent } from "../components/input";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { useAuth } from "../hooks/auth";

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

export default function MyRecentTasks(props) {
  console.log(JSON.stringify(props.list));
  const [dataTasksState, setDataTasksState] = useState<TaskType[]>([]);
  const { user } = useAuth();
  console.log(dataTasksState);

  useEffect(() => {
    async function handleGetTasksByUserId() {
      try {
        const response = await api.get(`/tasks/getTaskById/${user.email}`);

        setDataTasksState(response.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades. ${error}`);
        return;
      }
    }
    handleGetTasksByUserId();
  }, [user]);

  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyOfPublicTasks>
        <Menu pageSelected="myRecentTasks" />
        <ContentContainer>
          <InputComponent placeholder="Clique para pesquisar por alguma atividade" />
          {dataTasksState?.map((item) => (
            <Task
              key={item.id}
              descriptionOfTask={item.description}
              professionalName={item.user.username}
              professionalPhotoUrl={`${api.defaults.baseURL}/files/${item.user.photoUrl}`}
              titleOfTask={item.title}
            />
          ))}
          <PaginationContainer>
            <PageContainer color={"selectColor"}>1</PageContainer>
            <PageContainer>2</PageContainer>
            <PageContainer>3</PageContainer>
            <PageContainer>4</PageContainer>
            <PageContainer>5</PageContainer>
            <PageContainer>6</PageContainer>
            <PageContainer>7</PageContainer>
          </PaginationContainer>
        </ContentContainer>
      </BodyOfPublicTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    props: {
      list: [1, 2, 3, 4],
    },
  };
};
