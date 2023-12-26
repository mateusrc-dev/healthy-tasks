import Image from "next/image";
import {
  ButtonWithHover,
  FavoriteTaskContainer,
} from "../styles/components/favoriteTask";
import { Tag } from "../styles/components/comment";
import { BsHeartFill } from "react-icons/bs";
import { PiTrashFill } from "react-icons/pi";

type Props = {
  title: string;
  description: string;
  professionalPhoto: string;
  professionalName: string;
  professionalSpecialization: string;
  onEvent: (id: string) => void;
  favoriteId: string;
};

export function FavoriteTask({
  description,
  professionalName,
  professionalPhoto,
  professionalSpecialization,
  title,
  onEvent,
  favoriteId,
}: Props) {
  return (
    <FavoriteTaskContainer
      onClick={() => onEvent(favoriteId)}
      title="Clique para excluir dos favoritos"
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          zIndex: 2,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src={professionalPhoto}
            alt="foto do profissional"
            width={100}
            height={100}
            style={{
              borderRadius: "100%",
              borderWidth: "3px",
              borderStyle: "groove",
              borderColor: "#fff",
            }}
          />
          <Tag>{professionalName}</Tag>
          <Tag>{professionalSpecialization}</Tag>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontStyle: "italic",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            {title}
          </h3>
          <p style={{ textAlign: "left", paddingRight: "20px" }}>
            {description}
          </p>
        </div>
      </div>
      <BsHeartFill
        size={200}
        style={{
          position: "absolute",
          zIndex: 1,
          top: 10,
          left: 200,
          color: "rgba(1, 1, 1, 0.5)",
        }}
      />
      <ButtonWithHover>
        <PiTrashFill size={60} color="#ff194b" />
      </ButtonWithHover>
    </FavoriteTaskContainer>
  );
}
