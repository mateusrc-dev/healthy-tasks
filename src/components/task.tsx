import {
  ButtonOfMotivation,
  CheckContainer,
  Description,
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

  const animationProps = useSpring({
    to: async (next, cancel) => {
      await next({
        transform: "translateY(-20px) translateX(20px) scale(4)",
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
        transform: "translateY(20px) translateX(20px) scale(4)",
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
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
        </div>
        <Description>{descriptionOfTask}</Description>
      </div>
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
