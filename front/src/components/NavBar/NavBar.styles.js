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
    width: 100%;
    background-color: var(--primary-color);
    z-index: 2;

    @media (max-width: 375px) {
    display: none;
    }
`

export const NavBarContent = styled.div`
    max-width: 1280px;
    width: 100vw;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 1440px) {
        padding: 0 20px;
        
    }
`

export const Logo = styled.h1`
    font-size: 1.8rem;
    font-family: "Rubik Glitch", system-ui;
    font-weight: 400;
    color: var(--text-color);
    animation: ${giltch} 5s ease-in-out infinite alternate;
    cursor: pointer;
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const BtnLogin = styled.button`
    background-color: transparent;
    border: none;
    color: var(--text-color);
    padding: 0 20px;
    cursor: pointer;
`

export const BtnSignup = styled.button`
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

    @media (max-width: 768px) {
        font-size: .8rem;
    }
`

export const IconProfile = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--text-color);
    gap: 10px;
    cursor: pointer;
    
    & img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    & i {
        cursor: pointer;
        transform: ${({ showDropDown }) => (showDropDown ? 'rotate(-180deg)' : 'rotate(0deg)')};
        transition: transform 0.3s ease;
    }
`

export const DropDown = styled.ul`
    background-color: aliceblue;
    list-style: none;
    border-radius: 4px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 70px;
    font-family: 'Poppins', sans-serif;
    
    & li {
        color: #000;
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: var(--text-opactity-color);
        }
    }
`
