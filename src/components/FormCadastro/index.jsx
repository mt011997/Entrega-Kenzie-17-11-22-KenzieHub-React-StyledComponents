import { Link } from "react-router-dom";
import { ContainerForm, ContainerGeral, DivSenha, Form } from "./styled";
import { useContext } from "react";
import { CadastroContext } from "../../contexts/contextCadastro";
import { Header } from "../DashBoardHeader/styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const FormCadastro = () => {
  const {
    handleSubmit,
    onSubmit,
    errors,
    register,
    toggleShowSenha,
    showSenha,
    showConfirmSenha,
    toggleShowConfirmSenha,
  } = useContext(CadastroContext);

  return (
    <ContainerGeral>
      <Header>
        <h1>Kenzie Hub</h1>
        <Link to={"/"}>Voltar</Link>
      </Header>
      <ContainerForm>
        <h2>Crie Sua conta</h2>
        <p>Rápido e grátis, vamos nessa!</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <DivSenha>
            <input
              type={showSenha ? "text" : "password"}
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <button type="button" onClick={toggleShowSenha}>
              {showSenha ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </DivSenha>

          <span>{errors.password?.message}</span>

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <DivSenha>
            <input
              type={showConfirmSenha ? "text" : "password"}
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <button onClick={toggleShowConfirmSenha}>
              {showConfirmSenha ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </DivSenha>
          <span>{errors.confirmPassword?.message}</span>

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            placeholder="Fale sobre Você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>

          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            placeholder="Opção de contato (Ex.Linkedin/...)"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>

          <label htmlFor="course_module">Selecionar Módulo</label>
          <select {...register("course_module")}>
            <option value="" selected disabled hidden>
              Escolha um módulo
            </option>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto módulo (Backend Avançado)</option>
          </select>
          <span>{errors.course_module?.message}</span>
          <button type="submit">Cadastrar</button>
        </Form>
      </ContainerForm>
    </ContainerGeral>
  );
};
