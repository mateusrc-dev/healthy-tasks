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
import patient from "../assets/patient.gif";
import arrow from "../assets/arrow.gif";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [stateUser, setStateUser] = useState<string | null>(null);
  const [statePassword, setStatePassword] = useState<boolean | null>(null);
  const [stateEmail, setStateEmail] = useState<boolean | null>(null);
  const [passwordChange, setPasswordChange] = useState<string>("");
  const [emailChange, setEmailChange] = useState<string>("");

  function handleStateUser(user: string) {
    if (user === stateUser) {
      setStateUser(null);
      setStateEmail(false);
      setStatePassword(false);
    } else if (user !== stateUser) {
      if (user === "professional") {
        setStateUser("professional");
      } else {
        setStateUser("patient");
      }
    }
  }

  function handleFocusPassword() {
    setStatePassword(true);
    setStateEmail(false);
  }

  function handleFocusEmail() {
    setStatePassword(false);
    setStateEmail(true);
  }

  return (
    <>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <Body>
        <LoginContainer>
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
            {stateUser === "patient" && (
              <Image
                priority={true}
                loading="eager"
                src={patient}
                alt="isso é um gif bem doido"
                width={360}
                height={280}
              />
            )}
            {stateUser === null && (
              <TextContainer>
                Escolha se você é paciente ou profissional!
              </TextContainer>
            )}
            {stateUser !== null && !stateEmail && !statePassword ? (
              <TextContainer>Agora preencha seus dados!</TextContainer>
            ) : null}
            {stateEmail &&
            (passwordChange.length < 6 || emailChange.length === 0) ? (
              <TextContainer>Agora insira seu email!</TextContainer>
            ) : null}
            {statePassword &&
            (passwordChange.length < 6 || emailChange.length === 0) ? (
              <TextContainer>
                Agora insira sua senha, no mínimo 6 caracteres! ;)
              </TextContainer>
            ) : null}
            {passwordChange.length >= 6 && emailChange.length !== 0 ? (
              <TextContainer>
                Agora você está pronto para começar! :)
              </TextContainer>
            ) : null}
          </ImageContainer>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
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
            <div style={{ display: "flex", position: "relative" }}>
              {stateEmail && (
                <Image
                  style={{ position: "absolute", left: "-30px", top: "7px" }}
                  src={arrow}
                  alt="isso é um gif bem doido"
                  width={25}
                  height={20}
                />
              )}
              <Input
                onFocus={handleFocusEmail}
                onChange={(e) => setEmailChange(e.target.value)}
                placeholder="E-mail"
                type="email"
                disabled={stateUser === null}
                style={{
                  cursor: stateUser === null ? "not-allowed" : "auto",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              {statePassword && (
                <Image
                  style={{ position: "absolute", left: "-30px", top: "7px" }}
                  src={arrow}
                  alt="isso é um gif bem doido"
                  width={25}
                  height={20}
                />
              )}
              <Input
                onFocus={handleFocusPassword}
                onChange={(e) => setPasswordChange(e.target.value)}
                placeholder="Senha"
                type="password"
                disabled={stateUser === null}
                style={{
                  cursor: stateUser === null ? "not-allowed" : "auto",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </LoginContainer>
      </Body>
    </>
  );
}
