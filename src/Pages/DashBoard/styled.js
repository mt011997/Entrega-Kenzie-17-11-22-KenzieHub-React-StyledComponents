import styled from "styled-components";

export const ContainerGeral = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 500px;
    font-family: 'Inter', sans-serif;

`
export const ContainerDois = styled.div `
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 1rem 0;
    text-align: start;
    
    h3{
        color: var(--Gray-0);
        font-size: 18px;
        font-weight: 700;
    }

    p{
        color: var(--Gray-0);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }

`