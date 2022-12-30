import { createContext, useContext, useState } from "react";

import { LoginContext } from "../contextLogin";

export const DashBoardContext = createContext({});

export const DashBoardProvider = ({ children }) => {
  const { user } = useContext(LoginContext);

  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };

  const logout = () => {
    localStorage.clear();
  };

  return (
    <DashBoardContext.Provider
      value={{
        fecharModal,
        logout,
        user,
        modal,
        abrirModal,
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};
