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
import { useSpring, animated, Controller } from "react-spring";

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
  const [stateMotivation, setStateMotivation] = useState<boolean>(false);
  const [stateSumMotivation, setStateSumMotivation] = useState<number>(20);

  const animationProps = useSpring({
    to: async (next, cancel) => {
      await next({ transform: "translateY(-100px)", color: "red" });
      await next({ transform: "translateY(0px)", color: "#fff" });
    },
    //reset: animate, // Resetar a animação ao clicar novamente
  });

  function handleStateView() {
    console.log("clicou");
    if (stateView === "public") {
      setStateView("private");
    } else {
      setStateView("public");
    }
  }

  function handleMotivationState() {
    if (!stateMotivation) {
      setAnimate(!animate);
      setStateSumMotivation((prevState) => prevState + 1);
    } else {
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
            <Tag onClick={() => handleStateView()}>
              Público <LiaEyeSolid />
            </Tag>
          ) : (
            <Tag onClick={() => handleStateView()}>
              Privado <FaRegEyeSlash />
            </Tag>
          )}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
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
              {stateSumMotivation}
            </div>
            <ButtonOfMotivation onClick={handleMotivationState}>
              Força{" "}
              <animated.div style={animationProps}>
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
