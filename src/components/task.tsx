import {
  ButtonOfMotivation,
  CheckContainer,
  CreateCommentContainer,
  Description,
  FavoriteIcon,
  Name,
  Photo,
  Profile,
  Tag,
  TaskContainer,
  TaskRecipient,
  TextInformation,
  TimeForFinishTaskContainerLeft,
  TimeForFinishTaskContainerRight,
  Title,
} from "../styles/components/task";
import { Comment } from "./comment";
import { LiaEyeSolid } from "react-icons/lia";
import { PiRocketLaunchLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useSpring, animated } from "react-spring";
import { TfiWrite } from "react-icons/tfi";
import { Button } from "./button";
import { BsCheck } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Link from "next/link";
import { api } from "../lib/axios";
import dayjs from "dayjs";
import { useAuth } from "../hooks/auth";

type Props = {
  titleOfTask: string;
  descriptionOfTask: string;
  professionalPhotoUrl: string;
  professionalName: string;
  taskId: string;
  userEmailOfTask: string;
  isRenderInProfile?: boolean;
  stateTimeTask?: boolean;
  checkTask?: boolean;
  marginInline?: boolean;
  taskIsForOtherUser?: boolean;
  deadline: Date;
  isTaskPublic: boolean;
  forceTask: number;
  publicTasksPage?: boolean;
  onDisplay?: boolean;
  showComments?: boolean;
  renderInMyRecentTasks?: boolean;
  handleDeadlineState?: (deadlineState: boolean) => void;
};

interface DataCommentProps {
  description: string;
  id: string;
  taskId: string;
  user: {
    username: string;
    photoUrl: string;
    email: string;
    id: string;
  };
  userId: string;
}

