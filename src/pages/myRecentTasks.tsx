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

export default function myRecentTasks(props) {
  console.log(JSON.stringify(props.list));

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
          <Task
            descriptionOfTask="faça 10 minutos de meditação"
            professionalName="Mateus Raimundo"
            professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
            titleOfTask="Meditação top"
          />
          <Task
            descriptionOfTask="faça 10 minutos de meditação"
            professionalName="Mateus Raimundo"
            professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
            titleOfTask="Meditação top"
          />
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
