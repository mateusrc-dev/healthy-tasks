import {
  Body,
  Button,
  Container,
  Footer,
  Header,
  ImageContainer,
  Input,
  LinkContainer,
  LoginContainer,
  MessageContainer,
  TaskAnimate,
  TextContainer,
} from "../styles/pages/home";
import { FaHeartPulse } from "react-icons/fa6";
import selectGif from "../assets/select_gif.gif";
import userNull from "../assets/user_null.gif";
import professional from "../assets/professional.gif";
import patient from "../assets/patient.gif";
import arrow from "../assets/arrow.gif";
import notebook from "../assets/notebook.gif";
import Image from "next/image";
import { useState } from "react";
import { Button as ButtonComponent } from "../components/button";
import light from "../assets/light.gif";
import { FaDoorOpen } from "react-icons/fa";
import { Task } from "../components/task";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import PublicTasks from "./publicTasks";

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
      setPasswordChange("");
      setEmailChange("");
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
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <Body>
        <LoginContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
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
              {passwordChange.length >= 6 && emailChange.length !== 0 ? (
                <Image
                  priority={true}
                  style={{ position: "absolute", left: 0, top: "-55px" }}
                  loading="eager"
                  src={light}
                  alt="isso é um gif bem doido"
                  width={360}
                  height={360}
                />
              ) : null}
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
                <TextContainer>Insira seu email!</TextContainer>
              ) : null}
              {statePassword &&
              (passwordChange.length < 6 || emailChange.length === 0) ? (
                <TextContainer>
                  Insira sua senha, no mínimo 6 caracteres! ;)
                </TextContainer>
              ) : null}
              {passwordChange.length >= 6 && emailChange.length !== 0 ? (
                <TextContainer>
                  Agora você está pronto para começar! :)
                </TextContainer>
              ) : null}
            </ImageContainer>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ position: "relative" }}>
                  {stateUser === "professional" && (
                    <Image
                      style={{
                        position: "absolute",
                        right: "-7px",
                        top: "-7px",
                      }}
                      src={selectGif}
                      alt="isso é um gif bem doido"
                      width={35}
                      height={30}
                    />
                  )}
                  <Button onClick={() => handleStateUser("professional")}>
                    Profissional
                  </Button>
                </div>
                <div style={{ position: "relative" }}>
                  {stateUser === "patient" && (
                    <Image
                      style={{
                        position: "absolute",
                        right: "-7px",
                        top: "-7px",
                      }}
                      src={selectGif}
                      alt="isso é um gif bem doido"
                      width={35}
                      height={30}
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
                  value={emailChange}
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
                  value={passwordChange}
                  type="password"
                  disabled={stateUser === null}
                  style={{
                    cursor: stateUser === null ? "not-allowed" : "auto",
                    width: "100%",
                  }}
                />
              </div>
              {passwordChange.length >= 6 && emailChange.length !== 0 ? (
                <ButtonComponent>
                  Entrar <FaDoorOpen size="25px" />
                </ButtonComponent>
              ) : null}
              {stateUser === null && (
                <LinkContainer>Ainda não tenho conta.</LinkContainer>
              )}
            </div>
          </div>
          {stateUser === "professional" && (
            <MessageContainer>
              Como profissional você pode criar atividade para seus pacientes,
              acompanhar como está o desempenho deles, receber feedbacks das
              atividades do seu paciente ou de outros usuários caso o paciente
              permitir que a atividade seja pública.
            </MessageContainer>
          )}
          {stateUser === "patient" && (
            <MessageContainer>
              Como paciente você pode visualizar as suas atividades de saúde
              recomendadas por seus profissionais da saúde. Você pode deixar
              suas atividades públicas para outras pessoas visualizarem e lhe
              motivarem. Pode também visualizar as atividades de outros
              usuários.
            </MessageContainer>
          )}
        </LoginContainer>
        <div style={{ position: "relative", width: "800px", height: "700px" }}>
          <Image
            src={notebook}
            style={{ position: "absolute", zIndex: 1, top: "0px" }}
            alt="isso é um gif bem doido"
            width={830}
            height={630}
          />
          <TaskAnimate>
            <div style={{ transform: "perspective(800px) rotateX(15deg)" }}>
              <PublicTasks />
            </div>
          </TaskAnimate>
          <Swiper
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              justifyContent: "center",
              background: "rgb(0,0,0,0.4)",
              width: "490px",
              color: "#ffff",
              fontWeight: 700,
              fontSize: "14px",
              transform: "perspective(400px) rotateX(15deg)",
              position: "absolute",
              zIndex: 0,
              top: "315px",
              left: "215px",
            }}
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
          >
            <SwiperSlide>
              Visualize as atividades que seu profissional da saúde criou para
              você!
            </SwiperSlide>
            <SwiperSlide>
              Torne público suas atividades para os outros usuários lhe
              motivarem!
            </SwiperSlide>
            <SwiperSlide>
              Acompanhe as atividades públicas de outros usuários!
            </SwiperSlide>
            <SwiperSlide>
              Seja acompanhado(a) pelos profissionais de saúde de outros
              usuários através das atividades deles!
            </SwiperSlide>
          </Swiper>
        </div>
      </Body>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
