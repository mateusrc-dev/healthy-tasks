import {
  CommentContainer,
  CommentText,
  Name,
  Photo,
  Profile,
  Tag,
} from "../styles/components/comment";
import { BsPerson } from "react-icons/bs";

type Props = {
  text: string;
  userPhoto: string;
  userName: string;
  patient?: boolean;
};

export function Comment({ text, userName, userPhoto, patient = false }: Props) {
  return (
    <CommentContainer>
      <Profile>
        <Photo src={userPhoto} alt="foto do usuário" width={70} height={70} />
      </Profile>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Name>{userName}</Name>
          {patient && (
            <Tag>
              Paciente do dr. Mateus Carvalho <BsPerson />
            </Tag>
          )}
        </div>
        <CommentText>{text}</CommentText>
      </div>
    </CommentContainer>
  );
}
