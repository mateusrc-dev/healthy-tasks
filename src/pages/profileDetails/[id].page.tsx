import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../../styles/pages/home";
import { Menu } from "../../components/menu";
import { Header } from "../../styles/pages/publicTasks";
import { useEffect, useState } from "react";
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
import { api } from "../../lib/axios";

interface UserProps {
  complaint: string | null;
  created_at: Date;
  description: string | null;
  email: string;
  id: string;
  password: string;
  photoUrl: string | null;
  profileForce: string | null;
  profilePublic: string | null;
  specialization: string | null;
  statisticPublic: string | null;
  typeUser: string;
  updatedAt: Date;
  username: string;
}

interface MyProfessionals {
  name: string;
  userId: string;
}

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

export default function ProfileDetails(props) {
  const [stateStatisticView, setStateStatisticView] =
    useState<string>("public");
  const [countState, setCountState] = useState<number>(0);
  const [state, setState] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserProps>();
  const [addProfessionals, setAddProfessionals] = useState<MyProfessionals[]>(
    []
  );
  const [dataTasksState, setDataTasksState] = useState<TaskType[]>([]);
  const [carriedOutset, setCarriedOut] = useState<number>(0);
  const { query } = useRouter();
  const dataQuery = query;
  const userId = dataQuery.id;
  console.log(JSON.stringify(userId));
  //console.log(JSON.stringify(props.list));

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

  useEffect(() => {
    async function handleFetchUserById() {
      try {
        const response = await api.get(`/users/getUserById/${userId}`);

        setUserDetails(response.data);
      } catch (error) {
        alert(`Não foi possível buscar os detalhes do usuário. ${error}`);
      }
    }

    async function handleFindMyProfessionals() {
      try {
        const response = await api.get(
          `/myProfessionals/getMyProfessionals/${userId}`
        );

        setAddProfessionals(response?.data);
      } catch (error) {
        alert(`Não foi buscar os meus profissionais criar o usuário. ${error}`);
      }
    }

    handleFindMyProfessionals();
    handleFetchUserById();
  }, [userId]);

  useEffect(() => {
    async function handleGetTasks() {
      try {
        const response = await api.get(
          `/tasks/getAllTasksByEmail/${userDetails?.email}/`
        );

        setDataTasksState(response?.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades. ${error}`);
        return;
      }
    }

    handleGetTasks();
  }, [userDetails]);

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
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyProfileDetails>
        <Menu pageSelected="null" />
        <ContentContainerProfileDetails>
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            {/*<ImageUser
              width={300}
              height={300}
              src={`${api.defaults.baseURL}/files/${userDetails?.photoUrl}`}
              alt="imagem do usuário"
            />*/}
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
                  {userDetails?.username} <CgProfile />
                </h1>
                <TypeUserTag>
                  {userDetails?.typeUser === "patient"
                    ? "paciente"
                    : "profissional"}
                </TypeUserTag>
                {userDetails?.typeUser === "professional" && (
                  <TypeUserTag>{userDetails?.specialization}</TypeUserTag>
                )}
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
                  {userDetails?.typeUser === "patient" ? "Queixa" : "Descrição"}
                </h2>
                {userDetails?.typeUser === "patient" ? (
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#1618f1",
                      fontStyle: "italic",
                    }}
                  >
                    {userDetails?.complaint}
                  </p>
                ) : (
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#1618f1",
                      fontStyle: "italic",
                    }}
                  >
                    {userDetails?.description}
                  </p>
                )}
              </div>
              {userDetails?.typeUser === "patient" && (
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
                  {addProfessionals.map((item) => (
                    <TypeUserTag key={item?.name}>{item?.name}</TypeUserTag>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}
          >
            {/*{userDetails?.typeUser === "patient" && (
              <div style={{ position: "relative" }}>
                <BestTask>
                  Atividade que mais gostei{" "}
                  <CgCheck size={40} color="#96ffa0" />
                </BestTask>
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
                  publicTasksPage={true}
                />
              </div>
            )}*/}
            {userDetails?.typeUser === "patient" &&
            userDetails?.statisticPublic ? (
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
                  {`${(carriedOutset / dataTasksState?.length) * 100}%`}
                </p>
                {userDetails?.statisticPublic ? (
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
                  {userDetails?.profileForce === null
                    ? 0
                    : userDetails?.profileForce}{" "}
                  força{" "}
                  <animated.div
                    style={animate ? animationProps : animationProps2}
                  >
                    <PiRocketLaunchLight />{" "}
                  </animated.div>
                </StrengthContainer>
              </StatisticContainer>
            ) : null}
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
