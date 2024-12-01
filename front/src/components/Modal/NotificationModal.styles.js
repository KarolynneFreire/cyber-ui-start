import styled from "styled-components";


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
  background: var(--text-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
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

/**
 * Estilo para o botão de confirmação.
 * A cor de fundo do botão é condicional, dependendo se o botão está desabilitado. * 
 * @param {boolean} disabled - Se o botão está desabilitado, altera a cor de fundo e o cursor.
 */
export const ConfirmButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#cccccc" : "var(--secondary-color)")};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  transition: background-color 0.3s;
`;


export const ErrorMessage = styled.p`
  color: var(--text-opactity-color);
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;





