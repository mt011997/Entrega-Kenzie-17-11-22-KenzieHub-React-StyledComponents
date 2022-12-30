import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { LoginContext } from "../contextLogin";

export const ModalDeleteContext = createContext({});

export const ModalDeleteProvider = ({ children }) => {
  const { setUser } = useContext(LoginContext);

  const [modalDelete, setModalDelete] = useState(false);
  const [tituloTec, setTituloTec] = useState("");
  const [idTec, setIdTec] = useState("");

  const abrirModalDelete = (tituloTec, idTec) => {
    setModalDelete(true);
    setTituloTec(tituloTec);
    setIdTec(idTec);
  };

  const fecharModalDelete = () => {
    setModalDelete(false);
  };

  const deletarTecnologia = async () => {
    await api
      .delete(`/users/techs/${idTec}`)
      .then(() => {
        toast.success(`Tecnologia ${tituloTec} deletado com sucesso!`, {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUser((oldUser) => {
          const newTecs = oldUser.techs.filter((tec) => {
            return tec.id !== idTec;
          });
          return { ...oldUser, techs: newTecs };
        });
        setModalDelete(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Algo deu errado!", {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <ModalDeleteContext.Provider
      value={{
        abrirModalDelete,
        fecharModalDelete,
        modalDelete,
        tituloTec,
        deletarTecnologia,
      }}
    >
      {children}
    </ModalDeleteContext.Provider>
  );
};
