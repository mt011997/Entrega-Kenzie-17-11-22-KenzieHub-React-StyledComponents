import styled from "styled-components";

export const DivButton = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;

    h2{
        color: var(--Gray-0)
    }

    button{
        cursor: pointer;
        width:40%;
        padding: 10px;
        border-radius: 6px;
        background-color: var(--Color-primary);
        border: 1px solid var(--Color-primary);
        color: var(--Gray-0);
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    button:hover{
        filter: brightness(0.8);
    }
`