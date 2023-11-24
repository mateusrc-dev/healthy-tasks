import Image from "next/image";
import frame from "../assets/frame.gif";
import {
  ButtonOfMotivation,
  Description,
  Name,
  Photo,
  Profile,
  Tag,
  TaskContainer,
  Title,
} from "../styles/components/TaskForSignIn";
import { Comment } from "./comment";
import { LiaEyeSolid } from "react-icons/lia";
import { PiRocketLaunchLight } from "react-icons/pi";

type Props = {
  titleOfTask: string;
  descriptionOfTask: string;
  professionalPhotoUrl: string;
  professionalName: string;
};

export function TaskForSignIn({
  descriptionOfTask,
  professionalName,
  professionalPhotoUrl,
  titleOfTask,
}: Props) {
  return (
    <TaskContainer>
      <div style={{ position: "relative" }}>
        <Image
          src={frame}
          alt="foto do profissional"
          width={140}
          height={140}
          style={{ position: "absolute", left: "-15px", top: "-15px" }}
        />
        <Profile>
          <Photo
            src={professionalPhotoUrl}
            alt="foto do profissional"
            width={100}
            height={100}
          />
          <Name>Dr. {professionalName}</Name>
        </Profile>
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Title>{titleOfTask}</Title>
          <Tag>
            Público <LiaEyeSolid />
          </Tag>
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
