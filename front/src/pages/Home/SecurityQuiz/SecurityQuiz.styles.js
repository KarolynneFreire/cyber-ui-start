import styled from 'styled-components';
import { motion } from 'framer-motion';


export const QuizWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

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
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
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
  flex: 1; /* Ajusta o tamanho proporcionalmente */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;


export const QuizCard = styled.div`
background-color: var(--primary-color);
  width: 500px;
  height: 300px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


export const Result = styled.div`
  font-size: 24px;
  padding: 25px;
  border-radius: 10px;

  &.ok {
    background-color: #4CAF50;
    color: white;
  }

  &.intermediary {
    background-color: #FF9800;
    color: white;
  }

  &.bad {
    background-color: #F44336;
    color: white;
  }
`;

export const ResultText = styled.p`
  margin-top: 20px;
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
