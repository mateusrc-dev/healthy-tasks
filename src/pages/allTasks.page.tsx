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
import { useState } from "react";

export default function AllTasks() {
  const [stateStatistic, _setStateStatistic] = useState<boolean>(false);

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
                color={stateStatistic ? "colorPositive" : "colorNegative"}
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
                  color={stateStatistic ? "positiveColor" : "negativeColor"}
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
                      Total de atividades: 10
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: "22px",
                      }}
                    >
                      Atividades realizadas dentro do prazo:{" "}
                      {stateStatistic ? "7" : "3"}
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
                    {stateStatistic ? "70%" : "30%"}
                  </p>
                </StatisticContainer>
                <StatisticContainer
                  color={stateStatistic ? "positiveColor" : "negativeColor"}
                >
                  {stateStatistic ? (
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
