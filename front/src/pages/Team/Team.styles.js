import styled from "styled-components";

export const Bg = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: var(--secondary-color);
    width: 100%;
    height: auto;
    color: var(--text-color);
`

export const Initial = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 100%;
    margin-top: 40px;

    & i {
        color: var(--text-color);
        font-size: 50px;
        cursor: pointer;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: var(--fourth-color);
        }

        @media (max-width: 525px) {
        font-size: 2rem;
    }
    }
`

export const Title = styled.h1`
    font-family: 'Sen', sans-serif;

    @media (max-width: 525px) {
        font-size: 1.5rem;
    }
`

export const Content = styled.div`
    max-width: 1280px;
    padding: 20px;
    width: 100%;
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
    background-color: var(--bg-team-color);
    align-items: center;
    justify-items: center;
    margin: 30px 0 100px 0;
    gap: 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 525px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
