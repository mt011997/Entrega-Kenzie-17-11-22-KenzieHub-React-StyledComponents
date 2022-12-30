import { useContext } from "react";
import { DashBoardContext } from "../../contexts/contextDashBoard";
import { ModalContext } from "../../contexts/contextModal";
import { ContainerModal, FormModal, HeaderModal, ModalSection } from "./styled";

export const Modal = () => {
  const { modal, fecharModal } = useContext(DashBoardContext);
  const { criarTecnologia, register, handleSubmit, errors } =
    useContext(ModalContext);
  return (
    <ModalSection modal={modal}>
      <ContainerModal>
        <HeaderModal>
          <span>Cadastrar tecnologia</span>
          <button onClick={fecharModal}>X</button>
        </HeaderModal>
        <FormModal onSubmit={handleSubmit(criarTecnologia)}>
          <label htmlFor="title">Nome</label>
          <input type="text" placeholder="Tecnologia" {...register("title")} />
          <span>{errors.title?.message}</span>
          <label htmlFor="status">Selecionar Status</label>
          <select {...register("status")}>
            <option value="" selected disabled hidden>
              Selecione um Status
            </option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <span>{errors.status?.message}</span>
          <button type="submit">Cadastrar Tecnologia</button>
        </FormModal>
      </ContainerModal>
    </ModalSection>
  );
};
