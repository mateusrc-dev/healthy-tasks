import {
  Body,
  Container,
  Footer,
  Header,
  ImageContainer,
  Input,
  LinkContainer,
  LoginContainer,
  MessageContainer,
  TextContainer,
  WelcomeContainer,
} from "../styles/pages/home";
import { FaHeartPulse } from "react-icons/fa6";
import selectGif from "../assets/select_gif.gif";
import userNull from "../assets/user_null.gif";
import professional from "../assets/professional.gif";
import patient from "../assets/patient.gif";
import arrow from "../assets/arrow.gif";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Button as ButtonComponent } from "../components/button";
import light from "../assets/light.gif";
import { FaDoorOpen, FaPencilAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { MdNotStarted } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useRouter } from "next/router";
import { api } from "../lib/axios";
import { AxiosError } from "axios";
import { useAuth } from "../hooks/auth";

export default function Home() {
  const [stateUser, setStateUser] = useState<string | null>(null);
  const [statePassword, setStatePassword] = useState<boolean | null>(null);
  const [stateEmail, setStateEmail] = useState<boolean | null>(null);
  const [passwordChange, setPasswordChange] = useState<string>("");
  const [emailChange, setEmailChange] = useState<string>("");
  const [passwordChangeNewAccount, setPasswordChangeNewAccount] =
    useState<string>("");
  const [passwordConfirmChangeNewAccount, setPasswordConfirmChangeNewAccount] =
    useState<string>("");
  const [nameChangeNewAccount, setNameChangeNewAccount] = useState<string>("");
  const [emailChangeNewAccount, setEmailChangeNewAccount] =
    useState<string>("");
  const [makeLogin, setMakeLogin] = useState<boolean>(true);
  const [stateCreateAccount, setStateCreateAccount] = useState<boolean>(false);

  const { signIn, user } = useAuth();
  const router = useRouter();

  function validEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  }

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

  async function handleRegister() {
    try {
      await api.post("/users", {
        username: nameChangeNewAccount,
        email: emailChangeNewAccount,
        password: passwordChangeNewAccount,
        typeUser: "patient",
      });

      alert("Usuário criado com sucesso!");
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(
          `Não foi possível criar o usuário. ${error.response.data.message}`
        );
        return;
      }

      console.log(error);
    }
  }

  async function handleLogin() {
    try {
      signIn(emailChange, passwordChange);
    } catch (err) {
      alert("Não foi possível logar. Senha ou Email incorretos.");
    }
  }

  useEffect(() => {
    async function handleLoginChangePageUserPatient() {
      await router.push(`/myRecentTasks`);
    }

    async function handleLoginChangePageUserProfessional() {
      await router.push(`/publicTasks`);
    }

    if (user?.typeUser === "patient") {
      handleLoginChangePageUserPatient();
    } else if (user?.typeUser === "professional") {
      handleLoginChangePageUserProfessional();
    }
  }, [user, router]);

  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <Body>
        {makeLogin ? (
          <WelcomeContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <h3>Seja bem vindo(a)! 😊</h3>
              <p style={{ width: "300px", fontStyle: "italic" }}>
                Acompanhe suas atividades, compartilhe elas, aprenda com a
                atividades dos outros usuários! ➡️➡️➡️
              </p>
              <Button clickEvent={() => setMakeLogin(!makeLogin)}>
                Começar <MdNotStarted size={30} />
              </Button>
            </div>
          </WelcomeContainer>
        ) : (
          <LoginContainer>
            {stateCreateAccount ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                  }}
                >
                  <h3
                    style={{
                      color: "#3a89c9",
                      fontStyle: "italic",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    Preencha os dados da sua nova conta{" "}
                    <FaPencilAlt size={20} />
                  </h3>
                  <div style={{ position: "relative" }}>
                    {nameChangeNewAccount.length !== 0 ? (
                      <p
                        style={{
                          position: "absolute",
                          top: "-18px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#78f784",
                          fontWeight: 700,
                        }}
                      >
                        Pronto.
                      </p>
                    ) : null}
                    <Input
                      onChange={(e) => setNameChangeNewAccount(e.target.value)}
                      placeholder="Nome"
                      type="text"
                      value={nameChangeNewAccount}
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    {emailChangeNewAccount.length !== 0 &&
                    validEmail(emailChangeNewAccount) ? (
                      <p
                        style={{
                          position: "absolute",
                          top: "-18px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#78f784",
                          fontWeight: 700,
                        }}
                      >
                        Email válido.
                      </p>
                    ) : null}
                    {emailChangeNewAccount.length !== 0 &&
                    !validEmail(emailChangeNewAccount) ? (
                      <p
                        style={{
                          position: "absolute",
                          top: "-18px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#ff194b",
                          fontWeight: 700,
                        }}
                      >
                        Escreva um e-mail válido.
                      </p>
                    ) : null}
                    <Input
                      onChange={(e) => setEmailChangeNewAccount(e.target.value)}
                      placeholder="E-mail"
                      type="email"
                      value={emailChangeNewAccount}
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    {passwordChangeNewAccount.length < 6 &&
                    passwordChangeNewAccount.length !== 0 ? (
                      <p
                        style={{
                          position: "absolute",
                          top: "-18px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#ff194b",
                          fontWeight: 700,
                        }}
                      >
                        A senha tem que ter pelo menos 6 caracteres.
                      </p>
                    ) : null}
                    {passwordChangeNewAccount.length >= 6 ? (
                      <p
                        style={{
                          position: "absolute",
                          top: "-18px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#78f784",
                          fontWeight: 700,
                        }}
                      >
                        A senha possui pelo menos 6 caracteres.
                      </p>
                    ) : null}
                    <Input
                      onChange={(e) =>
                        setPasswordChangeNewAccount(e.target.value)
                      }
                      placeholder="Senha"
                      value={passwordChangeNewAccount}
                      type="password"
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    {passwordConfirmChangeNewAccount.length !== 0 &&
                    passwordConfirmChangeNewAccount !==
                      passwordChangeNewAccount ? (
                      <p
                        style={{
                          position: "absolute",
                          top: "-18px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#e8175d",
                          fontWeight: 700,
                        }}
                      >
                        A senha ainda não confere com a inserida acima.
                      </p>
                    ) : null}
                    {passwordConfirmChangeNewAccount.length !== 0 &&
                    passwordConfirmChangeNewAccount ===
                      passwordChangeNewAccount ? (
                      <p
                        style={{
                          position: "absolute",
                          top: "-18px",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#78f784",
                          fontWeight: 700,
                        }}
                      >
                        A senha está correta.
                      </p>
                    ) : null}
                    <Input
                      onChange={(e) =>
                        setPasswordConfirmChangeNewAccount(e.target.value)
                      }
                      placeholder="Confirmar senha"
                      value={passwordConfirmChangeNewAccount}
                      type="password"
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>

                  <ButtonComponent
                    clickEvent={handleRegister}
                    disabled={
                      passwordConfirmChangeNewAccount ===
                        passwordChangeNewAccount &&
                      passwordChangeNewAccount.length >= 6 &&
                      validEmail(emailChangeNewAccount)
                    }
                  >
                    Criar conta <CiCircleCheck size="25px" />
                  </ButtonComponent>

                  <LinkContainer
                    onClick={() => setStateCreateAccount(!stateCreateAccount)}
                  >
                    Retornar
                  </LinkContainer>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div style={{ position: "relative" }}>
                        {stateUser === "professional" ? (
                          <Button
                            selected={true}
                            clickEvent={() => handleStateUser("professional")}
                          >
                            Profissional
                          </Button>
                        ) : (
                          <Button
                            clickEvent={() => handleStateUser("professional")}
                          >
                            Profissional
                          </Button>
                        )}
                      </div>
                      <div style={{ position: "relative" }}>
                        {stateUser === "patient" ? (
                          <Button
                            selected={true}
                            clickEvent={() => handleStateUser("patient")}
                          >
                            Paciente
                          </Button>
                        ) : (
                          <Button clickEvent={() => handleStateUser("patient")}>
                            Paciente
                          </Button>
                        )}
                      </div>
                    </div>
                    <div style={{ display: "flex", position: "relative" }}>
                      {stateEmail && (
                        <Image
                          style={{
                            position: "absolute",
                            left: "-30px",
                            top: "7px",
                          }}
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
                          style={{
                            position: "absolute",
                            left: "-30px",
                            top: "7px",
                          }}
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
                    {passwordChange.length >= 6 && validEmail(emailChange) ? (
                      <ButtonComponent clickEvent={handleLogin}>
                        Entrar <FaDoorOpen size="25px" />
                      </ButtonComponent>
                    ) : null}
                    {stateUser === null && (
                      <LinkContainer
                        onClick={() =>
                          setStateCreateAccount(!stateCreateAccount)
                        }
                      >
                        Sou paciente e ainda não tenho conta.
                      </LinkContainer>
                    )}
                  </div>
                </div>
                {stateUser === "professional" && (
                  <MessageContainer>
                    Como profissional você pode criar atividade para seus
                    pacientes, acompanhar como está o desempenho deles, receber
                    feedbacks das atividades do seu paciente ou de outros
                    usuários caso o paciente permitir que a atividade seja
                    pública.
                  </MessageContainer>
                )}
                {stateUser === "patient" && (
                  <MessageContainer>
                    Como paciente você pode visualizar as suas atividades de
                    saúde recomendadas por seus profissionais da saúde. Você
                    pode deixar suas atividades públicas para outras pessoas
                    visualizarem e lhe motivarem. Pode também visualizar as
                    atividades de outros usuários.
                  </MessageContainer>
                )}
              </>
            )}
          </LoginContainer>
        )}
      </Body>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
