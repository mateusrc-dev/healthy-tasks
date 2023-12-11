import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import { Menu } from "../components/menu";
import { Header } from "../styles/pages/publicTasks";
import { useState } from "react";
import {
  BodyCreateTask,
  Container,
  ContentContainerCreateTask,
  TasksCreatedContainer,
} from "../styles/pages/createTask";
import { Button } from "../components/button";
import { Task } from "../components/task";

export default function CreateTask() {
  const [newTask, setNewTask] = useState<boolean>(false);
  const [stateTextarea, setStateTextarea] = useState<string>("");
  const [stateTime, setStateTime] = useState<string>("");
  const [stateDate, setStateDate] = useState<string>("");
  const [stateName, setStateName] = useState<string>("");
  const [stateEmail, setStateEmail] = useState<string>("");

  console.log(stateTextarea);

  function handleNewTask() {
    setNewTask(!newTask);
    setStateTime("");
    setStateDate("");
    setStateName("");
    setStateEmail("");
    setStateTextarea("");
  }

  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyCreateTask>
        <Menu pageSelected="null" />
        <ContentContainerCreateTask>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Button clickEvent={() => handleNewTask()}>
              {!newTask ? "Criar nova atividade" : "Cancelar"}
            </Button>
            {stateTime.length !== 0 &&
            stateDate.length !== 0 &&
            stateName.length !== 0 &&
            stateTextarea.length >= 100 &&
            newTask &&
            stateEmail.length !== 0 ? (
              <Button>Pronto</Button>
            ) : null}
          </div>
          {newTask ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                borderWidth: "3px",
                borderColor: "#1112de",
                borderStyle: "outset",
                padding: "20px",
                borderRadius: "20px",
                width: "100%",
              }}
            >
              <div>
                <label
                  htmlFor="taskName"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    color: "#0b0cca",
                    fontStyle: "italic",
                    fontWeight: 700,
                    gap: "5px",
                    marginBottom: "15px",
                  }}
                >
                  Nome da atividade
                  <input
                    id="taskName"
                    type="text"
                    onChange={(e) => setStateName(e.target.value)}
                    style={{
                      borderWidth: "4px",
                      borderRadius: "10px",
                      borderColor: "#0b0cca",
                      color: "#0b0cca",
                      fontSize: "16px",
                      fontWeight: 700,
                      padding: "10px",
                      width: "100%",
                    }}
                  />
                </label>
                <label
                  htmlFor="taskDescription"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    color: "#0b0cca",
                    fontStyle: "italic",
                    fontWeight: 700,
                    gap: "5px",
                    marginBottom: "15px",
                    position: "relative",
                  }}
                >
                  Descrição da atividade
                  <textarea
                    id="taskDescription"
                    placeholder="Escreva a descrição da sua atividade (no mínimo 100 caracteres)..."
                    maxLength={1000}
                    onChange={(e) => setStateTextarea(e.target.value)}
                    value={stateTextarea}
                    style={{
                      width: "100%",
                      height: "100px",
                      resize: "none",
                      borderWidth: "4px",
                      borderRadius: "10px",
                      borderColor: "#0b0cca",
                      color: "#0b0cca",
                      borderStyle: "outset",
                      fontSize: "16px",
                      fontWeight: 700,
                      padding: "10px",
                    }}
                  />
                  <p
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "10px",
                    }}
                  >
                    {stateTextarea.length} | 100
                  </p>
                </label>
                <label
                  htmlFor="emailPatient"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    color: "#0b0cca",
                    fontStyle: "italic",
                    fontWeight: 700,
                    gap: "5px",
                    marginBottom: "15px",
                  }}
                >
                  Email do paciente
                  <input
                    id="emailPatient"
                    type="text"
                    onChange={(e) => setStateEmail(e.target.value)}
                    style={{
                      borderWidth: "4px",
                      borderRadius: "10px",
                      borderColor: "#0b0cca",
                      color: "#0b0cca",
                      fontSize: "16px",
                      fontWeight: 700,
                      padding: "10px",
                      width: "100%",
                    }}
                  />
                </label>
                <label
                  htmlFor="limitTime"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    color: "#0b0cca",
                    fontStyle: "italic",
                    fontWeight: 700,
                    gap: "5px",
                    marginBottom: "15px",
                  }}
                >
                  Prazo para realizar a atividade (clique no ícone abaixo para
                  abrir o calendário)
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <input
                      id="limitTime"
                      type="date"
                      onChange={(e) => setStateDate(e.target.value)}
                      style={{
                        borderWidth: "4px",
                        borderRadius: "10px",
                        borderColor: "#0b0cca",
                        color: "#0b0cca",
                        fontSize: "16px",
                        fontWeight: 700,
                        padding: "10px",
                      }}
                    />
                    <input
                      id="limitTime"
                      type="time"
                      onChange={(e) => setStateTime(e.target.value)}
                      style={{
                        borderWidth: "4px",
                        borderRadius: "10px",
                        borderColor: "#0b0cca",
                        color: "#0b0cca",
                        fontSize: "16px",
                        fontWeight: 700,
                        padding: "10px",
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>
          ) : (
            <TasksCreatedContainer>
              <h3
                style={{
                  color: "#0b0cca",
                  fontSize: "30px",
                  fontStyle: "italic",
                }}
              >
                Atividades criadas:
              </h3>
              <Task
                descriptionOfTask="faça 10 minutos de meditação"
                professionalName="Mateus Raimundo"
                professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                titleOfTask="Meditação top"
              />
              <Task
                descriptionOfTask="faça 10 minutos de meditação"
                professionalName="Mateus Raimundo"
                professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                titleOfTask="Meditação top"
              />
              <Task
                descriptionOfTask="faça 10 minutos de meditação"
                professionalName="Mateus Raimundo"
                professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
                titleOfTask="Meditação top"
              />
            </TasksCreatedContainer>
          )}
        </ContentContainerCreateTask>
      </BodyCreateTask>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
