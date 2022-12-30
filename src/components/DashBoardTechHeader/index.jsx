import { useContext } from "react";
import { DashBoardContext } from "../../contexts/contextDashBoard";
import { Container } from "./styled";

export const DashBoardTechHeader = () => {
  const { abrirModal } = useContext(DashBoardContext);

  return (
    <Container>
      <h2>Tecnologias</h2>
      <button onClick={abrirModal}>+</button>
    </Container>
  );
};
