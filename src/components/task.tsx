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
  const [stateMotivation, setStateMotivation] = useState<boolean>(false);
  const [stateSumMotivation, setStateSumMotivation] = useState<number>(20);

  function handleStateView() {
    console.log("clicou");
    if (stateView === "public") {
      setStateView("private");
    } else {
      setStateView("public");
    }
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
              10
            </div>
            <ButtonOfMotivation>
              Força <PiRocketLaunchLight />
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
