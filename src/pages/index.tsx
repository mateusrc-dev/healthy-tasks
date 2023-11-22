import {
  Body,
  Button,
  Header,
  ImageContainer,
  Input,
  LoginContainer,
  TextContainer,
} from "../styles/pages/home";
import { FaHeartPulse } from "react-icons/fa6";
import selectGif from "../assets/select_gif.gif";
import userNull from "../assets/user_null.gif";
import professional from "../assets/professional.gif";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [stateUser, setStateUser] = useState<string | null>(null);

  function handleStateUser(user: string) {
    if (user === stateUser) {
      setStateUser(null);
    } else if (user !== stateUser) {
      if (user === "professional") {
        setStateUser("professional");
      } else {
        setStateUser("patient");
      }
    }
  }

  return (
    <>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <Body>
        <LoginContainer>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ position: "relative" }}>
              {stateUser === "professional" && (
                <Image
                  style={{ position: "absolute", right: "-7px", top: "-7px" }}
                  src={selectGif}
                  alt="isso é um gif bem doido"
                  width={25}
                  height={20}
                />
              )}
              <Button onClick={() => handleStateUser("professional")}>
                Profissional
              </Button>
            </div>
            <div style={{ position: "relative" }}>
              {stateUser === "patient" && (
                <Image
                  style={{ position: "absolute", right: "-7px", top: "-7px" }}
                  src={selectGif}
                  alt="isso é um gif bem doido"
                  width={25}
                  height={20}
                />
              )}
              <Button onClick={() => handleStateUser("patient")}>
                Paciente
              </Button>
            </div>
          </div>

          <Input
            placeholder="E-mail"
            type="email"
            disabled={stateUser === null}
            style={{ cursor: stateUser === null ? "not-allowed" : "auto" }}
          />

          <Input
            placeholder="Senha"
            type="password"
            disabled={stateUser === null}
            style={{ cursor: stateUser === null ? "not-allowed" : "auto" }}
          />

          <p></p>
          <p></p>
        </LoginContainer>
        <ImageContainer>
          {stateUser === null && (
            <Image
              priority={true}
              loading="eager"
              src={userNull}
              alt="isso é um gif bem doido"
              width={360}
              height={280}
            />
          )}
          {stateUser === "professional" && (
            <Image
              priority={true}
              loading="eager"
              src={professional}
              alt="isso é um gif bem doido"
              width={360}
              height={280}
            />
          )}
          {stateUser === null ? (
            <TextContainer>
              Escolha se você é paciente ou profissional!
            </TextContainer>
          ) : (
            <TextContainer>Agora preencha seus dados!</TextContainer>
          )}
        </ImageContainer>
      </Body>
    </>
  );
}
