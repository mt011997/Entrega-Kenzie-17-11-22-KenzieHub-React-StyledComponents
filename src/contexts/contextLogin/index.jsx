import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { loginSchema } from "../../validations/registerUser";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Hub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const onSubmit = async (data) => {
    await api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@Hub:token", res.data.token);
        localStorage.setItem("@Hub:User_id", res.data.user.id);
        api.defaults.headers.authorization = `Bearer ${res.data.token}`;
        const { user: userResponse } = res.data;
        setUser(userResponse);
        toast.success("Login Realizado com sucesso!", {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/dashboard", { replace: true });
        reset();
      })
      .catch((err) => {
        toast.error("Email ou senha incorreta!", {
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <LoginContext.Provider
      value={{
        handleSubmit,
        onSubmit,
        register,
        errors,
        user,
        loading,
        setUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
