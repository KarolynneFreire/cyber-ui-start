import styled from "styled-components";

export const BtnFindOutMoreStyled = styled.button`
    /* display: block; */
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
    /* border: red solid; */

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
