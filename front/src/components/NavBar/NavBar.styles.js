import styled from 'styled-components';
import '../../utils/variables.css';

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
    width: 100%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.h1`
    /* border: red solid 1px; */
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    font-weight: 400;

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
