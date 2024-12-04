import styled from 'styled-components';
import { motion } from 'framer-motion';


export const QuizWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;
  margin-bottom: 25px;

`;


export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;  // Ajuste o tamanho conforme necessário
  margin: 30px;
`;

export const ImageContainer = styled.div`
  width: 50%;  // Ajuste o tamanho conforme necessário
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px; // Para dar um efeito de borda arredondada, se necessário
  }
`;


export const QuizCard = styled.div`
  background-color: white;
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
  font-size: 18px;
  margin-bottom: 20px;
`;

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
