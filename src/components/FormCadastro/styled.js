import styled from "styled-components";

export const ContainerGeral = styled.div `
    width: 90%;
    max-width: 500px;
    margin: auto;
    max-height: 95vh;
    font-family: 'Inter', sans-serif;
`

export const ContainerForm = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--Gray-3);
    color: var(--Gray-0);
    padding: 10px;
    border-radius: 3px;

    h2{
        font-size: 16px;
        font-weight: bold
    }

    p{
        font-size: 10px;
        color: var(--Gray-1);
    }
`
export const Form = styled.form `
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width:100%;
    gap: 1rem;

    label{
        font-size: 12px;
        margin-bottom: -5px;
    }

    input{
        background-color: var(--Gray-2);
        border: 1px solid var(--Gray-2);
        padding: 5px 0px 5px 5px;
        border-radius: 6px;
        width: 98%;
        max-width: 470px;
        color: var(--Gray-0);
    }

    input::placeholder{
        color: var(--Gray-1);
        padding-left: 5px
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
        max-width: 478px;
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
        background-color: var(--Color-primary-Negative);
        border: var(--Color-primary-Negative);
        color: var(--Gray-0);
        border-radius: 3px;
        cursor: pointer;
    }

    span{
        color: var(--Negative);
        font-size: 10px;
        margin-top: -12px;
        margin-left: 5px;
    }

`

export const DivSenha = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100%;
    max-width: 478px;

    input{
        background-color: var(--Gray-2);
        padding: 5px 5px ;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        width: 90%;
        color: var(--Gray-0);
        height:16px;
    }

    input::placeholder{
        color: var(--Gray-1);
    }

    input:focus{
        outline: 0;
        border: 1px solid var(--Gray-0);
    }

    button{
        background-color: var(--Gray-2);
        width:10%;
        padding: 0;
        height: 28px;
        margin: 0 auto;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px
    
    }
`