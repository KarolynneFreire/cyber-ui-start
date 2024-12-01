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

const NotificationModal = ({ userEmail, isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isError, setIsError] = useState(false);

  if (!isOpen) return null;

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

        <ConfirmButton
          onClick={handleConfirm}
          disabled={isLoading} 
        >
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


