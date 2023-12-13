import { FaHeartPulse } from "react-icons/fa6";
import { Menu } from "../components/menu";
import {
  BodyFavoritesTasks,
  Container,
  ContentContainer,
  FavoriteTasksContainer,
  Header,
} from "../styles/pages/favoriteTasks";
import { Footer } from "../styles/pages/home";
import { FavoriteTask } from "../components/favoriteTask";

export default function FavoriteTasks() {
  return (
    <Container>
      <Header>
        <h1>healthy tasks</h1>
        <FaHeartPulse color="#fff" size={"30px"} />
      </Header>
      <BodyFavoritesTasks>
        <Menu pageSelected={"favoriteTasks"} />
        <ContentContainer>
          <h3
            style={{
              color: "#0b0cca",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "25px",
            }}
          >
            Atividades favoritas
          </h3>
          <FavoriteTasksContainer>
            <FavoriteTask
              description="atividade top"
              patientName="Junior"
              professionalName="Mateus Carvalho"
              title="Meditação top"
              professionalPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
              professionalSpecialization="Psicólogo"
            />
            <FavoriteTask
              description="atividade top"
              patientName="Junior"
              professionalName="Mateus Carvalho"
              title="Meditação top"
              professionalPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
              professionalSpecialization="Psicólogo"
            />
            <FavoriteTask
              description="atividade top"
              patientName="Junior"
              professionalName="Mateus Carvalho"
              title="Meditação top"
              professionalPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
              professionalSpecialization="Psicólogo"
            />
            <FavoriteTask
              description="atividade top"
              patientName="Junior"
              professionalName="Mateus Carvalho"
              title="Meditação top"
              professionalPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
              professionalSpecialization="Psicólogo"
            />
            <FavoriteTask
              description="atividade top"
              patientName="Junior"
              professionalName="Mateus Carvalho"
              title="Meditação top"
              professionalPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
              professionalSpecialization="Psicólogo"
            />
            <FavoriteTask
              description="atividade top"
              patientName="Junior"
              professionalName="Mateus Carvalho"
              title="Meditação top"
              professionalPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
              professionalSpecialization="Psicólogo"
            />
            <FavoriteTask
              description="atividade top"
              patientName="Junior"
              professionalName="Mateus Carvalho"
              title="Meditação top"
              professionalPhoto="https://avatars.githubusercontent.com/u/109779094?v=4"
              professionalSpecialization="Psicólogo"
            />
          </FavoriteTasksContainer>
        </ContentContainer>
      </BodyFavoritesTasks>
      <Footer>
        <p>© Todos os direitos reservados</p>
      </Footer>
    </Container>
  );
}
