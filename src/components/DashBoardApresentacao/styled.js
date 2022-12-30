import styled from "styled-components";

export const ContainerUm = styled.div `
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 1rem 0;
    padding: 2rem 0;
    border-top: 1px solid var(--Gray-3);
    border-bottom: 1px solid var(--Gray-3);

    h2{
        color: var(--Gray-0);
        font-size: 18px;
        font-weight: 700;
    }

    span{
        color: var(--Gray-1);
        font-size: 12px;
        font-weight: 400;
    }
`