export function Task({
  descriptionOfTask,
  professionalName,
  professionalPhotoUrl,
  titleOfTask,
  isRenderInProfile = true,
  stateTimeTask = true,
  checkTask = false,
  marginInline = false,
  taskIsForOtherUser = false,
  taskId,
  userEmailOfTask,
  deadline,
  isTaskPublic,
  forceTask,
  publicTasksPage = false,
  onDisplay = true,
  showComments = true,
  renderInMyRecentTasks = false,
  handleDeadlineState = () => {},
}: Props) {
  const [stateView, setStateView] = useState<boolean>(isTaskPublic);
  const [animate, setAnimate] = useState(false);
  const [stateMotivation, setStateMotivation] = useState<boolean>(true);
  const [stateSumMotivation, setStateSumMotivation] = useState<number>(
    forceTask === null ? 0 : forceTask
  );
  const [stateComment, setStateComment] = useState<boolean>(false);
  const [stateTextarea, setStateTextarea] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(false);
  const [stateCheckTask, setStateCheckTask] = useState<boolean>(checkTask);
  const [dataComments, setDataComments] = useState<DataCommentProps[]>([]);
  const [state, setState] = useState<boolean>(false);
  const [favoriteId, setFavoriteId] = useState<string>();
  const [recipient, setRecipient] = useState<{
    photoUrl: string;
    username: string;
  }>();
  const { user } = useAuth();

  const dateNow = new Date();
  const date1 = dayjs(dateNow);
  const date2 = dayjs(deadline);
  //console.log(date2.diff(date1, "hours") > 0);
  //const stateDeadline = date2.diff(date1, "hours") > 0;

  useEffect(() => {
    function handleDeadline() {
      handleDeadlineState(date2.diff(date1, "hours") > 0);
    } // <- enviar esse dado para o componente acima

    handleDeadline();
  }, [date1, date2, handleDeadlineState]);

  async function handleCheckTask() {
    setStateCheckTask(!stateCheckTask);
    try {
      await api.patch("/tasks/updateCarriedOut", {
        carriedOut: !stateCheckTask,
        taskId,
      });
    } catch (error) {
      alert(
        `Não foi possível atualizar o status de atividade realizada. ${error}`
      );
      return;
    }
  }

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
    reset: animate, // Resetar a animação ao clicar novamente
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
    reset: animate, // Resetar a animação ao clicar novamente
  });

  const animationProps3 = useSpring({
    to: async (next, cancel) => {
      await next({
        transform: "scale(1.2)",
        fontWeight: 700,
        color: "#ff194b",
      });
      await next({
        transform: "scale(1)",
        fontWeight: 400,
        color: "#fff",
      });
    },
    reset: animate, // Resetar a animação ao clicar novamente
  });

  const animationProps4 = useSpring({
    to: async (next, cancel) => {
      await next({
        transform: "scale(1.2)",
        fontWeight: 700,
        color: "#77f2de",
      });
      await next({
        transform: "scale(1)",
        fontWeight: 400,
        color: "#fff",
      });
    },
    reset: animate, // Resetar a animação ao clicar novamente
  });

  async function handleStateView() {
    if (publicTasksPage) {
      return;
    }

    if (stateView === true) {
      setStateView(false);
      try {
        await api.patch("/tasks/updateIsTaskPublic", {
          isTaskPublic: false,
          taskId,
        });
      } catch (error) {
        alert(
          `Não foi possível atualizar o status de visibilidade da atividade. ${error}`
        );
        return;
      }
    } else {
      setStateView(true);
      try {
        await api.patch("/tasks/updateIsTaskPublic", {
          isTaskPublic: true,
          taskId,
        });
      } catch (error) {
        alert(
          `Não foi possível atualizar o status de visibilidade da atividade. ${error}`
        );
        return;
      }
    }
  }

  async function handleMotivationState() {
    if (stateMotivation === true) {
      setAnimate(!animate);
      setStateSumMotivation((prevState) => prevState + 1);
      try {
        await api.patch("/tasks/updateForceTask", {
          forceTask: stateSumMotivation + 1,
          taskId,
        });
      } catch (error) {
        alert(`Não foi possível atualizar o status de força. ${error}`);
      }
    } else if (stateMotivation === false) {
      setAnimate(!animate);
      setStateSumMotivation((prevState) => prevState - 1);
      try {
        await api.patch("/tasks/updateForceTask", {
          forceTask: stateSumMotivation - 1,
          taskId,
        });
      } catch (error) {
        alert(`Não foi possível atualizar o status de força. ${error}`);
      }
    }
    setStateMotivation((prevState) => !prevState);
  }

  async function handleCreateComment() {
    try {
      await api.post("/comments/create", {
        description: stateTextarea,
        userId: user?.id,
        taskId,
      });

      setStateTextarea("");
      setStateComment(!stateComment);
    } catch (error) {
      alert(`Não foi possível criar um novo comentário. ${error}`);
    }
  }

  async function handleDeleteComment(commentId: string) {
    try {
      await api.delete(`/comments/delete/${commentId}`);
      setState(!state);
    } catch (error) {
      alert(`Não foi possível deletar o comentário. ${error}`);
    }
  }

  async function handleChangeStateFavoriteTask() {
    if (!favorite) {
      try {
        const response = await api.post(`/favoritesTasks/create`, {
          taskId,
          userId: user?.id,
        });

        setFavorite(!favorite);
        setFavoriteId(response.data.id);
      } catch (error) {
        alert(`Não foi possível favoritar. ${error}`);
      }
    } else {
      try {
        await api.delete(`/favoritesTasks/delete/${favoriteId}`);

        setFavorite(!favorite);
      } catch (error) {
        alert(`Não foi possível desfavoritar. ${error}`);
      }
      setFavorite(!favorite);
    }
  }

  useEffect(() => {
    async function handleFetchCommentsOfTask() {
      try {
        const response = await api.get(
          `/comments/getCommentByTaskId/${taskId}`
        );

        setDataComments(response?.data);
      } catch (error) {
        alert(`Não foi possível buscar pelos comentários da tarefa. ${error}`);
      }
    }

    async function handleFindFavoriteTask() {
      try {
        const response = await api.get(
          `/favoritesTasks/getFavoriteTask/${user?.id}/${taskId}`
        );

        if (response?.data?.length !== 0) {
          setFavorite(true);
          setFavoriteId(response?.data[0].id);
        } else {
          setFavorite(false);
        }
      } catch (error) {
        alert(`Não foi possível buscar se a atividade é favorita. ${error}`);
      }
    }

    async function handleFetchUserByEmail() {
      try {
        const response = await api.get(
          `/users/getUserByEmail/${userEmailOfTask}`
        );

        setRecipient(response.data);
      } catch (error) {
        alert(`Não foi possível buscar o destinatário. ${error}`);
      }
    }

    handleFetchUserByEmail();
    handleFindFavoriteTask();
    handleFetchCommentsOfTask();
  }, [taskId, stateComment, state, user, userEmailOfTask]);

  return (
    <TaskContainer
      margin={marginInline ? "elementWithMarginInline" : null}
      display={onDisplay ? null : "displayNone"}
    >
      <Profile>
        <Link href={`/profileDetails/1`}>
          <Photo
            src={professionalPhotoUrl}
            alt="foto do profissional"
            width={100}
            height={100}
          />
        </Link>
        <Link href={`/profileDetails/1`}>
          <Name>Dr. {professionalName}</Name>
        </Link>
        <Tag>Psicólogo</Tag>
        {isRenderInProfile ? (
          stateTimeTask ? (
            <CheckContainer color={stateCheckTask ? "colorPositive" : null}>
              <input
                type="checkbox"
                checked={stateCheckTask}
                onChange={handleCheckTask}
                disabled={publicTasksPage}
              />
              <p>Atividade realizada</p>
            </CheckContainer>
          ) : (
            <CheckContainer
              color={stateCheckTask ? "colorPositive" : "colorNegative"}
            >
              <input
                type="checkbox"
                checked={stateCheckTask}
                onChange={handleCheckTask}
              />
              <p>
                {stateCheckTask
                  ? "Atividade realizada"
                  : "Atividade não realizada"}
              </p>
            </CheckContainer>
          )
        ) : null}
        {isRenderInProfile ? (
          date2.diff(date1, "hours") > 0 ? (
            <div style={{ display: "flex" }}>
              <TimeForFinishTaskContainerLeft>
                Prazo para finalizar:
              </TimeForFinishTaskContainerLeft>
              <TimeForFinishTaskContainerRight>
                {date2.diff(date1, "hours") < 0
                  ? 0
                  : date2.diff(date1, "hours")}{" "}
                horas
              </TimeForFinishTaskContainerRight>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <TimeForFinishTaskContainerLeft color={"colorNegative"}>
                Prazo para finalizar
              </TimeForFinishTaskContainerLeft>
              <TimeForFinishTaskContainerRight color={"colorNegative"}>
                {date2.diff(date1, "hours") < 0
                  ? 0
                  : date2.diff(date1, "hours")}{" "}
                horas
              </TimeForFinishTaskContainerRight>
            </div>
          )
        ) : null}
      </Profile>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Title>{titleOfTask}</Title>
          {taskIsForOtherUser && (
            <Link href={`/profileDetails/1`}>
              <TaskRecipient>
                <h3
                  style={{
                    fontStyle: "italic",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  para
                </h3>
                <Photo
                  src={`${api.defaults.baseURL}/files/${recipient?.photoUrl}`}
                  alt="foto do paciente"
                  width={50}
                  height={50}
                />
                <h3
                  style={{
                    fontStyle: "italic",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  {recipient?.username}
                </h3>
              </TaskRecipient>
            </Link>
          )}
          {stateView === true ? (
            <Tag onClick={handleStateView}>
              Público <LiaEyeSolid />
            </Tag>
          ) : (
            <Tag onClick={handleStateView}>
              Privado <FaRegEyeSlash />
            </Tag>
          )}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#138fe8",
                color: "#ffff",
                borderRadius: "100%",
                padding: "5px",
                width: "20px",
                height: "20px",
                top: "-10px",
                right: "-10px",
                fontSize: "10px",
              }}
            >
              <animated.div
                style={!animate ? animationProps3 : animationProps4}
              >
                {stateSumMotivation}
              </animated.div>
            </div>
            <ButtonOfMotivation onClick={handleMotivationState}>
              <animated.div
                style={!animate ? animationProps3 : animationProps4}
              >
                Força{" "}
              </animated.div>
              <animated.div style={animate ? animationProps : animationProps2}>
                <PiRocketLaunchLight />
              </animated.div>
            </ButtonOfMotivation>
          </div>
          {showComments && (
            <Tag onClick={() => setStateComment(!stateComment)}>
              Comentar <TfiWrite size={20} />
            </Tag>
          )}
          <div>
            {favorite ? (
              <div>
                <FavoriteIcon>
                  <FaHeart
                    onClick={handleChangeStateFavoriteTask}
                    size={25}
                    color="#ff194b"
                  />
                </FavoriteIcon>
              </div>
            ) : (
              <FaRegHeart
                onClick={handleChangeStateFavoriteTask}
                size={25}
                color="#ff194b"
                style={{ cursor: "pointer", position: "relative", zIndex: 2 }}
              />
            )}
          </div>
        </div>
        <Description>{descriptionOfTask}</Description>
      </div>
      {stateComment && (
        <CreateCommentContainer>
          <textarea
            placeholder="Escreva aqui seu comentário (no mínimo 100 caracteres)..."
            maxLength={1000}
            onChange={(e) => setStateTextarea(e.target.value)}
            style={{
              width: "100%",
              height: "100px",
              resize: "none",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
            }}
          />
          {stateTextarea.length !== 0 && (
            <TextInformation>
              Escreva aqui seu comentário (no mínimo 100 caracteres)...
            </TextInformation>
          )}
          <div
            style={{
              color: "#138fe8",
              fontSize: "10px",
              position: "absolute",
              right: 65,
              bottom: 65,
              fontStyle: "italic",
            }}
          >{`${stateTextarea.length} | 1000`}</div>
          {stateTextarea.length >= 100 && (
            <Button position={true} clickEvent={handleCreateComment}>
              Pronto <BsCheck />
            </Button>
          )}
          <IoCloseCircle
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
              color: "#fff",
            }}
            size={25}
            title="Fechar!"
            onClick={() => setStateComment(!stateComment)}
          />
        </CreateCommentContainer>
      )}
      {showComments &&
        dataComments?.map((item) => (
          <Comment
            commentUserId={item.user.id}
            key={item.id}
            text={item.description}
            userName={item.user.username}
            userPhoto={`${api.defaults.baseURL}/files/${item.user.photoUrl}`}
            patient={item.user.email === userEmailOfTask}
            renderInMyRecentTasks={renderInMyRecentTasks}
            commentId={item.id}
            handleDeleteComment={handleDeleteComment}
            professionalName={professionalName}
          />
        ))}
    </TaskContainer>
  );
}
