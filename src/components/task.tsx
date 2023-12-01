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
  Title,
} from "../styles/components/task";
import { Comment } from "./comment";
import { LiaEyeSolid } from "react-icons/lia";
import { PiRocketLaunchLight } from "react-icons/pi";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useSpring, animated } from "react-spring";
import { TfiWrite } from "react-icons/tfi";
import { Button } from "./button";
import { BsCheck } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

type Props = {
  titleOfTask: string;
  descriptionOfTask: string;
  professionalPhotoUrl: string;
  professionalName: string;
};

export function Task({
  descriptionOfTask,
  professionalName,
  professionalPhotoUrl,
  titleOfTask,
}: Props) {
  const [stateView, setStateView] = useState<string>("public");
  const [animate, setAnimate] = useState(false);
  const [stateMotivation, setStateMotivation] = useState<boolean>(true);
  const [stateSumMotivation, setStateSumMotivation] = useState<number>(20);
  const [stateComment, setStateComment] = useState<boolean>(false);
  const [stateTextarea, setStateTextarea] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(false);

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
    //reset: animate, // Resetar a animação ao clicar novamente
  });

  const animationProps2 = useSpring({
    to: async (next, cancel) => {
      await next({
        transform: "translateY(40px) translateX(40px) scale(4)",
        color: "#ff194b",
      });
      await next({
        transform: "translateY(0px) translateX(0px) scale(1)",
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

  function handleStateView() {
    if (stateView === "public") {
      setStateView("private");
    } else {
      setStateView("public");
    }
  }

  function handleMotivationState() {
    if (stateMotivation === true) {
      setAnimate(!animate);
      setStateSumMotivation((prevState) => prevState + 1);
    } else if (stateMotivation === false) {
      setAnimate(!animate);
      setStateSumMotivation((prevState) => prevState - 1);
    }
    setStateMotivation((prevState) => !prevState);
  }

  return (
    <TaskContainer>
      <Profile>
        <Photo
          src={professionalPhotoUrl}
          alt="foto do profissional"
          width={100}
          height={100}
        />
        <Name>Dr. {professionalName}</Name>
        <Tag>Psicólogo</Tag>
        <CheckContainer>
          <input type="checkbox" />
          <p>Atividade realizada</p>
        </CheckContainer>
      </Profile>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Title>{titleOfTask}</Title>
          {stateView === "public" ? (
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
          <Tag onClick={() => setStateComment(!stateComment)}>
            Comentar <TfiWrite size={20} />
          </Tag>
          <div>
            {favorite ? (
              <div style={{ position: "absolute" }}>
                <FaHeart
                  onClick={() => setFavorite(!favorite)}
                  size={25}
                  color="#ff194b"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 2,
                    top: -14,
                  }}
                />
                <FavoriteIcon
                  style={{
                    position: "relative",
                    zIndex: 1,
                    top: -43.5,
                  }}
                >
                  <FaHeart size={25} color="#ff194b" />
                </FavoriteIcon>
              </div>
            ) : (
              <FaRegHeart
                onClick={() => setFavorite(!favorite)}
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
            <Button>
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
      <Comment
        text="muito massa a atividade, amei, você é incrível dr. Mateus 😍"
        userName="Roberto"
        userPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
        patient={true}
      />
      <Comment
        text="muito massa a atividade, fiquei com vontade de me consultar com o dr.Mateus"
        userName="Luiz"
        userPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
      />
    </TaskContainer>
  );
}
