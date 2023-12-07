import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import {
  BestActivityContainerProfile,
  BodyProfile,
  ButtonSave,
  ButtonWithHover,
  ChangePhotoButton,
  CheckContainerProfile,
  Container,
  ContentContainerProfile,
  ImageProfessional,
  ImageUser,
  ProfessionalTag,
  ProfileTag,
  StatisticContainer,
  StrengthContainer,
  TextInformation,
  ToAddProfessional,
} from "../styles/pages/profile";
import { Menu } from "../components/menu";
import { Header } from "../styles/pages/publicTasks";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LiaEyeSolid } from "react-icons/lia";
import { FaCheckCircle, FaRegEyeSlash } from "react-icons/fa";
import { PiRocketLaunchLight } from "react-icons/pi";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { Tooltip } from "../components/tooltip";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";

export default function Profile() {
  const [stateTextarea, setStateTextarea] = useState<string>("");
  const [stateInput, setStateInput] = useState<string>("");
  const [stateView, setStateView] = useState<string>("public");
  const [stateStatisticView, setStateStatisticView] =
    useState<string>("public");
  const [click, setClick] = useState<boolean>(false);
  const [favoriteTask, setFavoriteTask] = useState<boolean>(false);
  const [addProfessionals, SetAddProfessionals] = useState<string[]>([
    "Psicólogo",
    "Psiquiatra",
  ]);
  const [inputNewProfessional, setInputNewProfessional] = useState<string>("");

  function handleStateView() {
    if (stateView === "public") {
      setStateView("private");
    } else {
      setStateView("public");
    }
  }

  function handleStateStatisticView() {
    if (stateStatisticView === "public") {
      setStateStatisticView("private");
    } else {
      setStateStatisticView("public");
    }
  }

  function handleFavoriteTask() {
    if (favoriteTask) {
      setFavoriteTask(false);
    } else {
      setFavoriteTask(true);
    }
  }

  function handleClick() {
    if (click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      handleClick();
    }
  };

  function handleNewProfessional() {
    if (inputNewProfessional.length === 0) {
      alert("Digite o nome do profissional!");
      return;
    } else if (addProfessionals.includes(inputNewProfessional)) {
      alert("Não é possível adicionar o mesmo profissional!");
      return;
    } else {
      SetAddProfessionals((prevState) => [...prevState, inputNewProfessional]);
      setInputNewProfessional("");
    }
  }

  function handleDeleteProfessional(professionalDeleted: string) {
    const professionalsWithoutProfessionalDeleted = addProfessionals.filter(
      (professional) => professional !== professionalDeleted
    );

    SetAddProfessionals(professionalsWithoutProfessionalDeleted);
  }

  return (
    <Container>
      <div
        id="modal"
        className={click ? "modal" : "none"}
        onClick={handleOutsideClick}
      >
        <div className={"modalContent"}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h1 style={{ fontSize: "20px", width: "420px" }}>
              Pesquise por sua atividade preferida:
            </h1>
            <input
              style={{
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                width: "100%",
              }}
              type="text"
            />
            <ButtonWithHover onClick={handleClick} title="fechar">
              <IoIosCloseCircle
                size={50}
                color={"#fff"}
                style={{ cursor: "pointer" }}
              />
            </ButtonWithHover>
          </div>
          <div className="tasksContainer">
            <div className="taskChooseContainer">
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <ImageProfessional
                  src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
                  alt="foto do profissional"
                  width={100}
                  height={100}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <p style={{ fontSize: "12px", fontStyle: "italic" }}>
                    Mateus Carvalho
                  </p>
                  <ProfileTag>Psicólogo</ProfileTag>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "20px", fontStyle: "italic" }}>
                    Título:
                  </h3>
                  <p style={{ fontSize: "12px" }}>Meditação top</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontStyle: "italic" }}>
                    Descrição:
                  </h3>
                  <p style={{ fontSize: "12px" }}>
                    preste atenção na respiração durante 10 minutos trazendo a
                    mente para o agora.
                  </p>
                </div>
              </div>
              <Tooltip
                icon={true}
                clickEvent={handleFavoriteTask}
                content="Este item está selecionado e vai ficar visível no seu perfil como sua atividade favorita, clique caso deseje retirar a seleção."
              >
                <FaCheckCircle color={"#96ffa0"} size={50} />{" "}
              </Tooltip>
            </div>
            <div className="taskChooseContainer">
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <ImageProfessional
                  src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
                  alt="foto do profissional"
                  width={100}
                  height={100}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <p style={{ fontSize: "12px", fontStyle: "italic" }}>
                    Mateus Carvalho
                  </p>
                  <ProfileTag>Psicólogo</ProfileTag>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "20px", fontStyle: "italic" }}>
                    Título:
                  </h3>
                  <p style={{ fontSize: "12px" }}>Meditação top</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontStyle: "italic" }}>
                    Descrição:
                  </h3>
                  <p style={{ fontSize: "12px" }}>
                    preste atenção na respiração durante 10 minutos trazendo a
                    mente para o agora.
                  </p>
                </div>
              </div>
              <Tooltip
                icon={true}
                clickEvent={handleFavoriteTask}
                content="Este item não está selecionado e não vai ser exibido no seu perfil como sua atividade favorita, clique caso deseje seleciona-lo."
              >
                <RiCheckboxBlankCircleFill color={"#96ffa0"} size={58} />
              </Tooltip>
            </div>
            <div className="taskChooseContainer">
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <ImageProfessional
                  src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
                  alt="foto do profissional"
                  width={100}
                  height={100}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <p style={{ fontSize: "12px", fontStyle: "italic" }}>
                    Mateus Carvalho
                  </p>
                  <ProfileTag>Psicólogo</ProfileTag>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "20px", fontStyle: "italic" }}>
                    Título:
                  </h3>
                  <p style={{ fontSize: "12px" }}>Meditação top</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "20px", fontStyle: "italic" }}>
                    Descrição:
                  </h3>
                  <p style={{ fontSize: "12px" }}>
                    preste atenção na respiração durante 10 minutos trazendo a
                    mente para o agora.
                  </p>
                </div>
              </div>
              <Tooltip
                icon={true}
                clickEvent={handleFavoriteTask}
                content="Este item não está selecionado e não vai ser exibido no seu perfil como sua atividade favorita, clique caso deseje seleciona-lo."
              >
                <RiCheckboxBlankCircleFill color={"#96ffa0"} size={58} />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyProfile>
        <Menu pageSelected="profile" />
        <ContentContainerProfile
          color={addProfessionals.length !== 0 ? "colorPositive" : null}
        >
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
            <div style={{ position: "relative" }}>
              <ImageUser
                src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
                alt="sua foto"
                width={200}
                height={200}
              />
              <ChangePhotoButton>
                <MdPhotoSizeSelectActual size={50} color="#fff" />
              </ChangePhotoButton>
              {stateInput.length != 0 &&
              stateTextarea.length >= 100 &&
              addProfessionals.length !== 0 ? (
                <ButtonSave>
                  Salvar informações <TfiSave />
                </ButtonSave>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "100%",
              }}
            >
              <div style={{ position: "relative" }}>
                {stateInput && (
                  <TextInformation color={"normal"}>Seu nome</TextInformation>
                )}
                <textarea
                  placeholder="Escreva aqui seu nome"
                  onChange={(e) => setStateInput(e.target.value)}
                  value={stateInput}
                  rows={1}
                  style={{
                    width: "100%",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px",
                    background: "#1618f1",
                    color: "#fff",
                  }}
                />
              </div>
              <div style={{ position: "relative" }}>
                {stateTextarea && (
                  <TextInformation
                    color={
                      stateTextarea.length >= 100 ? "alertPositive" : "alert"
                    }
                  >
                    Sua queixa (no mínimo 100 caracteres)
                  </TextInformation>
                )}
                <p
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#fff",
                    fontStyle: "italic",
                  }}
                >
                  {stateTextarea.length} | 1000
                </p>
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
              </div>
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
                {addProfessionals.map((professional) => (
                  <div key={professional} style={{ position: "relative" }}>
                    <ProfessionalTag>{professional}</ProfessionalTag>
                    <ButtonWithHover
                      onClick={() => handleDeleteProfessional(professional)}
                      style={{ position: "absolute", top: -10, right: -10 }}
                    >
                      <IoIosCloseCircle size={25} color="#3a89c9" />
                    </ButtonWithHover>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    placeholder="Adicione pelo menos um profissional."
                    value={inputNewProfessional}
                    onChange={(e) => setInputNewProfessional(e.target.value)}
                    style={{
                      width: "250px",
                      borderWidth: "2px",
                      borderRightWidth: "0px",
                      borderColor: "#1618f1",
                      padding: "9px",
                      borderRadius: "50px 0px 0px 50px",
                      background: "#138fe8",
                      color: "#fff",
                    }}
                  />
                  <ToAddProfessional onClick={handleNewProfessional}>
                    +
                  </ToAddProfessional>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <BestActivityContainerProfile onClick={handleClick}>
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
                  background: "#0606b7",
                  padding: "20px",
                  borderRadius: "10px",
                  borderWidth: "3px",
                  borderStyle: "outset",
                  borderColor: "#0b0cca",
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
              <StatisticContainer color={"positiveColor"}>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "22px",
                      marginBottom: "10px",
                    }}
                  >
                    Estatística:
                  </p>
                  <p
                    style={{
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "22px",
                    }}
                  >
                    Total de atividades: 10
                  </p>
                  <p
                    style={{
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "22px",
                    }}
                  >
                    Atividades realizadas dentro do prazo: 7
                  </p>
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "100px",
                    color: "rgba(255, 255, 255, 0.5)",
                    paddingRight: "140px",
                  }}
                >
                  70%
                </p>
                {stateStatisticView === "public" ? (
                  <Tooltip
                    content='Sua estatística vai ficar pública para os outros usuários no seu perfil e eles vão poder lhe motivar clicando em "força 🚀".'
                    clickEvent={handleStateStatisticView}
                  >
                    Público <LiaEyeSolid />
                  </Tooltip>
                ) : (
                  <Tooltip
                    content="Sua estatística vai ficar privada e os usuários não vão poder visualizar sua estatística no seu perfil."
                    clickEvent={handleStateStatisticView}
                  >
                    Privado <FaRegEyeSlash />
                  </Tooltip>
                )}

                <StrengthContainer>
                  33 força <PiRocketLaunchLight />
                </StrengthContainer>
              </StatisticContainer>
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
