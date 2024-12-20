import styled from "styled-components";

export const Bg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: var(--secondary-color);
    width: 100%;

    @media (max-width: 374px) {
        display: none;
    }
`
