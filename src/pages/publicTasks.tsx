import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import {
  BodyOfPublicTasks,
  Container,
  ContentContainer,
  Header,
} from "../styles/pages/publicTasks";
import { Task } from "../components/task";
import { Menu } from "../components/menu";

export default function PublicTasks() {
  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyOfPublicTasks>
        <Menu pageSelected="publicTasks" />
        <ContentContainer>
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
        </ContentContainer>
      </BodyOfPublicTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
