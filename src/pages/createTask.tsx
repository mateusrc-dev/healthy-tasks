import { FaHeartPulse } from "react-icons/fa6";
import { Footer } from "../styles/pages/home";
import { Menu } from "../components/menu";
import { Header } from "../styles/pages/publicTasks";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  BodyCreateTask,
  Container,
  ContentContainerCreateTask,
} from "../styles/pages/createTask";
import { Button } from "../components/button";
import { Task } from "../components/task";

export default function CreateTask() {
  const [newTask, setNewTask] = useState<boolean>(false);

  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyCreateTask>
        <Menu pageSelected="null" />
        <ContentContainerCreateTask>
          <div>
            <h3>Novas atividades</h3>
            <Button clickEvent={() => setNewTask(!newTask)}>
              Criar nova atividade
            </Button>
            {newTask && (
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
                }}
              >
                <label
                  htmlFor="taskName"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  Nome da atividade
                  <input id="taskName" type="text" />
                </label>
                <label
                  htmlFor="taskDescription"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  Descrição da atividade
                  <input id="taskDescription" type="text" />
                </label>
                <label
                  htmlFor="emailPatient"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  Email do atividade
                  <input id="emailPatient" type="text" />
                </label>
                <label
                  htmlFor="emailPatient"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  Email do atividade
                  <input id="emailPatient" type="text" />
                </label>
                <label
                  htmlFor="limitTime"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  Prazo para realizar a atividade (clique no ícone abaixo para
                  abrir o calendário)
                  <input
                    id="limitTime"
                    type="date"
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
                </label>
              </div>
            )}
          </div>
          <div>
            <h3>Atividades criadas:</h3>
            <Task
              descriptionOfTask="faça 10 minutos de meditação"
              professionalName="Mateus Raimundo"
              professionalPhotoUrl="https://avatars.githubusercontent.com/u/109779094?v=4"
              titleOfTask="Meditação top"
            />
          </div>
        </ContentContainerCreateTask>
      </BodyCreateTask>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
