import styled, { keyframes } from 'styled-components';
import '../../utils/variables.css';

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

export const NavBarContainer = styled.header`
    /* border: red solid 1px; */
    width: 100%;
    background-color: var(--primary-color);

    @media (max-width: 375px) {
    display: none;
    }
`

export const NavBarContent = styled.div`
    /* border: red solid 1px; */
    max-width: 1280px;
    width: 100vw;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.h1`
    /* border: red solid 1px; */
    font-size: 1.8rem;
    font-family: "Rubik Glitch", system-ui;
    font-weight: 400;
    color: var(--text-color);
    animation: ${giltch} 5s ease-in-out infinite alternate;

`

export const Navigation = styled.nav`
    /* border: red solid 1px; */
    display: flex;
    gap: 5px;
`

export const BtnLogin = styled.button`
    /* border: red solid 1px; */
    background-color: transparent;
    border: none;
    color: var(--text-color);
    padding: 0 20px;
    cursor: pointer;
`

export const BtnSignup = styled.button`
    /* border: red solid 1px; */
    padding: 15px 35px;
    border: none;
    font-size: 1rem;
    background-image: var(--third-color);
    color: var(--text-color);
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    
    &:hover {
        background-image: var(--third-reverse-color);
        transition: 0.3s ease-in-out;
    }
`
