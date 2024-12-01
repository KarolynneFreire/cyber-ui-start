import styled from "styled-components";

export const NotAvailable = styled.div`
display: none;

    @media (max-width: 375px) {
        display: block;
        width: 100vw;
        height: 100vh;
        background-color: var(--primary-color);
        text-align: center;
    
        & h1 {
            color: #FFF;
            font-size: 3rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: "Rubik Glitch", system-ui;
            font-weight: 100;
            color: var(--text-color);
        }
    }
`
