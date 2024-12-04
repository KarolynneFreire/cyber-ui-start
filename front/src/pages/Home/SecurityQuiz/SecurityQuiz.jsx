import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaExclamationTriangle, FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import { QuizContainer, QuizCard, StartScreen, QuestionText, Answers, AnswerButton, Result, ResultText, Icon, QuizWrapper, ImageContainer } from './SecurityQuiz.styles';
import quizImage from './cadeado.png'; 

const SecurityQuiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    { 
      id: 1, 
      text: 'Você usa senhas únicas para cada conta?', 
      points: 2, 
      correctAnswer: true, 
      icon: <FaLock size={30} color="#007BFF" /> 
    },
    { 
      id: 2, 
      text: 'Você ativa autenticação em duas etapas?', 
      points: 5, 
      correctAnswer: true, 
      icon: <FaShieldAlt size={30} color="#28a745" /> 
    },
    { 
      id: 3, 
      text: 'Você clicaria em links suspeitos em e-mails ou mensagens?', 
      points: 2, 
      correctAnswer: false, 
      icon: <FaExclamationTriangle size={30} color="#ff9800" /> 
    },
    { 
      id: 4, 
      text: 'Você faz backup dos seus dados regularmente?', 
      points: 2, 
      correctAnswer: true, 
      icon: <FaCheckCircle size={30} color="#4CAF50" /> 
    },
  ];

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setScore(0);
    setCurrentQuestion(0);
    setQuizFinished(false);
  };

  const handleAnswer = (answer) => {
    const newScore = answer === questions[currentQuestion].correctAnswer ? score + questions[currentQuestion].points : score;

    if (currentQuestion < questions.length - 1) {
      setScore(newScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore(newScore);
      setQuizFinished(true);
    }
  };

  const getResultCategory = () => {
    if (score >= 8) return 'ok';
    if (score >= 4) return 'intermediary';
    return 'bad';
  };

  const getResultIcon = () => {
    const category = getResultCategory();
    switch (category) {
      case 'ok':
        return <Icon className="ok-icon"><FaCheckCircle /></Icon>;
      case 'intermediary':
        return <Icon className="intermediary-icon"><FaExclamationCircle /></Icon>;
      case 'bad':
        return <Icon className="bad-icon"><FaTimesCircle /></Icon>;
      default:
        return <Icon><FaExclamationTriangle /></Icon>;
    }
  };

  return (
    <QuizWrapper>
     <ImageContainer>
        <img src={quizImage} alt="Quiz Illustration" />
      </ImageContainer>
      <QuizContainer>
        {!quizStarted ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, ease: 'backOut' }}>
            <QuizCard>
              <StartScreen>
                <h2>Teste Sua Segurança Digital</h2>
                <p>Descubra se suas práticas digitais estão protegidas contra ameaças.</p>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleStartQuiz}>
                  Iniciar
                </motion.button>
              </StartScreen>
            </QuizCard>
          </motion.div>
        ) : quizFinished ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Result className={getResultCategory()}>
              <ResultText>{getResultIcon()} <br />
                {getResultCategory() === 'ok' && 'Parabéns! Você está bem protegido!'}
                {getResultCategory() === 'intermediary' && 'Você está no caminho certo, mas pode melhorar.'}
                {getResultCategory() === 'bad' && 'Atenção! Suas práticas digitais apresentam riscos. Considere melhorá-las!'}
              </ResultText>
            </Result>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <QuizCard>
              <QuestionText>
                <span>{questions[currentQuestion].icon}</span>
                <p>{questions[currentQuestion].text}</p>
              </QuestionText>
              <Answers>
                <AnswerButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleAnswer(true)}>
                  Sim
                </AnswerButton>
                <AnswerButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleAnswer(false)}>
                  Não
                </AnswerButton>
              </Answers>
            </QuizCard>
          </motion.div>
        )}
      </QuizContainer>
    </QuizWrapper>
  );
};

export default SecurityQuiz;


