import { FaHeartPulse } from "react-icons/fa6";
import {
  BodyAllTasks,
  ButtonMenuBetween,
  ButtonMenuFirst,
  ButtonMenuLast,
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

export default function AllTasks() {
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
              <ButtonMenuLast href="#page-3">
                Atividades não concluídas
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
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={false}
                  marginInline={true}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={false}
                  marginInline={true}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={false}
                  marginInline={true}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={false}
                  marginInline={true}
                />
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
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={true}
                  marginInline={true}
                  stateTimeTask={false}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={true}
                  marginInline={true}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={true}
                  marginInline={true}
                  stateTimeTask={false}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={true}
                  marginInline={true}
                />
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
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={false}
                  marginInline={true}
                  stateTimeTask={false}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={false}
                  marginInline={true}
                  stateTimeTask={false}
                />
                <Task
                  descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                  professionalName="Fernando Noronha"
                  professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                  titleOfTask="meditação top"
                  checkTask={false}
                  marginInline={true}
                  stateTimeTask={false}
                />
              </ContainerForSpecificTasks>
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
