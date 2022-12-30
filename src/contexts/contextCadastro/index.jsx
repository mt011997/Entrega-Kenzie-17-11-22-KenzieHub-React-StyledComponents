import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { formSchema } from "../../validations/registerUser";

export const CadastroContext = createContext({});

export const CadastroProvider = ({ children }) => {
  const navigate = useNavigate();
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmSenha, setShowConfirmSenha] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const toggleShowSenha = (e) => {
    e.preventDefault();
    showSenha === true ? setShowSenha(false) : setShowSenha(true);
  };

  const toggleShowConfirmSenha = (e) => {
    e.preventDefault();
    showConfirmSenha === true
      ? setShowConfirmSenha(false)
      : setShowConfirmSenha(true);
  };
  const onSubmit = async (data) => {
    await api
      .post("/users", data)
      .then((res) => {
        toast.success("Cadastro Realizado com sucesso!", {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
        reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <CadastroContext.Provider
      value={{
        handleSubmit,
        onSubmit,
        errors,
        register,
        toggleShowSenha,
        showSenha,
        showConfirmSenha,
        toggleShowConfirmSenha,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};
