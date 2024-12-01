import styled from "styled-components";

export const Main = styled.main`
    max-width: 1280px;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    color: var(--fiveth-color);
    font-size: 1rem;
    font-weight: 600;
    /* border: red solid 1px; */
`

export const Legend = styled.p`
    color: var(--fiveth-color);
    font-size: 1rem;
    font-weight: 600;
`

export const Title = styled.h1`
    font-weight: 900;
    font-size: 4rem;
    color: var(--text-color);

    & span {
        color: var(--fourth-color)
    }
`
