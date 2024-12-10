import styled, { keyframes } from "styled-components";

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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed; /* Modal precisa estar fixo */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Garante a centralização exata */
  background: var(--text-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  animation: ${zoomBounceCombo} 0.6s ease-out; /* Aplica a animação */
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
  padding: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  background: var(--third-color);
  -webkit-background-clip: text; 
  color: transparent; 
`;

export const EmailInfo = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #555;

  strong {
    color: #000;
  }
`;

export const CheckboxContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center; 
`;

export const ConfirmButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#cccccc" : "var(--secondary-color)")};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;


  /* Hover Effect */
  &:hover {
    background: ${({ disabled }) =>
      disabled ? "#cccccc" : "#28a745"}; /* Cor verde ao passar o mouse */
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")}; /* Aumenta o botão ao passar o mouse */
  }
`;


export const ErrorMessage = styled.p`
  color: var(--text-opactity-color);
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
