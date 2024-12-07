import styled from "styled-components";
import '../../utils/variables.css';

export const Main = styled.main`
background-image: var(--secondary-color);
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 91.5vh;

@media (max-width: 375px) {
    display: none;
}
`
