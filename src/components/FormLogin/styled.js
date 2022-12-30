import styled from "styled-components";

export const ContainerLogin = styled.div `
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 100%;
    max-width: 500px;
    margin: 3rem auto;
    font-family: 'Inter', sans-serif;
`

export const DivLogo = styled.div `
    h1{
        color: var(--Color-primary);
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 1rem;
        
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width:100%;
    gap: 1rem;
    background-color: var(--Gray-3);
    border-radius: 3px;
    padding: 10px;

    h2{
        color: var(--Gray-0);
        align-self: center;
        font-size: 16px;
        font-weight: bold;
        padding: 10px;
    }

    label{
        font-size: 12px;
        margin-bottom: -5px;
        color: var(--Gray-0)
    }

    input{
        background-color: var(--Gray-2);
        border: 1px solid var(--Gray-2);
        padding: 10px 5px ;
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

    button{
        width:100%;
        height: 35px;
        font-size: 14px;
        font-weight: 500;
        background-color: var(--Color-primary);
        border: var(--Color-primary);
        color: var(--Gray-0);
        border-radius: 3px;
        cursor: pointer;
    }

    p{
        font-size: 10px;
        color: var(--Gray-1);
        align-self: center;
    }

    a{
        width:100%;
        padding: 15px;
        font-size: 14px;
        font-weight: 500;
        background-color: var(--Gray-1);
        border-radius: 3px;
        cursor: pointer;
        text-decoration: none;
        color: var(--Gray-0);
        margin-bottom: 1rem;
    }

    span{
        color: var(--Negative);
        font-size: 10px;
        margin-top: -12px;
        margin-left: 5px; 
    }
`

export const DivSenhaLogin = styled.div `
    display: flex;
    width: 100%;

    input{
        width: 90%;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
        background-color: var(--Gray-2);
        border: 1px solid var(--Gray-2);
        height: 37px;
    }
`