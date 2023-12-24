import Link from "next/link";
import {
  CommentContainer,
  CommentText,
  Name,
  Photo,
  Profile,
  Tag,
} from "../styles/components/comment";
import { BsPerson, BsTrash2Fill } from "react-icons/bs";
import { api } from "../lib/axios";

type Props = {
  text: string;
  userPhoto: string;
  userName: string;
  patient?: boolean;
  renderInMyRecentTasks?: boolean;
  commentId: string;
  handleDeleteComment: (commentId: string) => void;
};

export function Comment({
  text,
  userName,
  userPhoto,
  commentId,
  handleDeleteComment,
  patient = false,
  renderInMyRecentTasks = false,
}: Props) {
  return (
    <CommentContainer>
      <Link href={`profileDetails/1`}>
        <Profile>
          <Photo src={userPhoto} alt="foto do usuário" width={70} height={70} />
        </Profile>
      </Link>
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
          <Link href={`profileDetails/1`}>
            <Name>{userName}</Name>
          </Link>
          {patient && (
            <Tag>
              {renderInMyRecentTasks
                ? "Seu comentário"
                : "Paciente do dr. Mateus Carvalho"}{" "}
              <BsPerson />
            </Tag>
          )}
        </div>
        <CommentText>{text}</CommentText>
      </div>
      <button
        onClick={() => handleDeleteComment(commentId)}
        title="deletar"
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <BsTrash2Fill color={"#ff194b"} size={30} />
      </button>
    </CommentContainer>
  );
}
