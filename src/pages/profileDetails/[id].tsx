import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../../styles/pages/home";
import { Menu } from "../../components/menu";
import { Header } from "../../styles/pages/publicTasks";
import { useState } from "react";
import { CgCheck, CgProfile } from "react-icons/cg";
import {
  BestTask,
  BodyProfileDetails,
  Container,
  ContentContainerProfileDetails,
  ImageUser,
  StatisticContainer,
  StrengthContainer,
  TypeUserTag,
} from "../../styles/pages/profileDetails";
import { Task } from "../../components/task";
import { PiRocketLaunchLight } from "react-icons/pi";
import { FaRegEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import { Tooltip } from "../../components/tooltip";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

export default function ProfileDetails(props) {
  const [stateStatisticView, setStateStatisticView] =
    useState<string>("public");
  const [countState, setCountState] = useState<number>(0);
  const [state, setState] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);
  const { query } = useRouter();
  console.log(JSON.stringify(query));
  console.log(JSON.stringify(props.list));

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
      setAnimate(!animate);
      setCountState((prevState) => prevState + 1);
      setState(false);
    } else {
      setAnimate(!animate);
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
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <ImageUser
              width={300}
              height={300}
              src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
              alt="imagem do usuário"
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
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
                <TypeUserTag>Paciente</TypeUserTag>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  borderWidth: "3px",
                  borderColor: "#1112de",
                  borderStyle: "outset",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#1618f1",
                  }}
                >
                  Queixa
                </h2>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#1618f1",
                    fontStyle: "italic",
                  }}
                >
                  Estou ficando cada vez mais doido e não sei o que fazer mais,
                  estou ficando cada vez mais perdido dentro das minhas
                  paranóias, peço ajuda, socorro, psicólogos, psiquiatras,
                  fisioterapeutas, qualquer um, SOCORROOOOO!!!!!
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  borderWidth: "3px",
                  borderColor: "#1112de",
                  borderStyle: "outset",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#1618f1",
                  }}
                >
                  Acompanhado por:
                </h2>
                <TypeUserTag>Psicólogo</TypeUserTag>
                <TypeUserTag>Psiquiatra</TypeUserTag>
                <TypeUserTag>Fisioterapeuta</TypeUserTag>
                <TypeUserTag>Nutricionista</TypeUserTag>
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}
          >
            <div style={{ position: "relative" }}>
              <BestTask>
                Atividade que mais gostei <CgCheck size={40} color="#96ffa0" />
              </BestTask>
              <Task
                descriptionOfTask="medite durante 10 minutos parado sem se mexer sem pensar sem sentir nada, o objetivo é virar uma pedra estável inquebrável"
                professionalName="Fernando Noronha"
                professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                titleOfTask="meditação top"
                isRenderInProfile={false}
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
                {countState} força{" "}
                <animated.div
                  style={animate ? animationProps : animationProps2}
                >
                  <PiRocketLaunchLight />{" "}
                </animated.div>
              </StrengthContainer>
            </StatisticContainer>
          </div>
        </ContentContainerProfileDetails>
      </BodyProfileDetails>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // quando temos páginas estáticas que possuem parametros, precisamos retornar um getStaticPaths que é um método que retorna esses parâmetros
    paths: [
      //{ params: { id: "prod_NBzSSHOrjnd4kD" } }, // aqui vamos retornar os parâmetros dentro desse array - temos que deixar enxuto porque pode pesar na hora de executar a build - podemos colocar apenas os produtos mais vendidos, mais acessados - podemos deixar vazio e deixar o fallback gerar as páginas
    ],
    fallback: true, // com true, as páginas dos produtos que não passamos nos paths o next vai tentar pegar o id dessa página e passar para o método getStaticProps - só que vai demorar um tempo para esses dados carregarem... precisamos colocar um loading - usando blocking como valor não precisar colocar loading
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  return {
    props: {
      id: params.id,
    },
  };
};
