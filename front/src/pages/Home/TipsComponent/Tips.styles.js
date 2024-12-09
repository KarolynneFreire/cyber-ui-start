import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  margin-top: 110px;
  gap: 30px;

  @media (max-width: 768px) {
    max-width: 100%; /* Permite mais flexibilidade em telas menores */
  }
`;


// Faixa do carrossel
export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    ${(props) => `-${props.currentIndex * (100 / props.visibleCards)}%`}
  );
  width: ${(props) => `${(props.visibleCards / props.visibleCards) * 100}%`};

  @media (max-width: 1024px) {
    transform: translateX(
      ${(props) => `-${props.currentIndex * (100 / 3)}%`}
    );
  }

  @media (max-width: 768px) {
    transform: translateX(
      ${(props) => `-${props.currentIndex * (100 / 2)}%`}
    );
  }

  @media (max-width: 480px) {
    transform: translateX(
      ${(props) => `-${props.currentIndex * 100}%`}
    );
  }
`;


// Slide do carrossel
export const CarouselSlide = styled.div`
  flex: 0 0 ${(props) => `calc(100% / ${props.visibleCards})`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex: 0 0 ${(props) => `calc(100% / 3)`}; 
  }

  @media (max-width: 768px) {
    flex: 0 0 ${(props) => `calc(100% / 2)`}; 
  }

  @media (max-width: 480px) {
    flex: 0 0 100%; 
  }
`;

// Card com dicas
export const TipCard = styled.div`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: #010810;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 250px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  /* Responsividade */
  @media (max-width: 1200px) {
    max-width: 250px;
    height: 220px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    max-width: 160px;
    height: 180px;
  }
`;

// Título do card
export const TipTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  background: var(--third-color);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 1.0rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Descrição do card
export const TipDescription = styled.p`
  margin-top: 40px;
  color: var(--text-opactity-color);
  font-size: 0.9rem; /* Diminui o texto para ajustar */
  line-height: 1.4;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.5rem;
  }
`;

// Controles do carrossel
export const Controls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

// Botão de controle
export const Button = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 0.5rem;
  transition: background 0.3s ease;
  margin-top: 50px;
  border-radius: 70%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
