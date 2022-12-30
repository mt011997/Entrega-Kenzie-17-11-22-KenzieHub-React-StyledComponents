import styled from "styled-components";

export const UlTech = styled.ul `
    display: flex;
    flex-direction: column;
    max-height: 600px;
    background-color:var(--Gray-3);
    padding: 15px 10px;
    border-radius: 5px;
    gap: 1rem;
    margin-bottom: 1rem;

    h2{
        color: var(--Gray-0);
    }
`

export const LiTech = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--Gray-4);
    border-radius: 6px;
    padding: 20px 10px;
    cursor: pointer;

    &:hover{
        background-color:var(--Gray-2);
    }

    h2{
        color: var(--Gray-0);
        font-size: 14px;
        font-weight: 700;
    }

    div{
        display: flex;
        gap: 1rem;
        align-items: baseline;
    }

    span{
        color: var(--Gray-1);
        font-size: 12px;
    }

`