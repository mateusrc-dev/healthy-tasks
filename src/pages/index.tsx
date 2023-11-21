import { Header } from "../styles/pages/home";
import { FaHeartPulse } from "react-icons/fa6";

export default function Home() {
  return (
    <Header>
      <h1>healthy tasks</h1>
      <FaHeartPulse color="#fff" size={"30px"} />
    </Header>
  );
}
