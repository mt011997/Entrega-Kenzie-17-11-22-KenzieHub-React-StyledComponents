import { useContext } from "react";
import { ModalDeleteContext } from "../../contexts/contextModalDelete";
import { ContainerModal, HeaderModal, ModalSection } from "../Modal/styled";
import { DivButton } from "./styled";

export const ModalDelete = () => {
  const { fecharModalDelete, modalDelete, deletarTecnologia } =
    useContext(ModalDeleteContext);
  const { tituloTec } = useContext(ModalDeleteContext);

  return (
    <ModalSection modal={modalDelete}>
      <ContainerModal>
        <HeaderModal>
          <span>Tecnologia Detalhes</span>
          <button onClick={fecharModalDelete}>X</button>
        </HeaderModal>
        <DivButton>
          <h2>Deseja deletar a tecnologia: {tituloTec} ?</h2>
          <button type="button" onClick={deletarTecnologia}>
            Excluir
          </button>
        </DivButton>
      </ContainerModal>
    </ModalSection>
  );
};
