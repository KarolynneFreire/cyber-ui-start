import styled from "styled-components";
import cyberImg from './img/cyber.jpg'; 

export const Main = styled.main`
    max-width: 100vw; 
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center; 
    align-items: center; 
    color: var(--fiveth-color);
    font-size: 1rem;
    font-weight: 600;
    background-image: url(${cyberImg}); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    
    @media (max-width: 768px) {
        background-image: linear-gradient(
            rgba(255, 255, 255, 0.4), /* Gradiente branco translúcido */
            rgba(255, 255, 255, 0.4)
        ), 
        url(${cyberImg});
    }
`;

export const Content = styled.div`
    max-width: 1280px; 
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 0 20px; 
        text-align: center; 
    }
`;

export const Legend = styled.p`
    color: var(--fiveth-color);
    font-size: 1rem;
    font-weight: 600;

    
@media (max-width: 768px) {
    font-size: 0.875rem; 
}
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 3rem;
    color: var(--text-color);
    margin-top: 25px;

    & span {
        color: var(--fourth-color);
    }

    @media (max-width: 768px) {
        font-size: 2rem; 
    }
`;

