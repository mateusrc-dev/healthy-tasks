import Image from "next/image";
import frame from "../assets/frame.gif";
import {
  Description,
  Name,
  Photo,
  Profile,
  TaskContainer,
  Title,
} from "../styles/components/TaskForSignIn";
import { Comment } from "./comment";

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
        <Title>{titleOfTask}</Title>
        <Description>{descriptionOfTask}</Description>
      </div>
      <Comment
        text="muito massa a atividade, amei"
        userName="Roberto"
        userPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
      />
    </TaskContainer>
  );
}
