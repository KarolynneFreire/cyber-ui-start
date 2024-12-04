import styled from "styled-components";

export const Team = styled.div`

    & span {
        font-size: .8rem;
        color: var(--fourth-color);
        font-weight: 900;
    }
`

export const ImgContainer = styled.div`
    max-width: 220px;
    height: 200px;
    display: flex;

    & img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
    }
`

export const About = styled.div`
    max-width: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

export const Name = styled.div`
    font-size: 1.2rem;
    font-family: "Rubik Glitch", system-ui;
    color: var(--text-color);
    text-align: center;
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 2px;
    
    & img {
        width: 25px;
        border: none;
        cursor: pointer;
        transition: transform .3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`
