import styled from "styled-components";
import "../../utils/variables.css";

export const Main = styled.main`
  background-image: var(--secondary-color);
  background-size: cover;
  width: 100%;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  @media (max-width: 375px) {
    display: none;
  }
`;
export const SpaceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 15%;
`;
export const Title = styled.h1`
  color: var(--text-color);
`;

export const TitleGroup = styled.div`
  margin: 0% 0% 3% 0%;
  justify-items: center;
`;

export const RiskModal = styled.button`
  background: none;
  color: white;
  cursor: pointer;
  height: 10vh;
  border: 3px transparent solid;
  border-radius: 10px;
  width: 100%;
  font-size: 1em;

  &:hover {
    color: #0c6dc8;
    border: 3px #0c6dc8 solid;
  }
`;

export const ModalRiskOverview = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: var(--secondary-color);
  padding: 3%;
  border-radius: 15px;
  z-index: 1000;
  font-size: 1.5em;
  color: white;
  border: 5px #0C6DC8 solid;

  & h2{
    margin: 0% 0% 5% 0%;
    justify-self: center;
  }
`;

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

