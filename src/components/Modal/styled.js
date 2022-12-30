import styled from "styled-components";

export const ModalSection = styled.section `

    display: ${props => props.modal === true ? "flex" : "none"};
    flex-direction: column;
    background-color: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const ContainerModal = styled.div `
    display:flex;
    background-color: var(--Gray-4);
    width:90%;
    max-width: 400px;
    margin: 0 auto;
    flex-direction: column;
    height: auto;
    gap: 1rem;
    border-radius: 6px;
`

export const HeaderModal = styled.div `
    display: flex;
    justify-content: space-between;
    background-color: var(--Gray-2);
    padding: 15px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    align-items: center;

    span{
        color: var(--Gray-0);
        font-size: 14px;
        font-weight: 700;
    }

    button{
        background: none;
        border: none;
        color: var(--Gray-1);
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }
`
export const FormModal = styled.form `
    display: flex;
    flex-direction: column;
    padding: 5px 15px;
    gap: 0.5rem;

    label{
        font-size: 12px;
        color: var(--Gray-0);
        text-align: start;
        margin-top: 0.7rem;
    }

    input{
        background-color: var(--Gray-2);
        border: 1px solid var(--Gray-2);
        padding: 5px 5px ;
        border-radius: 6px;
        width: 97%;
        color: var(--Gray-0);
    }

    input::placeholder{
        color: var(--Gray-1);
    }

    input:focus{
        outline: 0;
        border: 1px solid var(--Gray-0);
    }

    input:focus::placeholder{
        color: var(--Gray-0);
    }

    select{
        background-color: var(--Gray-2);
        border: none;
        padding: 5px 5px ;
        border-radius: 6px;
        width: 100%;
        color: var(--Gray-1);
    }

    select:focus{
        color: var(--Gray-0);
    }

    button{
        margin-top: 10px;
        width:100%;
        height: 25px;
        font-size: 12px;
        font-weight: 500;
        background-color: var(--Color-primary);
        border: var(--Color-primary);
        color: var(--Gray-0);
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    span{
        color: var(--Negative);
        font-size: 10px;
        margin-left: 5px;
        text-align: start;
    }
`