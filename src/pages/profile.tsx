import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import {
  BestActivityContainerProfile,
  BodyProfile,
  CheckContainerProfile,
  Container,
  ContentContainerProfile,
  ImageUser,
  ProfessionalTag,
  ProfileTag,
} from "../styles/pages/profile";
import { Menu } from "../components/menu";
import { Header } from "../styles/pages/publicTasks";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Profile() {
  const [stateTextarea, setStateTextarea] = useState<string>("");
  const [stateView, setStateView] = useState<string>("public");

  function handleStateView() {
    if (stateView === "public") {
      setStateView("private");
    } else {
      setStateView("public");
    }
  }

  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyProfile>
        <Menu pageSelected="profile" />
        <ContentContainerProfile>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#1618f1",
            }}
          >
            Meu perfil <CgProfile />
          </h1>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "50px" }}
          >
            <ImageUser
              src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
              alt="sua foto"
              width={100}
              height={100}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "100%",
              }}
            >
              <input
                type="text"
                placeholder="Escreva aqui seu nome"
                style={{
                  width: "100%",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px",
                  background: "#1618f1",
                  color: "#fff",
                }}
              />
              <textarea
                placeholder="Escreva aqui sua queixa (no mínimo 100 caracteres)..."
                maxLength={1000}
                onChange={(e) => setStateTextarea(e.target.value)}
                value={stateTextarea}
                style={{
                  width: "100%",
                  height: "100px",
                  resize: "none",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px",
                  background: "#1618f1",
                  color: "#fff",
                }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <p
                  style={{
                    color: "#1618f1",
                    fontWeight: 700,
                    fontStyle: "italic",
                  }}
                >
                  Profissionais que sou acompanhado:
                </p>
                <ProfessionalTag>Psicólogo</ProfessionalTag>
                <ProfessionalTag>Psiquiatra</ProfessionalTag>
                <ProfessionalTag>Nutricionista</ProfessionalTag>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <BestActivityContainerProfile>
                  Atividade que mais me ajudou: meditação top (clique caso
                  desejar mudar)
                </BestActivityContainerProfile>
                <CheckContainerProfile>
                  <input type="checkbox" />
                  Atividade pública
                </CheckContainerProfile>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  background: "#0b0cca",
                  padding: "20px",
                  borderRadius: "10px",
                  borderWidth: "3px",
                  borderStyle: "outset",
                  borderColor: "#0606b7",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "16px", color: "#fff" }}>
                  Você deseja deixar seu perfil público ou privado?
                </p>
                {stateView === "public" ? (
                  <>
                    <ProfileTag onClick={handleStateView}>
                      Público <LiaEyeSolid />
                    </ProfileTag>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "#fff",
                        fontStyle: "italic",
                      }}
                    >
                      Caso você deixar seu perfil público, os outros usuários
                      poderão ver suas informações como nome e foto nas suas
                      atividades públicas e acessar seu perfil.
                    </p>
                  </>
                ) : (
                  <>
                    <ProfileTag onClick={handleStateView}>
                      Privado <FaRegEyeSlash />
                    </ProfileTag>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "#fff",
                        fontStyle: "italic",
                      }}
                    >
                      Caso você deixar seu perfil privado, suas atividades
                      públicas ficarão com seu nome e foto em anônimo e seu
                      perfil não poderá ser acessado pelos outros usuários.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </ContentContainerProfile>
      </BodyProfile>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}