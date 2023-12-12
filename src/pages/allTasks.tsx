import { FaHeartPulse } from "react-icons/fa6";
import {
  BodyAllTasks,
  ContainerAllTasks,
  ContainerForSpecificTasks,
  ContentContainerAllTasks,
  HeaderAllTasks,
} from "../styles/pages/allTasks";
import { Menu } from "../components/menu";
import { Footer } from "../styles/pages/home";
import { Task } from "../components/task";

export default function AllTasks() {
  return (
    <ContainerAllTasks>
      <HeaderAllTasks>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </HeaderAllTasks>
      <BodyAllTasks>
        <Menu pageSelected="allTasks" />
        <ContentContainerAllTasks>
          <ContainerForSpecificTasks>
            <h3 style={{ position: "sticky", top: 0 }}>
              Atividades por concluir
            </h3>
            <Task
              descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
              professionalName="Fernando Noronha"
              professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
              titleOfTask="meditação top"
              checkTask={true}
            />
            <Task
              descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
              professionalName="Fernando Noronha"
              professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
              titleOfTask="meditação top"
              checkTask={true}
            />
            <Task
              descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
              professionalName="Fernando Noronha"
              professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
              titleOfTask="meditação top"
              checkTask={true}
            />
            <Task
              descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
              professionalName="Fernando Noronha"
              professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
              titleOfTask="meditação top"
              checkTask={true}
            />
          </ContainerForSpecificTasks>
          <ContainerForSpecificTasks>
            <h3>Atividades concluídas</h3>
          </ContainerForSpecificTasks>
          <ContainerForSpecificTasks>
            <h3>Atividades não concluídas</h3>
          </ContainerForSpecificTasks>
        </ContentContainerAllTasks>
      </BodyAllTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </ContainerAllTasks>
  );
}
