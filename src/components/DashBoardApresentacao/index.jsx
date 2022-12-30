import { useContext } from "react";

import { LoginContext } from "../../contexts/contextLogin";
import { ContainerUm } from "./styled";

export const DashBoardApresentacao = () => {
  const { user } = useContext(LoginContext);
  return (
    <ContainerUm>
      <h2>Olá, {user.name}!</h2>
      <span>{user.course_module}</span>
    </ContainerUm>
  );
};
