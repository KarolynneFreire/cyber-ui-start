import styled, { keyframes } from "styled-components";

export const giltch = keyframes`
    0%, 100% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
    }
    10% {
    opacity: 0.8;
    clip-path: inset(10% 0 20% 0);
    }
    20% {
    opacity: 0.6;
    transform: scaleX(1.02);
    }
    30% {
    opacity: 0.9;
    transform: scaleX(0.98);
    }
    50% {
    opacity: 0.4;
    }
    70% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
    transform: scaleX(1);
    }
`

export const BtnFindOutMoreStyled = styled.button`
    height: 50px;
    width: 100%;
    max-width: 200px;
    margin: 1rem 0;
    padding: 0.75rem;
    background-image: var(--third-color);
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: red;
    }
`

export const BtnVerifiedStyled = styled.button`
    height: 50px;
    width: 100%;
    max-width: 200px;
    margin: 1.5rem auto;
    padding: 0.75rem;
    background-image: var(--third-color);
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: red;
    }
`

export const TalkToUsStyled = styled.button`
    height: 50px;
    width: 100%;
    max-width: 200px;
    padding: 0.75rem;
    background-image: var(--third-color);
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;

    cursor: pointer;
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: red;
    }
`

export const BtnExploreTeamStyled = styled.button`
    height: 50px;
    width: 100%;
    max-width: 190px;
    padding: 0.75rem;
    background-color: transparent;
    border: var(--text-color) solid 1px;
    border-radius: 4px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;

    cursor: pointer;
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: #5C9698;
    }
`

export const BtnBackHomeStyled = styled.button`
    height: 60px;
    width: 100%;
    max-width: 250px;
    padding: 0.75rem;
    background-color: transparent;
    border: var(--text-color) solid 1px;
    border-radius: 4px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;

    cursor: pointer;
    transition: border-image 0.4s ease-in-out;
    animation: ${giltch} 5s ease-in-out infinite alternate;

    &:hover {
        border-image: linear-gradient(to right, #5C9698, #5C9698);
        border-image-slice: 1;
        border-radius: 4px;
    }
`
