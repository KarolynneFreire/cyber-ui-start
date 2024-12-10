import styled from 'styled-components';
import { motion } from 'framer-motion';


export const QuizWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  margin-top: 150px;
  gap: 30px;

  header {
    margin-bottom: 20px;

    h1 {
      font-size: 2.5rem;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
    }
  }

  @media (max-width: 768px) {
  padding: 10px;
  margin-top: 80px;

}

@media (max-width: 480px) {
  padding: 5px;
}

`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */
  justify-content: center; /* Centraliza os elementos */
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Alinha verticalmente em telas menores */
    gap: 10px;
  }
`;

export const QuizContainer = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px;
`;

export const ImageContainer = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 90%; /* Ajusta a largura máxima para 90% */
    height: auto;
    border-radius: 8px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 100%; /* Expande para toda a largura disponível */
    }
  }
`;



export const QuizCard = styled.div`
  background-color: var(--primary-color);
  width: 130%; /* Usa 90% da largura da tela */
  max-width: 500px; /* Limita a largura máxima */
  min-height: 300px; 
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

   @media (max-width: 768px) {
      width: 100%; /* Usa 90% da largura da tela */

  }
`;

export const StartScreen = styled.div`
text-align: center;
h2 {
  font-size: 24px; 
  margin-bottom: 20px;
  background: var(--third-color);
-webkit-background-clip: text; 
color: transparent;
}
  button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 18px;
    cursor: pointer;
    margin: 15px;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
      background-color: #0056b3;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const QuestionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza ícones e texto */
  font-size: 18px;
  margin-bottom: 20px;
  

  span {
    margin-bottom: 10px; /* Espaço entre o ícone e o texto */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin: 0;
    text-align: center; /* Texto centralizado */
    color: white;
  }
`;;

export const Answers = styled.div`
  margin-top: 20px;
`;

export const AnswerButton = styled(motion.button)`
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;


export const Result = styled(QuizCard)` 
  font-size: 24px;
  background-color: var(--primary-color);
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ResultText = styled.p`
  margin-top: 10px;
  color: white;
`;

export const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 15px;

  &.ok-icon {
    color: #4CAF50;
  }

  &.intermediary-icon {
    color: #FF9800;
  }

  &.bad-icon {
    color: #F44336;
  }
`;


export const ProgressBar = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;

  div {
    height: 10px;
    width: 0;
    background-color: ${({ category }) =>
      category === 'ok' ? '#4CAF50' : category === 'intermediary' ? '#4CAF50' : '#4CAF50'};
    transition: width 1.5s ease-in-out;
  }
`;


