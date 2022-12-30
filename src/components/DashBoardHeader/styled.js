import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0px;
    

    h1{
        color: var(--Color-primary);
        font-size: 16px;
        font-weight: bold;
    }

    a{
        background-color: var(--Gray-3);
        border: 1px solid var(--Gray-3);
        color: var(--Gray-0);
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        text-decoration: none;
        font-size: 12px;
    }

`