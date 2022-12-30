import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../Pages/CadastroPage";
import { DashBoard } from "../Pages/DashBoard";
import { Login } from "../Pages/LoginPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};
