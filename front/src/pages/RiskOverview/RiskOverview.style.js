import styled, { keyframes } from "styled-components";
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
  height: 85vh;
  max-height: 85vh;
  overflow: overlay;

  scrollbar-width: thin; /* para Firefox */
  scrollbar-color: transparent transparent; /* para Firefox */

  &::-webkit-scrollbar {
    width: 0px; /* Faz com que a barra de rolagem não seja visível */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Torna a trilha da barra de rolagem invisível */
  }

  &::-webkit-scrollbar-thumb {
    background: transparent; /* Torna o polegar da barra de rolagem invisível */
  }
`;
export const Title = styled.h1`
  color: var(--text-color);
`;

export const TitleGroup = styled.div`
  padding: 0.5vh 2vw;
  background-color: var(--fiveth-color);
  margin: 2% 0% 0% 0%;
  justify-items: center;
  border-radius: 15px;
  text-align: center;
  color: white; /* Cor de sucesso ou para dar destaque */
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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--fiveth-color);
    border: 3px var(--fiveth-color) solid;
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



export const IconRiskModal = styled.img`
  height: 4vh;
  margin: 5%;
`;

export const TitleNoData = styled.h1`
  color: var(--text-color);
  font-size: 1.3em;
  background-color: var(--fourth-color);
  width: 70vw;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;

  @media (max-width: 1480px) {
    font-size: 1.1em;
    width: 80vw;
  }

  @media (max-width: 1024px) {
    font-size: 0.9em;
    width: 90vw;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    width: 95vw;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.7em;
    width: 95vw;
    padding: 10px;
  }
`;

export const NotificationButton = styled.button`
  background-color: #43a047;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-top: 20px; /* Margem superior para afastar do Navbar */

  &:hover {
    background-color: #2e7d32; /* Verde mais escuro no hover */
  }

  i {
    margin-right: 10px; /* Aumenta o espaço entre o ícone e o texto */
  }
`;


/* Animação para o modal */
const modalFadeIn = `
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const zoomBounceCombo = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  40% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  60% {
    transform: translate(-50%, -50%) scale(1.05);
  }
  80% {
    transform: translate(-50%, -50%) scale(1.02);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
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
  color: white;
  border: 5px var(--fiveth-color) solid;
  height: 70%;
  width: 60%;
  font-size: 1.2em;
  overflow: auto;
  animation: ${zoomBounceCombo} 0.6s ease-out; /* Usando a animação aqui */
`;

/* Botão de Fechar do Modal */
export const ModalCloseBtn = styled.button`
  background-color: var(--fiveth-color);
  border: none;
  border-radius: 5px;
  height: 4vh;
  width: 15vw; /* Ajuste o tamanho do botão conforme a largura da tela */
  font-size: 1em;
  color: white;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    transform: translateX(-50%) translateY(-5px); /* Faz o botão subir */
    border: 2px solid white; /* Adiciona uma borda branca quando o mouse passar */
  }
`;



