import { useContext } from "react";
import { Link } from "react-router-dom";
import { DashBoardContext } from "../../contexts/contextDashBoard";
import { Header } from "./styled";

export const DashBoardHeader = () => {
  const { logout } = useContext(DashBoardContext);
  return (
    <Header>
      <h1>Kenzie Hub</h1>
      <Link onClick={logout} to={"/"}>
        Sair
      </Link>
    </Header>
  );
};
