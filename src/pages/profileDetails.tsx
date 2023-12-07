import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import { Menu } from "../components/menu";
import { Header } from "../styles/pages/publicTasks";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import {
  BodyProfileDetails,
  Container,
  ContentContainerProfileDetails,
  ImageUser,
  StatisticContainer,
  StrengthContainer,
  TypeUserTag,
} from "../styles/pages/profileDetails";
import { Task } from "../components/task";
import { PiRocketLaunchLight } from "react-icons/pi";
import { FaRegEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import { Tooltip } from "../components/tooltip";
import { useSpring } from "react-spring";

export default function ProfessionalDetails() {
  const [stateStatisticView, setStateStatisticView] =
    useState<string>("public");
  const [countState, setCountState] = useState<number>(0);
  const [state, setState] = useState<boolean>(true);

  const animationProps = useSpring({
    to: async (next, cancel) => {
      await next({
        transform: "translateY(-40px) translateX(40px) scale(4)",
        color: "#77f2de",
      });
      await next({
        transform: "translateY(0px) translateX(0px) scale(1)",
        color: "#fff",
      });
    },
  });

  const animationProps2 = useSpring({
    to: async (next, cancel) => {
      await next({
        transform: "translateY(40px) translateX(40px) rotate(90deg) scale(4)",
        color: "#ff194b",
      });
      await next({
        transform: "translateY(0px) translateX(0px) rotate(0) scale(1)",
        color: "#fff",
      });
    },
  });

  function handleStateStatisticView() {
    if (stateStatisticView === "public") {
      setStateStatisticView("private");
    } else {
      setStateStatisticView("public");
    }
  }

  function handleCountState() {
    if (state) {
      setCountState((prevState) => prevState + 1);
      setState(false);
    } else {
      setCountState((prevState) => prevState - 1);
      setState(true);
    }
  }

  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyProfileDetails>
        <Menu pageSelected="null" />
        <ContentContainerProfileDetails>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#1618f1",
            }}
          >
            Mateus Carvalho <CgProfile />
          </h1>
          <ImageUser
            width={300}
            height={300}
            src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
            alt="imagem do usuário"
          />
          <TypeUserTag>Paciente</TypeUserTag>
          <h2>Queixa</h2>
          <p>
            Estou ficando cada vez mais doido e não sei o que fazer mais, estou
            ficando cada vez mais perdido dentro das minhas paranóias, peço
            ajuda, socorro, psicólogos, psiquiatras, fisioterapeutas, qualquer
            um, SOCORROOOOO!!!!!
          </p>
          <div>
            <h2>Acompanhado por:</h2>
            <TypeUserTag>Psicólogo</TypeUserTag>
            <TypeUserTag>Psiquiatra</TypeUserTag>
            <TypeUserTag>Fisioterapeuta</TypeUserTag>
            <TypeUserTag>Nutricionista</TypeUserTag>
          </div>
          <div>
            <h2>Atividade que mais gostei:</h2>
            <Task
              descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
              professionalName="Fernando Noronha"
              professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
              titleOfTask="meditação top"
            />
          </div>
          <StatisticContainer color={"positiveColor"}>
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
                Atividades realizadas dentro do prazo: 7
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
              70%
            </p>
            {stateStatisticView === "public" ? (
              <Tooltip
                content='Sua estatística vai ficar pública para os outros usuários no seu perfil e eles vão poder lhe motivar clicando em "força 🚀".'
                clickEvent={handleStateStatisticView}
              >
                Público <LiaEyeSolid />
              </Tooltip>
            ) : (
              <Tooltip
                content="Sua estatística vai ficar privada e os usuários não vão poder visualizar sua estatística no seu perfil."
                clickEvent={handleStateStatisticView}
              >
                Privado <FaRegEyeSlash />
              </Tooltip>
            )}

            <StrengthContainer onClick={handleCountState}>
              {countState} força <PiRocketLaunchLight />
            </StrengthContainer>
          </StatisticContainer>
        </ContentContainerProfileDetails>
      </BodyProfileDetails>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
