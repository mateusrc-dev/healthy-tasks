import {
  Body,
  Button,
  Header,
  Input,
  LoginContainer,
} from "../styles/pages/home";
import { FaHeartPulse } from "react-icons/fa6";
import selectGif from "../assets/select_gif.gif";
import userNull from "../assets/user_null.gif";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [stateUser, setStateUser] = useState<string | null>(null);

  function handleStateUser(user: string) {
    if (user === stateUser) {
      setStateUser(null);
    } else if (user !== stateUser) {
      if (user === "profissional") {
        setStateUser("profissional");
      } else {
        setStateUser("paciente");
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
              {stateUser === "profissional" && (
                <Image
                  style={{ position: "absolute", right: "-7px", top: "-7px" }}
                  src={selectGif}
                  alt="isso é um gif bem doido"
                  width={25}
                  height={20}
                />
              )}
              <Button onClick={() => handleStateUser("profissional")}>
                Profissional
              </Button>
            </div>
            <div style={{ position: "relative" }}>
              {stateUser === "paciente" && (
                <Image
                  style={{ position: "absolute", right: "-7px", top: "-7px" }}
                  src={selectGif}
                  alt="isso é um gif bem doido"
                  width={25}
                  height={20}
                />
              )}
              <Button onClick={() => handleStateUser("paciente")}>
                Paciente
              </Button>
            </div>
          </div>

          <Input placeholder="E-mail" type="email" />

          <Input placeholder="Senha" type="password" />

          <p></p>
          <p></p>
        </LoginContainer>
        <Image
          src={userNull}
          alt="isso é um gif bem doido"
          width={320}
          height={280}
        />
      </Body>
    </>
  );
}
