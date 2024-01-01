import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import {
  BestActivityContainerProfile,
  BodyProfile,
  ButtonSave,
  ButtonWithHover,
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
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LiaEyeSolid } from "react-icons/lia";
import { FaCheckCircle, FaRegEyeSlash } from "react-icons/fa";
import { PiRocketLaunchLight } from "react-icons/pi";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { Tooltip } from "../components/tooltip";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { useAuth } from "../hooks/auth";
import { api } from "../lib/axios";
import avatarPlaceholder from "../assets/avatar_placeholder.svg";
import { TaskType } from "./allTasks.page";
import { Button } from "../components/button";

interface MyProfessionals {
  name: string;
  userId: string;
}

export default function Profile() {
  const { user, updateProfilePatient, updateProfileProfessional } = useAuth();
  const [stateTextarea, setStateTextarea] = useState<string>(
    user?.complaint ? user?.complaint : ""
  );
  const [stateTextareaProfessional, setStateTextareaProfessional] =
    useState<string>(user?.description ? user?.description : "");
  const [stateInput, setStateInput] = useState<string>(user?.username);
  const [stateInputSpecialization, setStateInputSpecialization] =
    useState<string>(user?.specialization ? user?.specialization : "");
  const [stateView, setStateView] = useState<boolean>(
    user?.profilePublic ? user?.profilePublic : false
  );
  const [stateStatisticView, setStateStatisticView] = useState<boolean>(
    user?.statisticPublic ? user?.statisticPublic : false
  );
  const [click, setClick] = useState<boolean>(false);
  const [favoriteTask, setFavoriteTask] = useState<boolean>(false);
  const [addProfessionals, SetAddProfessionals] = useState<MyProfessionals[]>(
    []
  );
  const [inputNewProfessional, setInputNewProfessional] = useState<string>("");
  const avatarUrl = user?.photoUrl
    ? `${api.defaults.baseURL}/files/${user?.photoUrl}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  const [idBestTask, setIdBestTask] = useState<string>("");
  const [isPublicTask, setIsPublicTask] = useState<boolean>(false);
  const [dataTasksState, setDataTasksState] = useState<TaskType[]>([]);
  const [nameBestTask, setNameBestTask] = useState<string>("");
  const [carriedOutset, setCarriedOut] = useState<number>(0);

  function handleStateView() {
    if (stateView === true) {
      setStateView(false);
    } else {
      setStateView(true);
    }
  }

  function handleStateStatisticView() {
    if (stateStatisticView === true) {
      setStateStatisticView(false);
    } else {
      setStateStatisticView(true);
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

  async function handleNewProfessional() {
    if (inputNewProfessional.length === 0) {
      alert("Digite o nome do profissional!");
      return;
    } else if (
      addProfessionals?.find((item) => item.name === inputNewProfessional)
    ) {
      alert("Não é possível adicionar o mesmo profissional!");
      return;
    } else {
      try {
        await api.post("/myProfessionals/create", {
          name: inputNewProfessional,
          userId: user?.id,
        });

        SetAddProfessionals((prevState) => [
          ...prevState,
          { name: inputNewProfessional, userId: user?.id },
        ]);

        setInputNewProfessional("");
      } catch (error) {
        alert(`Não foi possível adicionar o profissional. ${error}`);
        return;
      }
    }
  }

  async function handleDeleteProfessional(professionalDeleted: string) {
    try {
      await api.delete(`/myProfessionals/delete/${professionalDeleted}`);

      const professionalsWithoutDeleted = addProfessionals?.filter(
        (item) => item.name !== professionalDeleted
      );
      SetAddProfessionals(professionalsWithoutDeleted);
    } catch (error) {
      alert(`Não foi possível deletar o profissional. ${error}`);
      return;
    }
  }

  async function handleCreateBestTask(taskId: string) {
    try {
      await api.post(
        `/tasks/selectBestTask/${taskId}/${user?.id}/${isPublicTask}`
      );

      setIdBestTask(taskId);
      alert("Atividade preferida salva com sucesso!");
    } catch (error) {
      alert(`Não foi possível salvar a atividade favorita. ${error}`);
      return;
    }
  }

  async function handleUpdatePatient() {
    await updateProfilePatient(
      stateInput,
      stateTextarea,
      stateView,
      stateStatisticView,
      avatarFile,
      user?.id
    );
  }

  console.log(avatarFile);

  async function handleUpdateProfessional() {
    await updateProfileProfessional(
      stateInput,
      stateInputSpecialization,
      stateTextareaProfessional,
      avatarFile,
      user?.id
    );
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL?.createObjectURL(file);
    setAvatar(imagePreview);
  }

  useEffect(() => {
    async function handleFindMyProfessionals() {
      try {
        const response = await api.get(
          `/myProfessionals/getMyProfessionals/${user?.id}`
        );

        SetAddProfessionals(response?.data);
      } catch (error) {
        alert(`Não foi buscar os profissionais do usuário. ${error}`);
      }
    }

    async function handleGetTasks() {
      try {
        const response = await api.get(
          `/tasks/getAllTasksByEmail/${user?.email}/`
        );

        setDataTasksState(response?.data);
      } catch (error) {
        alert(`Não foi possível buscar as atividades. ${error}`);
        return;
      }
    }

    async function handleGetBestTask() {
      try {
        const response = await api.get(`/tasks/getBestTask/${user?.id}/`);

        setIdBestTask(response?.data?.taskId);
        setIsPublicTask(response?.data?.isPublic);
        setNameBestTask(response?.data?.bestTask?.title);
      } catch (error) {
        alert(`Não foi possível buscar a melhor atividade. ${error}`);
        return;
      }
    }

    handleGetBestTask();
    handleGetTasks();
    handleFindMyProfessionals();
  }, [user]);

  useEffect(() => {
    function handleResultTasksCarriedOut() {
      for (let i = 0; i < dataTasksState.length; i += 1) {
        if (dataTasksState[i].carriedOut === true) {
          setCarriedOut((state) => state + 1);
        }
      }
    }
    handleResultTasksCarriedOut();
  }, [dataTasksState]);

  return (
    <Container>
      <div
        id="modal"
        className={click ? "modal" : "none"}
        onClick={handleOutsideClick}
      >
        <div className={"modalContent"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "20px", width: "420px" }}>
              Procure por sua atividade preferida:
            </h1>
            <CheckContainerProfile>
              <input
                type="checkbox"
                onChange={() => setIsPublicTask(!isPublicTask)}
                checked={isPublicTask}
              />
              Atividade pública
            </CheckContainerProfile>
            <Button clickEvent={() => handleCreateBestTask(idBestTask)}>
              Salvar
            </Button>
            <ButtonWithHover onClick={handleClick} title="fechar">
              <IoIosCloseCircle
                size={50}
                color={"#fff"}
                style={{ cursor: "pointer" }}
              />
            </ButtonWithHover>
          </div>
          <div className="tasksContainer">
            {dataTasksState.map((item) => (
              <div className="taskChooseContainer" key={item.id}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  {/*<ImageProfessional
                  src={"https://avatars.githubusercontent.com/u/109779094?v=4"}
                  alt="foto do profissional"
                  width={100}
                  height={100}
                />*/}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <p style={{ fontSize: "12px", fontStyle: "italic" }}>
                      {item.user.username}
                    </p>
                    <ProfileTag>{item.user.specialization}</ProfileTag>
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
                    <p style={{ fontSize: "12px" }}>{item.title}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "20px", fontStyle: "italic" }}>
                      Descrição:
                    </h3>
                    <p style={{ fontSize: "12px" }}>{item.description}</p>
                  </div>
                </div>
                {item.id === idBestTask ? (
                  <Tooltip
                    icon={true}
                    clickEvent={handleFavoriteTask}
                    content="Este item está selecionado e vai ficar visível no seu perfil como sua atividade favorita, clique caso deseje retirar a seleção."
                  >
                    <FaCheckCircle
                      color={"#96ffa0"}
                      size={50}
                      onClick={() => setIdBestTask(item.id)}
                    />{" "}
                  </Tooltip>
                ) : (
                  <Tooltip
                    icon={true}
                    clickEvent={handleFavoriteTask}
                    content="Este item não está selecionado e não vai ser exibido no seu perfil como sua atividade favorita, clique caso deseje seleciona-lo."
                  >
                    <RiCheckboxBlankCircleFill
                      color={"#96ffa0"}
                      size={58}
                      onClick={() => setIdBestTask(item.id)}
                    />
                  </Tooltip>
                )}
              </div>
            ))}
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
          color={addProfessionals?.length !== 0 ? "colorPositive" : null}
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
          {user?.typeUser === "patient" &&
          stateInput?.length != 0 &&
          stateTextarea.length >= 100 &&
          addProfessionals?.length != 0 ? (
            <ButtonSave onClick={handleUpdatePatient}>
              Salvar informações <TfiSave />
            </ButtonSave>
          ) : null}
          {user?.typeUser === "professional" &&
          stateInputSpecialization.length != 0 &&
          stateInput.length != 0 &&
          stateTextareaProfessional.length >= 100 ? (
            <ButtonSave onClick={handleUpdateProfessional}>
              Salvar informações <TfiSave />
            </ButtonSave>
          ) : null}
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "50px" }}
          >
            {/*<div style={{ position: "relative" }}>
             <ImageUser src={avatar} alt="sua foto" width={200} height={200} />
              <label
                htmlFor="avatar"
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "100px",
                  bottom: "-20px",
                  right: "-20px",
                  background: "#0b0cca",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "100%",
                }}
              >
                <input
                  id="avatar"
                  type="file"
                  onChange={handleChangeAvatar}
                  style={{ display: "none" }}
                />
                <MdPhotoSizeSelectActual size={50} color="#fff" />
              </label>
            </div>*/}
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
                    resize: "none",
                  }}
                />
              </div>
              {user?.typeUser === "professional" && (
                <div style={{ position: "relative" }}>
                  {stateInputSpecialization && (
                    <TextInformation color={"normal"}>
                      Sua especialização
                    </TextInformation>
                  )}
                  <textarea
                    placeholder="Escreva aqui sua especialização"
                    onChange={(e) =>
                      setStateInputSpecialization(e.target.value)
                    }
                    value={stateInputSpecialization}
                    rows={1}
                    style={{
                      width: "100%",
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px",
                      background: "#1618f1",
                      color: "#fff",
                      resize: "none",
                    }}
                  />
                </div>
              )}
              <div style={{ position: "relative" }}>
                {user?.typeUser === "patient" ? (
                  <>
                    {stateTextarea && (
                      <TextInformation
                        color={
                          stateTextarea.length >= 100
                            ? "alertPositive"
                            : "alert"
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
                  </>
                ) : (
                  <>
                    {stateTextareaProfessional && (
                      <TextInformation
                        color={
                          stateTextareaProfessional.length >= 100
                            ? "alertPositive"
                            : "alert"
                        }
                      >
                        Sua descrição (no mínimo 100 caracteres)
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
                      {stateTextareaProfessional.length} | 1000
                    </p>
                    <textarea
                      placeholder="Escreva aqui sua descrição profissional (no mínimo 100 caracteres)..."
                      maxLength={1000}
                      onChange={(e) =>
                        setStateTextareaProfessional(e.target.value)
                      }
                      value={stateTextareaProfessional}
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
                  </>
                )}
              </div>
              {user?.typeUser === "patient" && (
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
                  {addProfessionals?.map((professional) => (
                    <div
                      key={professional.name}
                      style={{ position: "relative" }}
                    >
                      <ProfessionalTag>{professional.name}</ProfessionalTag>
                      <ButtonWithHover
                        onClick={() =>
                          handleDeleteProfessional(professional.name)
                        }
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
              )}
              {user?.typeUser === "patient" && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <BestActivityContainerProfile onClick={handleClick}>
                    Atividade que mais me ajudou: {nameBestTask} (clique caso
                    desejar mudar)
                  </BestActivityContainerProfile>
                </div>
              )}
              {user?.typeUser === "patient" && (
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
                  <p
                    style={{ fontWeight: 700, fontSize: "16px", color: "#fff" }}
                  >
                    Você deseja deixar seu perfil público ou privado?
                  </p>
                  {stateView === true ? (
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
              )}
              {user?.typeUser === "patient" && (
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
                      Total de atividades: {dataTasksState?.length}
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        fontSize: "22px",
                      }}
                    >
                      Atividades realizadas dentro do prazo: {carriedOutset}
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
                    {Number(
                      (carriedOutset / dataTasksState.length) * 100
                    ).toFixed(1)}{" "}
                    %
                  </p>
                  {stateStatisticView === true ? (
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
                    {user?.profileForce === null ? 0 : user?.profileForce} força{" "}
                    <PiRocketLaunchLight />
                  </StrengthContainer>
                </StatisticContainer>
              )}
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
