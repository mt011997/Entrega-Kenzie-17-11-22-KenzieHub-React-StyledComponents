import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { modalSchema } from "../../validations/registerUser";
import { LoginContext } from "../contextLogin";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const { setUser } = useContext(LoginContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalSchema),
  });

  const criarTecnologia = async (data) => {
    await api
      .post("/users/techs", data)
      .then((res) => {
        toast.success("Tecnologia Cadastrada com sucesso", {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUser((oldUser) => {
          return { ...oldUser, techs: [...oldUser.techs, res.data] };
        });
        reset();
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
    <ModalContext.Provider
      value={{ criarTecnologia, register, handleSubmit, errors }}
    >
      {children}
    </ModalContext.Provider>
  );
};
