import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  EmailInfo,
  CheckboxContainer,
  ConfirmButton,
  ErrorMessage,
} from "./NotificationModal.styles";

/**
 * Modal de notificação para que o usuário escolha se deseja receber alertas sobre ataques futuros.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.userEmail - E-mail do usuário a ser exibido no modal.
 * @param {boolean} props.isOpen - Indica se o modal está aberto.
 * @param {function} props.onClose - Função para fechar o modal.
 */

const NotificationModal = ({ userEmail, isOpen, onClose }) => {

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isError, setIsError] = useState(false);

  // Se o modal não estiver aberto, retorna null e não renderiza nada
  if (!isOpen) return null;

  /**
   * Função para lidar com o clique no botão de confirmação.
   * Se a caixa de seleção não estiver marcada, exibe um erro.
   * Caso contrário, inicia o processo de "carregamento" e simula uma confirmação bem-sucedida.
   */
  const handleConfirm = () => {
    if (!isChecked) {
      setIsError(true); 
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmed(true);

      setTimeout(() => {
        setIsConfirmed(false);
        onClose();
      }, 2000);
    }, 2000);
  };

  /**
   * Função que lida com a mudança no estado da caixa de seleção.
   * Reseta o erro se a caixa for marcada.
   *
   * @param {Object} e - O evento de mudança no estado da caixa de seleção.
   */
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setIsError(false); 
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <FaTimes style={{ fontSize: "1.5rem", color: "#03162B" }} />
        </CloseButton>
        <Title>Deseja receber notificações sobre ataques futuros?</Title>
        <EmailInfo>
          Seu e-mail: <strong>{userEmail}</strong>
        </EmailInfo>
        <CheckboxContainer>
          <input
            type="checkbox"
            id="notify-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="notify-checkbox">Quero receber notificações</label>
        </CheckboxContainer>
        {isError && (
          <ErrorMessage>
            <FaExclamationCircle style={{ marginRight: "0.5rem", color: "red" }} />
            Você precisa marcar a caixa de confirmação.
          </ErrorMessage>
        )}
        <ConfirmButton onClick={handleConfirm} disabled={isLoading}>
          {isLoading ? (
            "Carregando..."
          ) : isConfirmed ? (
            <>
              <FaCheckCircle style={{ marginRight: "0.5rem", color: "green" }} />
              Confirmado!
            </>
          ) : (
            "Confirmar"
          )}
        </ConfirmButton>
      </ModalContainer>
    </Overlay>
  );
};

export default NotificationModal;


